Mettre à jour de la 2.0.x à la 2.1.1
====================================

.. warning::
Avant cette migration, si vous aviez configuré l'import depuis Pocket en ajoutant votre consumer key dans les paramètres internes, pensez à effectuer une sauvegarde de celle-ci : vous devrez l'ajouter dans la configuration de wallabag après la mise à jour.

Mise à jour sur un serveur dédié
--------------------------------

::

    rm -rf var/cache/*
    git fetch origin
    git fetch --tags
    git checkout 2.1.1 --force
    SYMFONY_ENV=prod composer install --no-dev -o --prefer-dist
    php bin/console doctrine:migrations:migrate --env=prod
    php bin/console cache:clear --env=prod

Mise à jour sur un hébergement mutualisé
----------------------------------------

Effectuez une sauvegarde du fichier ``app/config/parameters.yml``.

Téléchargez la dernière version de wallabag :

.. code-block:: bash

    wget http://framabag.org/wallabag-release-2.1.1.tar.gz && tar xvf wallabag-release-2.1.1.tar.gz

(hash md5 de l'archive 2.1.1 : ``9584a3b60a2b2a4de87f536548caac93``)

Décompressez l'archive dans votre répertoire d'installation et remplacez le fichier ``app/config/parameters.yml`` avec le votre.

Vérifiez que votre fichier ``app/config/parameters.yml`` contient tous les paramètres requis. Voici un fichier ``parameters.yml`` par défaut. Si vous ne savez pas quelle valeur mettre à un paramètre, laissez la valeur par défaut.

.. code-block:: yml

    parameters:
        database_driver: pdo_sqlite
        database_host: 127.0.0.1
        database_port: null
        database_name: symfony
        database_user: root
        database_password: null
        database_path: '%kernel.root_dir%/../data/db/wallabag.sqlite'
        database_table_prefix: wallabag_
        mailer_transport: smtp
        mailer_host: 127.0.0.1
        mailer_user: null
        mailer_password: null
        locale: en
        secret: ovmpmAWXRCabNlMgzlzFXDYmCFfzGv
        twofactor_auth: true
        twofactor_sender: no-reply@wallabag.org
        fosuser_registration: true
        fosuser_confirmation: true
        from_email: no-reply@wallabag.org
        rss_limit: 50
        rabbitmq_host: localhost
        rabbitmq_port: 5672
        rabbitmq_user: guest
        rabbitmq_password: guest
        redis_host: localhost
        redis_port: 6379

Vous trouverez `ici une documentation détaillée concernant les paramètres <http://doc.wallabag.org/fr/master/user/parameters.html>`_.

Si vous utilisez SQLite, vous devez également conserver le contenu du répertoire ``data/``.

Videz le répertoire ``var/cache``.

Vous allez devoir également exécuter des requêtes SQL pour mettre à jour votre base de données. Nous partons du principe que le préfixe de vos tables est ``wallabag_`` et que le serveur SQL est un serveur MySQL :

.. code-block:: sql

    ALTER TABLE `wallabag_entry` ADD `uuid` LONGTEXT DEFAULT NULL;
    INSERT INTO `wallabag_craue_config_setting` (`name`, `value`, `section`) VALUES ('share_public', '1', 'entry');
    ALTER TABLE `wallabag_oauth2_clients` ADD name longtext COLLATE 'utf8_unicode_ci' DEFAULT NULL;
    INSERT INTO `wallabag_craue_config_setting` (`name`, `value`, `section`) VALUES ('import_with_redis', '0', 'import');
    INSERT INTO `wallabag_craue_config_setting` (`name`, `value`, `section`) VALUES ('import_with_rabbitmq', '0', 'import');
    ALTER TABLE `wallabag_config` ADD `pocket_consumer_key` VARCHAR(255) DEFAULT NULL;
    DELETE FROM `wallabag_craue_config_setting` WHERE `name` = 'pocket_consumer_key';

