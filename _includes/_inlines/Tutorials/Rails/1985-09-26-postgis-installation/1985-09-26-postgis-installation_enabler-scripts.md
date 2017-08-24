---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_enabler-scripts-sudoup.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_enabler-scripts-sudoup.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_enabler-scripts-sudoup.html" ]
 usedin: [ _rails/Tutorials/1985-09-26-postgis-installation.md] -->


### Enabler scripts/template
Enabler scripts can be used to either build a template or directly spatially enable a database. This method is older than the extension method, but is required if the raster support is not built.

The following example creates a template which can be re-used for creating multiple spatially-enabled databases. Or if you just want to make one spatially enabled database, you can modify the commands for your needs.

PostGIS:



{%include _inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_enabler-scripts-sudoup.md %}




With raster support:



{%include _inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_enabler-scripts-sudoup.md %}




With topology support:



{%include _inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_enabler-scripts-sudoup.md %}



