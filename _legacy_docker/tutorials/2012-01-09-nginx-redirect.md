---
menuheaders: [ "Redirect from HTTP to HTTPS", "Redirect between domains with HTTP and HTTPS", "HTTP", "HTTPS" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-09-nginx-redirect/2012-01-09-nginx-redirect_redirect-from-http-to-https.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-09-nginx-redirect/2012-01-09-nginx-redirect_redirect-between-domains-with-htt.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-09-nginx-redirect/2012-01-09-nginx-redirect_http.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-09-nginx-redirect/2012-01-09-nginx-redirect_https.md" ]
layout: post
template: one-col
title: Nginx Redirect
categories: Tutorials
lead: ""
legacy: true

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}

<a name="1"></a>{% include _inlines/Tutorials/common/2012-01-09-nginx-redirect/2012-01-09-nginx-redirect_redirect-from-http-to-https.md  product = product %}
<a name="2"></a>{% include _inlines/Tutorials/common/2012-01-09-nginx-redirect/2012-01-09-nginx-redirect_redirect-between-domains-with-htt.md  product = product %}
<a name="3"></a>{% include _inlines/Tutorials/common/2012-01-09-nginx-redirect/2012-01-09-nginx-redirect_http.md  product = product %}
<a name="4"></a>{% include _inlines/Tutorials/common/2012-01-09-nginx-redirect/2012-01-09-nginx-redirect_https.md  product = product %}