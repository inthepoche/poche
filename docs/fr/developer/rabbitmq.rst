Installer RabbitMQ pour des tâches asynchrones
==============================================

Pour lancer des tâches asynchrones (utile pour des imports importants par exemple), nous pouvons utiliser RabbitMQ.

Pré-requis
----------

Vous devez installer RabbitMQ sur votre serveur.

Installation
~~~~~~~~~~~~

.. code:: bash

  wget https://www.rabbitmq.com/rabbitmq-signing-key-public.asc
  apt-key add rabbitmq-signing-key-public.asc
  apt-get update
  apt-get install rabbitmq-server

Configuration et démarrage
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code:: bash

  rabbitmq-plugins enable rabbitmq_management # (useful to have a web interface, available at http://localhost:15672/ (guest/guest)
  rabbitmq-server -detached

Arrêter RabbitMQ
~~~~~~~~~~~~~~~~

.. code:: bash

  rabbitmqctl stop


Configurer RabbitMQ dans wallabag
---------------------------------

Modifiez votre fichier ``parameters.yml`` pour éditer la configuration RabbitMQ. Celle par défaut devrait convenir :

.. code:: yaml

    rabbitmq_host: localhost
    rabbitmq_port: 5672
    rabbitmq_user: guest
    rabbitmq_password: guest

Activer RabbitMQ dans wallabag
------------------------------

Dans les paramètres internes, section **Import**, activez RabbitMQ (avec la valeur 1).

Démarrer les clients RabbitMQ
-----------------------------

En fonction du service dont vous souhaitez importer vos données, vous devez activer un (ou plusieurs si vous souhaitez en supporter plusieurs) cron job :

.. code:: bash

  # for Pocket import
  bin/console rabbitmq:consumer -e=prod import_pocket -w

  # for Readability import
  bin/console rabbitmq:consumer -e=prod import_readability -w

  # for Instapaper import
  bin/console rabbitmq:consumer -e=prod import_instapaper -w

  # for wallabag v1 import
  bin/console rabbitmq:consumer -e=prod import_wallabag_v1 -w

  # for wallabag v2 import
  bin/console rabbitmq:consumer -e=prod import_wallabag_v2 -w

  # for Firefox import
  bin/console rabbitmq:consumer -e=prod import_firefox -w

  # for Chrome import
  bin/console rabbitmq:consumer -e=prod import_chrome -w
