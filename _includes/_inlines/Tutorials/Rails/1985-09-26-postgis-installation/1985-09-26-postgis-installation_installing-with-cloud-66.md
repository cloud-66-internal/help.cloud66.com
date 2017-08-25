<!--  usedin: [ _rails/Tutorials/1985-09-26-postgis-installation.md] -->


## Installing with Cloud 66

Installing through Cloud 66 is as simple as a manifest file entry. Refer to our [Manifest file](http://help.cloud66.com/building-your-stack/getting-started-with-manifest-files) documentation for more information.

In order for your manifest file to be picked up, you need a file called **manifest.yml** to be present within a folder named **.cloud66**, which is in turn located in the root of your source code, checked into your repository.


{%include _inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_installing-with-cloud-1.md %}


For Cloud 66 to install PostGIS, your manifest file should contain the following:


{%include _inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_installing-with-cloud-2.md %}


If you would like to specify versions, it should look something like this:


{%include _inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_installing-with-cloud-.md %}


Once your stack has been deployed, you can find your PostGIS file in `/etc/postgresql/share/contrib/postgis-2.1/postgis.sql` on your database server.

