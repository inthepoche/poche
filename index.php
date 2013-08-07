<?php
/**
 * poche, a read it later open source system
 *
 * @category   poche
 * @author     Nicolas Lœuillet <support@inthepoche.com>
 * @copyright  2013
 * @license    http://www.wtfpl.net/ see COPYING file
 */

include dirname(__FILE__).'/inc/poche/config.inc.php';

$referer = empty($_SERVER['HTTP_REFERER']) ? '' : $_SERVER['HTTP_REFERER'];
$view = Tools::checkVar('view', 'home');
$action = Tools::checkVar('action');
$id = Tools::checkVar('id');
$_SESSION['sort'] = Tools::checkVar('sort', 'id');
$url = new Url((isset ($_GET['url'])) ? $_GET['url'] : '');

if (isset($_GET['login'])) {
    # hello you
    $poche->login($referer);
}
elseif (isset($_GET['logout'])) {
    # see you soon !
    $poche->logout();
}
elseif (isset($_GET['config'])) {
    # Update password
    $poche->updatePassword();
}
elseif (isset($_GET['import'])) {
    $poche->import($_GET['from']);
}
elseif (isset($_GET['export'])) {
    $poche->export();
}

$tpl_vars = array(
    'referer' => $referer,
    'view' => $view,
    'poche_url' => Tools::getPocheUrl(),
    'title' => _('poche, a read it later open source system'),
    'token' => Session::getToken(),
);

if (Session::isLogged()) {
    $poche->action($action, $url, $id);
    $tpl_file = Tools::getTplFile($view);
    $tpl_vars = array_merge($tpl_vars, $poche->displayView($view, $id));
}
else {
    $tpl_file = 'login.twig';
}

# because messages can be added in $poche->action(), we have to add this entry now (we can add it before)
$messages = $poche->messages->display('all', FALSE);
$tpl_vars = array_merge($tpl_vars, array('messages' => $messages));

# Aaaaaaand action !
echo $poche->tpl->render($tpl_file, $tpl_vars);