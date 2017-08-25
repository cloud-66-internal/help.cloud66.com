---
menuheaders: [ "About running apps with Thin", "Start the web server", "Stop the web server", "Restart the web server (hot-restart)", "Deploy with Thin", "Important" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/thin-rack-server/thin-rack-server_about-running-apps-with-thin.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/thin-rack-server/thin-rack-server_start-the-web-server.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/thin-rack-server/thin-rack-server_stop-the-web-server.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/thin-rack-server/thin-rack-server_restart-the-web-server-hot-restart.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/thin-rack-server/thin-rack-server_deploy.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/Rails/thin-rack-server/thin-rack-server_important.md" ]
layout: post
template: one-col
title: Thin Rack Server
categories: Deployment
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}

<a name="1"></a>{% include _inlines/Deployment/Rails/thin-rack-server/thin-rack-server_about-running-apps-with-thin.md %}
<a name="2"></a>{% include _inlines/Deployment/Rails/thin-rack-server/thin-rack-server_start-the-web-server.md %}
<a name="3"></a>{% include _inlines/Deployment/Rails/thin-rack-server/thin-rack-server_stop-the-web-server.md %}
<a name="4"></a>{% include _inlines/Deployment/Rails/thin-rack-server/thin-rack-server_restart-the-web-server-hot-restart.md %}
<a name="5"></a>{% include _inlines/Deployment/Rails/thin-rack-server/thin-rack-server_deploy.md %}
<a name="6"></a>{% include _inlines/Deployment/Rails/thin-rack-server/thin-rack-server_important.md %}