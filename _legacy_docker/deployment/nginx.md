---
menuheaders: [ "Contents", "About Nginx", "Nginx configuration", "Nginx worker configuration", "Default Cloud 66 Nginx error page", "Custom Nginx error page", "Customize your Nginx configuration", "Warning", "Nginx CustomConfig variables", "Boolean variables" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_contents.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_about-nginx.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_nginx-configuration.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_nginx-worker-configuration.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_default-cloud-66-nginx-error-page.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_custom-nginx-error-page.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_customize-your-nginx-configuration.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_warning.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_nginx-customconfig-variables.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/nginx/nginx_boolean-variables.md" ]
layout: post
template: one-col
title: Nginx
categories: Deployment
lead: ""
legacy: true

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}


<a name="2"></a>{% include _inlines/Deployment/common/nginx/nginx_about-nginx.md  product = product %}
<a name="3"></a>{% include _inlines/Deployment/common/nginx/nginx_nginx-configuration.md  product = product %}
<a name="4"></a>{% include _inlines/Deployment/common/nginx/nginx_nginx-worker-configuration.md  product = product %}
<a name="5"></a>{% include _inlines/Deployment/common/nginx/nginx_default-cloud-66-nginx-error-page.md  product = product %}
<a name="6"></a>{% include _inlines/Deployment/common/nginx/nginx_custom-nginx-error-page.md  product = product %}
<a name="7"></a>{% include _inlines/Deployment/common/nginx/nginx_customize-your-nginx-configuration.md  product = product %}
<a name="8"></a>{% include _inlines/Deployment/common/nginx/nginx_warning.md  product = product %}
<a name="9"></a>{% include _inlines/Deployment/common/nginx/nginx_nginx-customconfig-variables.md  product = product %}
<a name="10"></a>{% include _inlines/Deployment/common/nginx/nginx_boolean-variables.md  product = product %}