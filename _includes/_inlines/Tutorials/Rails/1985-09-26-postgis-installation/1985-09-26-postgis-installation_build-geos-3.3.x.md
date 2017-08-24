---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_build-geos-3.3.x-wgeth.html" ]
 usedin: [ _rails/Tutorials/1985-09-26-postgis-installation.md] -->


### Build GEOS 3.3.x
PostGIS 2.0 requires GEOS >= 3.3.2 for topology support, and because Ubuntu 12.0.4 (which Cloud 66 deploys on) only has GEOS 3.2.2 in packages, we need to build it from source. If you don't need topology, you don't *need* to build this component, but it is highly recommended.

There are many ways of building GEOS, but this is the simplest:



{%include _inlines/Tutorials/Rails/1985-09-26-postgis-installation/code_1985-09-26-postgis-installation_build-geos-3.3.x-wgeth.md %}




