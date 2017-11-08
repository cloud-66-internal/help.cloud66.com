---
menuheaders: [ "About migrating from Heroku", "What server size do I need?", "Migrating", "1. Code", "2. Data", "3. Traffic", "Useful pointers", "Web server and Procfile", "Dyno recyling", "Asset Pipeline Compilation" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_about-migrating-from-heroku-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_what-server-size-do-i-need-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_migrating-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_1.-code-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_2.-data-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_3.-traffic-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_useful-pointers-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_web-server-and-procfile-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_dyno-recyling-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_asset-pipeline-compilation-v1.md" ]
layout: post
template: one-col
title: Migrate from Heroku to Cloud66
categories: how-to-guides
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---




<a href="#about-migrating-from-heroku"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_about-migrating-from-heroku-v1.md  product = page.collection %}
<a href="#what-server-size-do-i-need"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_what-server-size-do-i-need-v1.md  product = page.collection %}
<a href="#migrating"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_migrating-v1.md  product = page.collection %}
<a href="#1-code"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_1.-code-v1.md  product = page.collection %}
<a href="#2-data"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_2.-data-v1.md  product = page.collection %}
<a href="#3-traffic"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_3.-traffic-v1.md  product = page.collection %}
<a href="#useful-pointers"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_useful-pointers-v1.md  product = page.collection %}
<a href="#web-server-and-procfile"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_web-server-and-procfile-v1.md  product = page.collection %}
<a href="#dyno-recyling"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_dyno-recyling-v1.md  product = page.collection %}
<a href="#asset-pipeline-compilation"></a>{% include _inlines/Tutorials/Rails/1974-09-26-migrate-from-heroku/1974-09-26-migrate-from-heroku_asset-pipeline-compilation-v1.md  product = page.collection %}