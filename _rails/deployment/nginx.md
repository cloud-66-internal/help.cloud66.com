---
layout: post
template: one-col
title: Nginx
categories: Deployment
lead: ""
legacy: false

---
{% assign product = "rails" %}

{% include _inlines/Deployment/common/nginx/nginx_contents.md %}
{% include _inlines/Deployment/common/nginx/nginx_about-nginx.md %}
{% include _inlines/Deployment/common/nginx/nginx_nginx-configuration.md %}
{% include _inlines/Deployment/common/nginx/nginx_nginx-worker-configuration.md %}
{% include _inlines/Deployment/common/nginx/nginx_default-cloud-66-nginx-error-page.md %}
{% include _inlines/Deployment/common/nginx/nginx_custom-nginx-error-page.md %}
{% include _inlines/Deployment/common/nginx/nginx_customize-your-nginx-configuration.md %}
{% include _inlines/Deployment/common/nginx/nginx_warning.md %}
{% include _inlines/Deployment/common/nginx/nginx_nginx-customconfig-variables.md %}
{% include _inlines/Deployment/common/nginx/nginx_boolean-variables.md %}
