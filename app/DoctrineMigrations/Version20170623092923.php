<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Add Notifications table
 */
class Version20170623092923 extends AbstractMigration implements ContainerAwareInterface
{
    /**
     * @var ContainerInterface
     */
    private $container;

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    private function getTable($tableName)
    {
        return $this->container->getParameter('database_table_prefix').$tableName;
    }

    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $this->skipIf($schema->hasTable($this->getTable('notification')), 'It seems that you already played this migration.');

        $table = $schema->createTable($this->getTable('notification'));
        $table->addColumn('id', 'integer', ['autoincrement' => true]);
        $table->addColumn('user_id', 'integer');
        $table->addColumn('timestamp', 'datetime');
        $table->addColumn('title', 'text');
        $table->addColumn('description', 'text');
        $table->addColumn('read', 'boolean');
        $table->addColumn('actions', 'text');
        $table->addColumn('parameter', 'text');
        $table->addIndex(['user_id'], 'idx_user');
        $table->setPrimaryKey(['id']);
        $table->addForeignKeyConstraint($this->getTable('user'), ['user_id'], ['id'], [], 'fk_user_notification');

        if ('postgresql' === $this->connection->getDatabasePlatform()->getName()) {
            $schema->dropSequence('notification_id_seq');
            $schema->createSequence('notification_id_seq');
        }
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        $schema->dropTable($this->getTable('notification'));
    }
}
