---
layout: code
---

$ sudo -u postgres createdb template&#95;postgis
$ sudo -u postgres psql -d template&#95;postgis -c "UPDATE pg&#95;database SET datistemplate=true WHERE datname='template&#95;postgis'"
$ sudo -u postgres psql -d template&#95;postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/postgis.sql
$ sudo -u postgres psql -d template&#95;postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/spatial&#95;ref&#95;sys.sql
$ sudo -u postgres psql -d template&#95;postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/postgis&#95;comments.sql
