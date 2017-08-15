#### Enabler scripts/template
Enabler scripts can be used to either build a template or directly spatially enable a database. This method is older than the extension method, but is required if the raster support is not built.

The following example creates a template which can be re-used for creating multiple spatially-enabled databases. Or if you just want to make one spatially enabled database, you can modify the commands for your needs.

PostGIS:



{%include _inlines/path_to_code %}



With raster support:



{%include _inlines/path_to_code %}



With topology support:



{%include _inlines/path_to_code %}


