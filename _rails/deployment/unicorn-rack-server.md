---
menuheaders: [ "About Unicorn", "Deploy with Unicorn", "Kill the web server", "Start the web server", "Stop the web server", "Restart the web server (zero-downtime)", "Warning" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_about-unicorn.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_deploy-with-unicorn.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_kill-the-web-server.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_start-the-web-server.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_stop-the-web-server.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_restart-the-web-server-zero-downtime.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_warning.md" ]
layout: post
template: one-col
title: Unicorn Rack Server
categories: Deployment
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}

<a name="1"></a>{% include _inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_about-unicorn.md %}
<a name="2"></a>{% include _inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_deploy-with-unicorn.md %}
<a name="3"></a>{% include _inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_kill-the-web-server.md %}
<a name="4"></a>{% include _inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_start-the-web-server.md %}
<a name="5"></a>{% include _inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_stop-the-web-server.md %}
<a name="6"></a>{% include _inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_restart-the-web-server-zero-downtime.md %}
<a name="7"></a>{% include _inlines/Deployment/Rails/unicorn-rack-server/unicorn-rack-server_warning.md %}