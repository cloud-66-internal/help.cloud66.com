---
menuheaders: [ "About migrating from Heroku", "What server size do I need?", "Migrating", "1. Code", "2. Data", "3. Traffic", "Useful pointers", "Web server and Procfile", "Dyno recyling", "Asset Pipeline Compilation" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_about-migrating-from-heroku-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_what-server-size-do-i-need-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_migrating-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_1.-code-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_2.-data-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_3.-traffic-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_useful-pointers-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_web-server-and-procfile-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_dyno-recyling-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_asset-pipeline-compilation-v1.md" ]
layout: post
template: one-col
title: Migrate from Heroku to Cloud66
categories: Tutorials
lead: ""
legacy: false

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_about-migrating-from-heroku-v1.md  product = product %}
<a name="2"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_what-server-size-do-i-need-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_migrating-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_1.-code-v1.md  product = product %}
<a name="5"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_2.-data-v1.md  product = product %}
<a name="6"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_3.-traffic-v1.md  product = product %}
<a name="7"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_useful-pointers-v1.md  product = product %}
<a name="8"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_web-server-and-procfile-v1.md  product = product %}
<a name="9"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_dyno-recyling-v1.md  product = product %}
<a name="10"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_asset-pipeline-compilation-v1.md  product = product %}