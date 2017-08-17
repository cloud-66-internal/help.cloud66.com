<!-- post: -->


### Build PostGIS
First we want to download PostGIS, extract it and move into its directory:



{%include _inlines/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_build-postgis-wgethttp.md %}



PostGIS 2.0 can be configured to disable topology or raster components using the configure flags --without-raster and/or --without-topology. The default is to build both. Note that raster is required for the extension installation method for PostgreSQL.



{%include _inlines/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_build-postgis-configur.md %}



Finally, enable the command-line tools to work from your shell:



{%include _inlines/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_build-postgis-sudolnsf.md %}



