Installiere Redis für asynchrone Aufgaben
=========================================

Um asynchrone Aufgaben zu starten (nützlich z.B. für große Imports), können wir Redis nutzen.

Voraussetzungen
---------------

Du musst Redis auf deinem Server installiert haben.

Installation
~~~~~~~~~~~~

.. code:: bash

  apt-get install redis-server

Starten
~~~~~~

Der Redis Service läuft eventuell schon direkt nach der Installation. Falls nicht kannst du ihn wie folgt starten:

.. code:: bash

  redis-server


Konfigure Redis in wallabag
---------------------------

Bearbeite die Datei ``parameters.yml``, um die RabbitMQ Konfiguration einzurichten. Die Standardkonfiguration sollte ok sein:

.. code:: yaml

    redis_host: localhost
    redis_port: 6379

Enable Redis in wallabag
------------------------

In internal settings, in the **Import** section, enable Redis (with the value 1).

Starte den Redis Consumer
-------------------------

Abhängig von welchem Service du importieren möchtest, solltest du einen Cron Job aktivieren (oder mehrere, wenn du viele unterstützen willst):

.. code:: bash

  # for Pocket import
  bin/console wallabag:import:redis-worker -e=prod pocket -vv >> /path/to/wallabag/var/logs/redis-pocket.log

  # for Readability import
  bin/console wallabag:import:redis-worker -e=prod readability -vv >> /path/to/wallabag/var/logs/redis-readability.log

  # for Instapaper import
  bin/console wallabag:import:redis-worker -e=prod instapaper -vv >> /path/to/wallabag/var/logs/redis-instapaper.log

  # for wallabag v1 import
  bin/console wallabag:import:redis-worker -e=prod wallabag_v1 -vv >> /path/to/wallabag/var/logs/redis-wallabag_v1.log

  # for wallabag v2 import
  bin/console wallabag:import:redis-worker -e=prod wallabag_v2 -vv >> /path/to/wallabag/var/logs/redis-wallabag_v2.log

  # for Firefox import
  bin/console wallabag:import:redis-worker -e=prod firefox -vv >> /path/to/wallabag/var/logs/redis-firefox.log

  # for Chrome import
  bin/console wallabag:import:redis-worker -e=prod instapaper -vv >> /path/to/wallabag/var/logs/redis-chrome.log

Wenn du den Import nur für ein paar Nachrichten und nicht für alle starten willst, kannst du die Nummer (im folgenden Beispiel 12) angeben. Der Redis Worker wird dann nach der 12. Nachricht stoppen:

.. code:: bash

  bin/console wallabag:import:redis-worker -e=prod pocket -vv --maxIterations=12
