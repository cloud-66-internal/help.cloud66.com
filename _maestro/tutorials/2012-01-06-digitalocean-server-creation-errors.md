---
menuheaders: [ "Background", "HTTP Error 401 or HTTP Error 403", "Note", "HTTP Error 404 *or* Size is not available in this region", "1. Your DigitalOcean account has reached the default 5-server limit", "2. DigitalOcean have limited new server creation", "3. DigitalOcean has experienced an internal error", "Note", "Timeout Errors", "Note", "HAProxy Load Balancer Errors" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_background.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_http-error-1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_note1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_http-error-.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_1.-your-digi.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_2.-digitaloc.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_3.-digitaloc.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_note2.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_timeout-erro.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_note.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_haproxy-load.md" ]
layout: post
template: one-col
title: DigitalOcean server creation errors
categories: Tutorials
lead: ""
legacy: false
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_background.md  product = product %}
<a name="2"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_http-error-1.md  product = product %}
<a name="3"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_note1.md  product = product %}
<a name="4"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_http-error-.md  product = product %}
<a name="5"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_1.-your-digi.md  product = product %}
<a name="6"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_2.-digitaloc.md  product = product %}
<a name="7"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_3.-digitaloc.md  product = product %}
<a name="8"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_note2.md  product = product %}
<a name="9"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_timeout-erro.md  product = product %}
<a name="10"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_note.md  product = product %}
<a name="11"></a>{% include _inlines/Tutorials/common/2012-01-06-digitalocean-server-creation-errors/2012-01-06-digitalocean-server-creation-errors_haproxy-load.md  product = product %}

{{product}}