---
menuheaders: [ "Installing with Cloud 66", "Manual installation", "Prerequisites", "Build GEOS 3.3.x", "Build PostGIS", "Spatially enabling a database", "PostGIS extension for PostgreSQL", "Enabler scripts/template" ]
layout: post
template: one-col
title: How to install PostGIS
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---








## Installing with Cloud 66

Installing through Cloud 66 is as simple as a manifest file entry. Refer to our [Manifest file](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html) documentation for more information.

In order for your manifest file to be picked up, you need a file called **manifest.yml** to be present within a folder named **.cloud66**, which is in turn located in the root of your source code, checked into your repository.




```
[source_repo]/.cloud66/manifest.yml
```



For Cloud 66 to install PostGIS, your manifest file should contain the following:




```
production:
    postgresql:
        configuration:
            postgis: true
```



If you would like to specify versions, it should look something like this:




```
production:
    postgresql:
        configuration:
        	version: 9.3.4
            postgis:
                version: 2.1.1
```



Once your stack has been deployed, you can find your PostGIS file in `/etc/postgresql/share/contrib/postgis-2.1/postgis.sql` on your database server.






## Manual installation

Applies specifically to Ubuntu 14.04 (the officially supported Cloud66 OS).






### Prerequisites
A number of prerequisites are needed, which can either be built from source or installed from pre-built packages, as shown below.

Install packages using:





```
$ sudo apt-get install libgdal1-dev
```





Optional package for raster support (this is required if you want to build the PostgreSQL extensions):





```
$ sudo apt-get install libgdal1-dev
```










### Build GEOS 3.3.x
PostGIS 2.0 requires GEOS >= 3.3.2 for topology support, and because Ubuntu 12.0.4 (which Cloud 66 deploys on) only has GEOS 3.2.2 in packages, we need to build it from source. If you don't need topology, you don't *need* to build this component, but it is highly recommended.

There are many ways of building GEOS, but this is the simplest:





```
$ wget http://download.osgeo.org/geos/geos-3.3.8.tar.bz2
$ tar xvfj geos-3.3.8.tar.bz2
$ cd geos-3.3.8
$ ./configure
$ make
$ sudo make install
$ cd ..
```










### Build PostGIS
First we want to download PostGIS, extract it and move into its directory:





```
$ wget http://download.osgeo.org/postgis/source/postgis-2.0.3.tar.gz
$ tar xfvz postgis-2.0.3.tar.gz
$ cd postgis-2.0.3
```





PostGIS 2.0 can be configured to disable topology or raster components using the configure flags --without-raster and/or --without-topology. The default is to build both. Note that raster is required for the extension installation method for PostgreSQL.





```
$ ./configure
$ make
$ sudo make install
$ sudo ldconfig
$ sudo make comments-install
```





Finally, enable the command-line tools to work from your shell:





```
$ sudo ln -sf /usr/share/postgresql-common/pg_wrapper /usr/local/bin/shp2pgsql
$ sudo ln -sf /usr/share/postgresql-common/pg_wrapper /usr/local/bin/pgsql2shp
$ sudo ln -sf /usr/share/postgresql-common/pg_wrapper /usr/local/bin/raster2pgsql
```










### Spatially enabling a database
With PostgreSQL 9.1, there are two methods of adding PostGIS functionality to a database: using extensions or using enabler scripts.






### PostGIS extension for PostgreSQL
Spatially enabling a database using extensions is a new feature of PostgreSQL 9.1.

Connect to your database using pgAdmin or psql, and run the following commands. To add PostGIS with raster support:





```
$ CREATE EXTENSION postgis_topology;
```





To add topology support, a second extension can be created on the database:





```
$ CREATE EXTENSION postgis_topology;
```










### Enabler scripts/template
Enabler scripts can be used to either build a template or directly spatially enable a database. This method is older than the extension method, but is required if the raster support is not built.

The following example creates a template which can be re-used for creating multiple spatially-enabled databases. Or if you just want to make one spatially enabled database, you can modify the commands for your needs.

PostGIS:





```
$ sudo -u postgres psql -d template_postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/topology.sql
$ sudo -u postgres psql -d template_postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/topology_comments.sql
```





With raster support:





```
$ sudo -u postgres psql -d template_postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/topology.sql
$ sudo -u postgres psql -d template_postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/topology_comments.sql
```





With topology support:





```
$ sudo -u postgres psql -d template_postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/topology.sql
$ sudo -u postgres psql -d template_postgis -f /usr/share/postgresql/9.1/contrib/postgis-2.0/topology_comments.sql
```





