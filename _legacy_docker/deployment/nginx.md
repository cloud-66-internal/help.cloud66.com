---
menuheaders: [ "Contents", "About Nginx", "Nginx configuration", "Nginx worker configuration", "Default Cloud 66 Nginx error page", "Custom Nginx error page", "Customize your Nginx configuration", "Warning", "Nginx CustomConfig variables", "Boolean variables" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_contents-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_about-nginx-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_nginx-configuration-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_nginx-worker-configuration-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_default-cloud-66-nginx-error-page-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_custom-nginx-error-page-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_customize-your-nginx-configuration-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_warning-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_nginx-customconfig-variables-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_boolean-variables-v1.md" ]
layout: post
template: one-col
title: Nginx
categories: Deployment
lead: ""
legacy: true

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/Deployment/common/nginx/nginx_about-nginx-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Deployment/common/nginx/nginx_nginx-configuration-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Deployment/common/nginx/nginx_nginx-worker-configuration-v1.md  product = product %}
<a name="5"></a>{% include _inlines/Deployment/common/nginx/nginx_default-cloud-66-nginx-error-page-v1.md  product = product %}
<a name="6"></a>{% include _inlines/Deployment/common/nginx/nginx_custom-nginx-error-page-v1.md  product = product %}
<a name="7"></a>{% include _inlines/Deployment/common/nginx/nginx_customize-your-nginx-configuration-v1.md  product = product %}
<a name="8"></a>{% include _inlines/Deployment/common/nginx/nginx_warning-v1.md  product = product %}
<a name="9"></a>{% include _inlines/Deployment/common/nginx/nginx_nginx-customconfig-variables-v1.md  product = product %}
<a name="10"></a>{% include _inlines/Deployment/common/nginx/nginx_boolean-variables-v1.md  product = product %}