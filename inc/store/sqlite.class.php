<?php
/**
 * poche, a read it later open source system
 *
 * @category   poche
 * @author     Nicolas Lœuillet <support@inthepoche.com>
 * @copyright  2013
 * @license    http://www.wtfpl.net/ see COPYING file
 */

class Sqlite extends Store {

    public static $db_path = 'sqlite:./db/poche.sqlite';
    var $handle;

    function __construct() {
        parent::__construct();

        $this->handle = new PDO(self::$db_path);
        $this->handle->exec('CREATE TABLE IF NOT EXISTS "entries" ("id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "title" VARCHAR, "url" VARCHAR UNIQUE , "is_read" INTEGER DEFAULT 0, "is_fav" INTEGER DEFAULT 0)');
        $this->handle->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    private function getHandle() {
        return $this->handle;
    }

    private function executeQuery($sql, $params) {
        try
        {
            $query = $this->getHandle()->prepare($sql);
            $query->execute($params);
            return $query;
        }
        catch (Exception $e)
        {
            logm('execute query error : '.$e->getMessage());
        }
    }

    public function retrieveAll() {
        $sql        = "SELECT * FROM entries ORDER BY id";
        $query      = $this->executeQuery($sql, array());
        $entries    = $query->fetchAll();

        return $entries;
    }

    public function retrieveOneById($id) {
        parent::__construct();

        $entry  = NULL;
        $sql    = "SELECT * FROM entries WHERE id=?";
        $params = array(intval($id));
        $query  = $this->executeQuery($sql, $params);
        $entry  = $query->fetchAll();

        return $entry[0];
    }

    public function retrieveOneByURL($url) {
        parent::__construct();

        $entry  = NULL;
        $sql    = "SELECT * FROM entries WHERE url =?";
        $params = array(intval($url));
        $query  = $this->executeQuery($sql, $params);
        $entry  = $query->fetchAll();

        return $entry[0];
    }

    public function getEntriesByView($view) {
        parent::__construct();

        switch ($_SESSION['sort'])
        {
            case 'ia':
                $order = 'ORDER BY id';
                break;
            case 'id':
                $order = 'ORDER BY id DESC';
                break;
            case 'ta':
                $order = 'ORDER BY lower(title)';
                break;
            case 'td':
                $order = 'ORDER BY lower(title) DESC';
                break;
            default:
                $order = 'ORDER BY id';
                break;
        }

        switch ($view)
        {
            case 'archive':
                $sql    = "SELECT * FROM entries WHERE is_read=? " . $order;
                $params = array(-1);
                break;
            case 'fav' :
                $sql    = "SELECT * FROM entries WHERE is_fav=? " . $order;
                $params = array(-1);
                break;
            default:
                $sql    = "SELECT * FROM entries WHERE is_read=? " . $order;
                $params = array(0);
                break;
        }

        $query      = $this->executeQuery($sql, $params);
        $entries    = $query->fetchAll();

        return $entries;
    }

    public function add($url, $title) {
        parent::__construct();
        $sql_action     = 'INSERT INTO entries ( url, title ) VALUES (?, ?, ?)';
        $params_action  = array($url, $title);
        $query          = $this->executeQuery($sql_action, $params_action);
        return $query;
    }

    public function deleteById($id) {
        parent::__construct();
        $sql_action     = "DELETE FROM entries WHERE id=?";
        $params_action  = array($id);
        $query          = $this->executeQuery($sql_action, $params_action);
        return $query;
    }

    public function favoriteById($id) {
        parent::__construct();
        $sql_action     = "UPDATE entries SET is_fav=~is_fav WHERE id=?";
        $params_action  = array($id);
        $query          = $this->executeQuery($sql_action, $params_action);
    }

    public function archiveById($id) {
        parent::__construct();
        $sql_action     = "UPDATE entries SET is_read=~is_read WHERE id=?";
        $params_action  = array($id);
        $query          = $this->executeQuery($sql_action, $params_action);
    }

    public function getLastId() {
        parent::__construct();
        return $this->getHandle()->lastInsertId();
    }
}
