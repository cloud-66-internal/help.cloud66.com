---
menuheaders: [ "What is a manifest file?", "Which environment?", "Which application?", "Docker", "ElasticSearch", "Gateway", "GlusterFS", "Memcached", "MongoDB", "MySQL", "Nginx", "CORS configuration", "PostgreSQL", "PostGIS", "Rails", "Redis", "Rack", "Sinatra", "Load balancers", "AWS load balancer", "GCE load balancer", "HAProxy", "Linode Nodebalancer", "Rackspace load balancer", "CloudA load balancer", "Which server?", "Deploy to your own server", "Shared Servers", "External Servers", "Specify environment variables", "Processes", "Specify additional LiveLog files", "Test experimental features" ]
layout: post
template: one-col
title: Building your Manifest File
categories: Deployment
lead: ""
legacy: false

permalink: /:collection/:path
---





<a href="#what-is-a-manifest-file"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_what-is-a-manifest-file-v1.md  product = page.collection %}
<a href="#which-environment"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_which-environment-v1.md  product = page.collection %}
<a href="#which-application"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_which-application-v1.md  product = page.collection %}
<a href="#docker"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_docker-v1.md  product = page.collection %}
<a href="#elasticsearch"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_elasticsearch-v1.md  product = page.collection %}
<a href="#gateway"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_gateway-v1.md  product = page.collection %}
{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_noteB-v1.md  product = page.collection %}
<a href="#glusterfs"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_glusterfs-v1.md  product = page.collection %}
{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_noteC-v1.md  product = page.collection %}
{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_noteD-v1.md  product = page.collection %}
{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_note-v1.md  product = page.collection %}
<a href="#memcached"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_memcached-v1.md  product = page.collection %}
<a href="#mongodb"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_mongodb-v1.md  product = page.collection %}
<a href="#mysql"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_mysql-v1.md  product = page.collection %}
<a href="#nginx"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_nginx-v1.md  product = page.collection %}
<a href="#cors-configuration"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_cors-configuration-v1.md  product = page.collection %}
<a href="#postgresql"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_postgresql-v1.md  product = page.collection %}
<a href="#postgis"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_postgis-v1.md  product = page.collection %}
<a href="#rails"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_rails-v1.md  product = page.collection %}
<a href="#redis"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_redis-v1.md  product = page.collection %}
<a href="#rack"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_rack-v1.md  product = page.collection %}
<a href="#sinatra"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_sinatra-v1.md  product = page.collection %}
<a href="#load-balancers"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_load-balancers-v1.md  product = page.collection %}
<a href="#aws-load-balancer"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_aws-load-balancer-v1.md  product = page.collection %}
<a href="#gce-load-balancer"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_gce-load-balancer-v1.md  product = page.collection %}
<a href="#haproxy"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_haproxy-v1.md  product = page.collection %}
<a href="#linode-nodebalancer"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_linode-nodebalancer-v1.md  product = page.collection %}
<a href="#rackspace-load-balancer"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_rackspace-load-balancer-v1.md  product = page.collection %}
<a href="#clouda-load-balancer"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_clouda-load-balancer-v1.md  product = page.collection %}
<a href="#which-server"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_which-server-v1.md  product = page.collection %}
{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_importantB-v1.md  product = page.collection %}
<a href="#deploy-to-your-own-server"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_deploy-to-your-own-server-v1.md  product = page.collection %}
<a href="#shared-servers"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_shared-servers-v1.md  product = page.collection %}
<a href="#external-servers"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_external-servers-v1.md  product = page.collection %}
{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_important-v1.md  product = page.collection %}
<a href="#specify-environment-variables"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_specify-environment-variables-v1.md  product = page.collection %}
<a href="#processes"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_processes-v1.md  product = page.collection %}
<a href="#specify-additional-livelog-files"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_specify-additional-livelog-files-v1.md  product = page.collection %}
<a href="#test-experimental-features"></a>{% include _inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_test-experimental-features-v1.md  product = page.collection %}