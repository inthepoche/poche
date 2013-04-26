<?php
/**
 * poche, a read it later open source system
 *
 * @category   poche
 * @author     Nicolas Lœuillet <support@inthepoche.com>
 * @copyright  2013
 * @license    http://www.wtfpl.net/ see COPYING file
 */

/**
 * Permet de générer l'URL de poche pour le bookmarklet
 */

function rel2abs($rel, $base)
{
    /* return if already absolute URL */
    if (parse_url($rel, PHP_URL_SCHEME) != '') return $rel;

    /* queries and anchors */
    if ($rel[0]=='#' || $rel[0]=='?') return $base.$rel;

    /* parse base URL and convert to local variables:
       $scheme, $host, $path */
    extract(parse_url($base));

    /* remove non-directory element from path */
    $path = preg_replace('#/[^/]*$#', '', $path);

    /* destroy path if relative url points to root */
    if ($rel[0] == '/') $path = '';

    /* dirty absolute URL */
    $abs = "$host$path/$rel";

    /* replace '//' or '/./' or '/foo/../' with '/' */
    $re = array('#(/\.?/)#', '#/(?!\.\.)[^/]+/\.\./#');
    for($n=1; $n>0; $abs=preg_replace($re, '/', $abs, -1, $n)) {}

    /* absolute URL is ready! */
    return $scheme.'://'.$abs;
}

// $str=preg_replace('#(href|src)="([^:"]*)("|(?:(?:%20|\s|\+)[^"]*"))#','$1="http://wintermute.com.au/$2$3',$str);

function remove_relative_links($data, $base) {
	// cherche les balises 'a' qui contiennent un href
	$matches = array();
	preg_match_all('#(href|src)="([^:"]*)("|(?:(?:%20|\s|\+)[^"]*"))#Si', $data, $matches, PREG_SET_ORDER);

	// ne conserve que les liens ne commen�ant pas par un protocole � protocole:// � ni par une ancre � # �
	foreach($matches as $i => $link) {
		$link[1] = trim($link[1]);

		if (!preg_match('#^(([a-z]+://)|(\#))#', $link[1]) ) {

			$absolutePath=rel2abs($link[2],$base);

			$data = str_replace($matches[$i][2], $absolutePath, $data);
		}

	}
	return $data;
}


function get_poche_url()
{
    $protocol = "http";
    if(isset($_SERVER['HTTPS'])) {
        if($_SERVER['HTTPS'] != "off" && $_SERVER['HTTPS'] != "") {
            $protocol = "https";
        }
    }

    return $protocol . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
}

// function define to retrieve url content
function get_external_file($url)
{
    $timeout = 15;
    // spoofing FireFox 18.0
    $useragent="Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0";

    if  (in_array  ('curl', get_loaded_extensions())) {
        // Fetch feed from URL
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HEADER, false);

        // FOR SSL do not verified certificate
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_AUTOREFERER, TRUE );

        // FeedBurner requires a proper USER-AGENT...
        curl_setopt($curl, CURL_HTTP_VERSION_1_1, true);
        curl_setopt($curl, CURLOPT_ENCODING, "gzip, deflate");
        curl_setopt($curl, CURLOPT_USERAGENT, $useragent);

        $data = curl_exec($curl);

        $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        $httpcodeOK = isset($httpcode) and ($httpcode == 200 or $httpcode == 301);

        curl_close($curl);
    } else {

        // create http context and add timeout and user-agent
        $context = stream_context_create(array(
                                'http'=>array('timeout' => $timeout,
                                    'header'=> "User-Agent: ".$useragent,	/*spoot Mozilla Firefox*/
                                    'follow_location' => true),
                                // FOR SSL do not verified certificate
                                'ssl' => array('verify_peer' => false,
                                        'allow_self_signed' => true)
                                )
                            );

        // only download page lesser than 4MB
        $data = @file_get_contents($url, false, $context, -1, 4000000); // We download at most 4 MB from source.

        if(isset($http_response_header) and isset($http_response_header[0])) {
            $httpcodeOK = isset($http_response_header) and isset($http_response_header[0]) and ((strpos($http_response_header[0], '200 OK') !== FALSE) or (strpos($http_response_header[0], '301 Moved Permanently') !== FALSE));
        }
    }

    // if response is not empty and response is OK
    if (isset($data) and isset($httpcodeOK) and $httpcodeOK ) {

        // take charset of page and get it
        preg_match('#<meta .*charset=.*>#Usi', $data, $meta);

        // if meta tag is found
        if (!empty($meta[0])) {
            // retrieve encoding in $enc
            preg_match('#charset="?(.*)"#si', $meta[0], $enc);

            // if charset is found set it otherwise, set it to utf-8
            $html_charset = (!empty($enc[1])) ? strtolower($enc[1]) : 'utf-8';

        } else {
            $html_charset = 'utf-8';
            $enc[1] = '';
        }

        // replace charset of url to charset of page
        $data = str_replace('charset='.$enc[1], 'charset='.$html_charset, $data);

        return $data;
    }
    else {
        return FALSE;
    }
}

function convertImageToBase64($html,$url) {
    $content = $html;
	
	/**
	 * On modifie les URLS des images dans le corps de l'article
	 */
	$matches = array();
	preg_match_all('#<\s*(img)[^>]+src="([^"]*)"[^>]*>#Si', $content, $matches, PREG_SET_ORDER);
	foreach($matches as $i => $link)
	{
		$link[1] = trim($link[1]);
		$absolute_path = get_absolute_link($link[2],$url);
		$type = pathinfo($absolute_path, PATHINFO_EXTENSION);
		$data = get_external_file($absolute_path);
		$base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
		$content = str_replace($matches[$i][2], $base64, $content);

	}

	return $content;
}

/**
 * Préparation de l'URL avec récupération du contenu avant insertion en base
 */
function prepare_url($url)
{
    $parametres = array();
    $url        = html_entity_decode(trim($url));

    // We remove the annoying parameters added by FeedBurner and GoogleFeedProxy (?utm_source=...)
    // from shaarli, by sebsauvage
    $i=strpos($url,'&utm_source='); if ($i!==false) $url=substr($url,0,$i);
    $i=strpos($url,'?utm_source='); if ($i!==false) $url=substr($url,0,$i);
    $i=strpos($url,'#xtor=RSS-'); if ($i!==false) $url=substr($url,0,$i);

    $title = $url;
    $html = Encoding::toUTF8(get_external_file($url,15));
    // If get_external_file if not able to retrieve HTTPS content try the same URL with HTTP protocol
    if (!preg_match('!^https?://!i', $url) && (!isset($html) || strlen($html) <= 0)) {
        $url = 'http://' . $url;
        $html = Encoding::toUTF8(get_external_file($url,15));
    }

    if (function_exists('tidy_parse_string')) {
        $tidy = tidy_parse_string($html, array(), 'UTF8');
        $tidy->cleanRepair();
    	$html = $tidy->value;
    }

    if (isset($html) and strlen($html) > 0)
    {
        $r = new Readability($html, $url);

        $r->convertLinksToFootnotes = CONVERT_LINKS_FOOTNOTES;
        $r->revertForcedParagraphElements = REVERT_FORCED_PARAGRAPH_ELEMENTS;

        if($r->init())
        {
            $content = $r->articleContent->innerHTML;
            $parametres['title'] = $r->articleTitle->innerHTML;
            $parametres['content'] = convertImageToBase64(remove_relative_links($content,$url),$url);

            return $parametres;
        }
    }

    return FALSE;
}

/**
 * On modifie les URLS des images dans le corps de l'article
 */
function filtre_picture($content, $url, $id)
{
    $matches = array();
    preg_match_all('#<\s*(img)[^>]+src="([^"]*)"[^>]*>#Si', $content, $matches, PREG_SET_ORDER);
    foreach($matches as $i => $link)
    {
        $link[1] = trim($link[1]);
        if (!preg_match('#^(([a-z]+://)|(\#))#', $link[1]) )
        {
            $absolute_path = get_absolute_link($link[2],$url);
            $filename = basename(parse_url($absolute_path, PHP_URL_PATH));
            $directory = create_assets_directory($id);
            $fullpath = $directory . '/' . $filename;
            download_pictures($absolute_path, $fullpath);
            $content = str_replace($matches[$i][2], $fullpath, $content);
        }

    }

    return $content;
}

/**
 * Retourne le lien absolu
 */
function get_absolute_link($relative_link, $url)
{
    /* return if already absolute URL */
    if (parse_url($relative_link, PHP_URL_SCHEME) != '') return $relative_link;

    /* queries and anchors */
    if ($relative_link[0]=='#' || $relative_link[0]=='?') return $url . $relative_link;

    /* parse base URL and convert to local variables:
       $scheme, $host, $path */
    extract(parse_url($url));

    /* remove non-directory element from path */
    $path = preg_replace('#/[^/]*$#', '', $path);

    /* destroy path if relative url points to root */
    if ($relative_link[0] == '/') $path = '';

    /* dirty absolute URL */
    $abs = $host . $path . '/' . $relative_link;

    /* replace '//' or '/./' or '/foo/../' with '/' */
    $re = array('#(/\.?/)#', '#/(?!\.\.)[^/]+/\.\./#');
    for($n=1; $n>0; $abs=preg_replace($re, '/', $abs, -1, $n)) {}

    /* absolute URL is ready! */
    return $scheme.'://'.$abs;
}

/**
 * Téléchargement des images
 */

function download_pictures($absolute_path, $fullpath)
{
    $rawdata = get_external_file($absolute_path);

    if(file_exists($fullpath)) {
        unlink($fullpath);
    }
    $fp = fopen($fullpath, 'x');
    fwrite($fp, $rawdata);
    fclose($fp);
}

/**
 * Crée un répertoire de médias pour l'article
 */
function create_assets_directory($id)
{
    $assets_path = ABS_PATH;
    if(!is_dir($assets_path)) {
        mkdir($assets_path, 0705);
    }

    $article_directory = $assets_path . $id;
    if(!is_dir($article_directory)) {
        mkdir($article_directory, 0705);
    }

    return $article_directory;
}

/**
 * Suppression du répertoire d'images
 */
function remove_directory($directory)
{
    if(is_dir($directory)) {
        $files = array_diff(scandir($directory), array('.','..'));
        foreach ($files as $file) {
            (is_dir("$directory/$file")) ? remove_directory("$directory/$file") : unlink("$directory/$file");
        }
        return rmdir($directory);
    }
}

function display_view($view, $id = 0, $full_head = 'yes')
{
    global $tpl, $store, $msg;

    switch ($view)
    {
        case 'export':
            $entries = $store->retrieveAll();
            $tpl->assign('export', myTool::renderJson($entries));
            $tpl->draw('export');
            logm('export view');
            break;
        case 'config':
            $tpl->assign('load_all_js', 0);
            $tpl->draw('head');
            $tpl->draw('home');
            $tpl->draw('config');
            $tpl->draw('js');
            $tpl->draw('footer');
            logm('config view');
            break;
        case 'view':
            $entry = $store->retrieveOneById($id);

            if ($entry != NULL) {
                $tpl->assign('id', $entry['id']);
                $tpl->assign('url', $entry['url']);
                $tpl->assign('title', $entry['title']);
                $content = $entry['content'];
                if (function_exists('tidy_parse_string')) {
                    $tidy = tidy_parse_string($content, array('indent'=>true, 'show-body-only' => true), 'UTF8');
                    $tidy->cleanRepair();
                    $content = $tidy->value;
                }
                $tpl->assign('content', $content);
                $tpl->assign('is_fav', $entry['is_fav']);
                $tpl->assign('is_read', $entry['is_read']);
                $tpl->assign('load_all_js', 0);
                $tpl->draw('view');
            }
            else {
                logm('error in view call : entry is NULL');
            }

            logm('view link #' . $id);
            break;
	case 'export_view':
	    $entries = $store->getEntriesByView($id);
	    if(isset($entries) && count($entries) > 0) {
	      $epub = new Epub();
	      $style = file_get_contents('./css/style.css', FILE_USE_INCLUDE_PATH);
	      $knacss = file_get_contents('./css/knacss.css', FILE_USE_INCLUDE_PATH);
// Title and Identifier are mandatory!
	      $epub->setTitle("Poche book ".$id." ".strftime("%Y_%m_%d",time()));
	      $epub->setIdentifier("http://JohnJaneDoePublications.com/books/TestBook.html", EPub::IDENTIFIER_URI); 
	      $epub->setLanguage("en");
	      $epub->setDescription("Poche Export");
	      $epub->setAuthor("Poche Export", "Poche Export");
	      $epub->setPublisher("Poche", "http://JohnJaneDoePublications.com/");
	      $epub->setDate(time()); // Strictly not needed as the book date defaults to time().

	      $epub->addCSSFile("style.css", "css1", $style);
	      $epub->addCSSFile("knacss.css", "css2", $knacss);

	      $chapter=0;
	      foreach ($entries as $entry) {
	       if ($entry != NULL) {
		 $chapter++;
                 $tpl->assign('id', $entry['id']);
                 $tpl->assign('url', $entry['url']);
                 $tpl->assign('title', $entry['title']);
                 $content = $entry['content'];
                 if (function_exists('tidy_parse_string')) {
                     $tidy = tidy_parse_string($content, array('indent'=>true, 'show-body-only' => true), 'UTF8');
                     $tidy->cleanRepair();
                     $content = $tidy->value;
                 }
                 $tpl->assign('content', $content);
		 $epub->addChapter($entry['title'], "chapter".$chapter.".html", $tpl->draw('entry',true));
//                 $tpl->draw('entry',true);
               }
	      }
	     $epub->finalize(); // Finalize the book, and build the archive.
	     $epub->saveBook('epub-filename', './epub');
	     // Send the book to the client. ".epub" will be appended if missing.
	     $zipData = $epub->sendBook("Poche_book_".$id."_".strftime("%Y_%m_%d",time()));
 
	    }
	    break;
        default: # home view
            $entries = $store->getEntriesByView($view);

            $tpl->assign('entries', $entries);

            if ($full_head == 'yes') {
                $tpl->assign('load_all_js', 1);
                $tpl->draw('head');
                $tpl->draw('home');
            }

            $tpl->draw('entries');

            if ($full_head == 'yes') {
                $tpl->draw('js');
                $tpl->draw('footer');
            }
            break;
    }
}

/**
 * Appel d'une action (mark as fav, archive, delete)
 */
function action_to_do($action, $url, $id = 0)
{
    global $store, $msg;

    switch ($action)
    {
        case 'add':
            if ($url == '')
                continue;

            if (MyTool::isUrl($url)) {
                if($parametres_url = prepare_url($url)) {
                    if ($store->add($url, $parametres_url['title'], $parametres_url['content'])) {
                        $last_id = $store->getLastId();
//                        if (DOWNLOAD_PICTURES === TRUE) {
//                           $parametres_url['content']  = filtre_picture($parametres_url['content'], $url, $last_id);
//                        }
                        $msg->add('s', 'the link has been added successfully');
                    }
                    else {
                        $msg->add('e', 'error during insertion : the link wasn\'t added');
                    }
                }
                else {
                    $msg->add('e', 'error during url preparation : the link wasn\'t added');
                    logm('error during url preparation');
                }
            }
            else {
                $msg->add('e', 'error during url preparation : the link is not valid');
                logm($url . ' is not a valid url');
            }

            logm('add link ' . $url);
            break;
        case 'delete':
            if ($store->deleteById($id)) {
                remove_directory(ABS_PATH . $id);
                $msg->add('s', 'the link has been deleted successfully');
                logm('delete link #' . $id);
            }
            else {
                $msg->add('e', 'the link wasn\'t deleted');
                logm('error : can\'t delete link #' . $id);
            }
            break;
        case 'toggle_fav' :
            $store->favoriteById($id);
            $msg->add('s', 'the favorite toggle has been done successfully');
            logm('mark as favorite link #' . $id);
            break;
        case 'toggle_archive' :
            $store->archiveById($id);
            $msg->add('s', 'the archive toggle has been done successfully');
            logm('archive link #' . $id);
            break;
        default:
            break;
    }
}

function logm($message)
{
    $t = strval(date('Y/m/d_H:i:s')).' - '.$_SERVER["REMOTE_ADDR"].' - '.strval($message)."\n";
    file_put_contents('./log.txt',$t,FILE_APPEND);
}
