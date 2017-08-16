<!-- post: 1985-09-26-postgis-installation_enabler-scripts -->


$ sudo -u postgres psql -d template&#95;postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/topology.sql
$ sudo -u postgres psql -d template&#95;postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/topology&#95;comments.sql
