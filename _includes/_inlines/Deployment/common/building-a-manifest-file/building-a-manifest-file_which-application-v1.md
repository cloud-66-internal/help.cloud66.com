<!-- usedin: [ _legacy_docker/deployment/building-a-manifest-file-v1.md, _maestro/Deployment/building-a-manifest-file-v1.md, _node/deployment/building-a-manifest-file-v1.md, _rails/deployment/building-a-manifest-file-v1.md, _skycap/deployment/building-a-manifest-file-v1.md] -->


## Which application?

Next, select which application you would like to specify settings for. You can choose from the following:

{% if include.product == "maestro" or include.product == "legacy_docker" %}*   [Docker](#docker){% endif %}
*   [ElasticSearch](#elasticsearch)
*   [Gateway](#gateway)
*   [GlusterFS](#glusterfs)
*   [Load balancers](#load-balancers)
*   [Memcached](#memcached)
*   [MongoDB](#mongodb)
*   [MySQL](#mysql)
*   [Nginx](#nginx)
*   [PostGIS](#postgis)
*   [PostgreSQL](#postgresql)
*   [Redis](#redis)
*   [Sinatra](#sinatra)
{% if include.product == "rails" %}*   [Rails](#rails){% endif %}

