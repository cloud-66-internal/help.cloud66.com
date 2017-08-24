<!-- usedin: [ _rails/Tutorials/1985-09-26-postgis-installation.md] -->


### PostGIS extension for PostgreSQL
Spatially enabling a database using extensions is a new feature of PostgreSQL 9.1.

Connect to your database using pgAdmin or psql, and run the following commands. To add PostGIS with raster support:



{%include _inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_postgis-extension-for-.md %}




To add topology support, a second extension can be created on the database:



{%include _inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_postgis-extension-for-.md %}




