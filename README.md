# poche
Abandon Pocket, Instapaper and other Readability service : adopt poche. It is the same, but it is open source. Moreover, you can migrate from Pocket & Readability.

![poche](http://inthepoche.com/img/logo.png)

The website of poche is [inthepoche.com](http://inthepoche.com).

To test poche, a demo website is online : [demo.inthepoche.com](http://demo.inthepoche.com) (login poche, password poche).

To get news from poche, [follow us on twitter](http://twitter.com/getpoche) or [read the poche blog](http://inthepoche.com/blog). A Google Group is also available : [poche-users](https://groups.google.com/forum/#!forum/poche-users).

[![flattr](http://api.flattr.com/button/flattr-badge-large.png)](http://flattr.com/thing/1265480/poche-a-read-it-later-open-source-system)

## Security
You **have** to protect your db/poche.sqlite file. Modify the virtual host of your website to add this condition :
```apache
<Files ~ "\.sqlite$">
    Order allow,deny
    Deny from all
</Files>
```

Nginx version:
```nginx
location ~ /(db) {
    deny all;
    return 404;
}
```

## Usage
See the documentation on our website : [inthepoche.com](http://inthepoche.com).

## License
Copyright © 2010-2013 Nicolas Lœuillet <nicolas.loeuillet@gmail.com>
This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the COPYING file for more details.