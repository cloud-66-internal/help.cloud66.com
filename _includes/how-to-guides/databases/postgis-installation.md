## Installing with Cloud 66

{% if page.collection == "maestro" %}
Installing through Cloud 66 is as simple as a manifest file entry. Refer to our [Manifest file](/maestro/quickstarts/getting-started-with-manifest.html) documentation for more information.
{%else%}
Installing through Cloud 66 is as simple as a manifest file entry. Refer to our [Manifest file](/{{page.collection}}/quickstarts/getting-started-with-manifest.html) documentation for more information.
{%endif%}

In order for your manifest file to be picked up, you need a file called **manifest.yml** to be present within a folder named **.cloud66**, which is in turn located in the root of your source code, checked into your repository.


```shell
[source_repo]/.cloud66/manifest.yml
```

For Cloud 66 to install PostGIS, your manifest file should contain the following:

```yaml
production:
    postgresql:
        configuration:
            postgis: true
```

If you would like to specify versions, it should look something like this:


```yaml
production:
    postgresql:
        configuration:
        	version: 9.6
            postgis:
                version: 2.3.1
```

Once your application has been deployed, you can find your PostGIS file in `/etc/postgresql/share/contrib/postgis-2.1/postgis.sql` on your database server.


## Manual installation

This applies specifically to Ubuntu 16.04 (the officially supported Cloud66 OS).


### Prerequisites

A number of prerequisites are needed, which can either be built from source or installed from pre-built packages, as shown below.

Install packages using:

```shell
$ sudo apt-get install postgresql-9.6-postgis-2.3 postgresql-contrib-9.6 postgresql-9.6-postgis-scripts

```

To install the commandline tools:

```
$ sudo apt-get install postgis
```

### pgRouting
```
# Install pgRouting 2.3 package 
$ sudo apt-get install postgresql-9.6-pgrouting

```

### Enable Adminpack 

While in terminal, log in to the psql console as postgres user:
````
sudo -u postgres psql
CREATE EXTENSION adminpack;
```

### PostGIS extension for PostgreSQL

Never install PostGIS in the postgres database, create a user database instead. You can also enable the PostGIS extension here:
```
sudo -u postgres psql
```
```
CREATE DATABASE gisdb;
\connect gisdb;

CREATE SCHEMA postgis;
ALTER DATABASE gisdb SET search_path=public, postgis, contrib;
\connect gisdb;  -- this is to force new search path to take effect
CREATE EXTENSION postgis SCHEMA postgis;
SELECT postgis_full_version();
```
This should give you output something like this:

```                                                                        postgis_full_version
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 POSTGIS="2.3.2 r15302" GEOS="3.5.0-CAPI-1.9.0 r4084" PROJ="Rel. 4.9.2, 08 September 2015" GDAL="GDAL 1.11.3, released 2015/09/16" LIBXML="2.9.3" LIBJSON="0.11.99" RASTER
(1 row)
```

To add topology support, a second extension can be created on the database:

```
$ CREATE EXTENSION postgis_topology;
```

### Install pgRouting

```
CREATE  EXTENSION pgrouting;
SELECT * FROM pgr_version();
```

This should give you:
```
version |  tag   |   hash    | branch | boost
---------+--------+-----------+--------+--------
 2.3.2   | v2.3.2 | 1f2af3c52 | master | 1.58.0
(1 row)
```

## More info

Follow [this excellent guide](https://trac.osgeo.org/postgis/wiki/UsersWikiPostGIS23UbuntuPGSQL96Apt) if you need more help installing PostGIS. 
