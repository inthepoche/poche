<?php
/**
 * poche, a read it later open source system
 *
 * @category   poche
 * @author     Nicolas Lœuillet <support@inthepoche.com>
 * @copyright  2013
 * @license    http://www.wtfpl.net/ see COPYING file
 */

require_once 'inc/poche/global.inc.php';

# Start Poche
$poche = new Poche();

# Parse GET & REFERER vars
$referer = empty($_SERVER['HTTP_REFERER']) ? '' : $_SERVER['HTTP_REFERER'];
$view = Tools::checkVar('view', 'home');
$action = Tools::checkVar('action');
$id = Tools::checkVar('id');
$_SESSION['sort'] = Tools::checkVar('sort', 'id');
$url = new Url((isset ($_GET['url'])) ? $_GET['url'] : '');

# vars to _always_ send to templates
$tpl_vars = array(
    'referer' => $referer,
    'view' => $view,
    'poche_url' => Tools::getPocheUrl(),
    'title' => _('poche, a read it later open source system'),
    'token' => Session::getToken(),
    'theme' => $poche->getTheme()
);

if (! $poche->isInstalled()) {
    $tpl_file = Tools::getTplFile('error', $poche->getTheme());
    $tpl_vars = array_merge($tpl_vars, array('msg' => $poche->getNotInstalledMessage()));
    echo $poche->tpl->render($tpl_file, $tpl_vars);
    exit;
}

# poche actions
if (isset($_GET['login'])) {
    # hello you
    $poche->login($referer);
} elseif (isset($_GET['logout'])) {
    # see you soon !
    $poche->logout();
} elseif (isset($_GET['config'])) {
    # Update password
    $poche->updatePassword();
} elseif (isset($_GET['import'])) {
    $import = $poche->import($_GET['from']);
} elseif (isset($_GET['export'])) {
    $poche->export();
} elseif (isset($_GET['updatetheme'])) {
    $poche->updateTheme();
}

if (Session::isLogged()) {
    $poche->action($action, $url, $id);
    $tpl_file = Tools::getTplFile($view, $poche->getTheme());
    $tpl_vars = array_merge($tpl_vars, $poche->displayView($view, $id));
} else {
    $tpl_file = Tools::getTplFile('login', $poche->getTheme());
}

# because messages can be added in $poche->action(), we have to add this entry now (we can add it before)
$messages = $poche->messages->display('all', FALSE);
$tpl_vars = array_merge($tpl_vars, array('messages' => $messages));

# display poche
echo $poche->tpl->render($tpl_file, $tpl_vars);