<?php
/**
 * poche, a read it later open source system
 *
 * @category   poche
 * @author     Nicolas Lœuillet <nicolas@loeuillet.org>
 * @copyright  2013
 * @license    http://www.wtfpl.net/ see COPYING file
 */

define ('STORAGE','sqlite'); # postgres, mysql, sqlite
define ('STORAGE_SERVER', 'localhost'); # leave blank for sqlite
define ('STORAGE_DB', 'poche'); # only for postgres & mysql
define ('STORAGE_SQLITE', __DIR__ . '/../../db/poche.sqlite');
define ('STORAGE_USER', 'postgres'); # leave blank for sqlite
define ('STORAGE_PASSWORD', 'postgres'); # leave blank for sqlite

define ('MODE_DEMO', FALSE);
define ('DEBUG_POCHE', FALSE);
define ('CONVERT_LINKS_FOOTNOTES', FALSE);
define ('REVERT_FORCED_PARAGRAPH_ELEMENTS', FALSE);
define ('DOWNLOAD_PICTURES', FALSE);
define ('SHARE_TWITTER', TRUE);
define ('SHARE_MAIL', TRUE);
define ('ABS_PATH', 'assets/');
define ('TPL', __DIR__ . '/../../tpl');
define ('LOCALE', __DIR__  . '/../../locale');
define ('CACHE', __DIR__  . '/../../cache');
define ('PAGINATION', '10');
define ('THEME', 'light');