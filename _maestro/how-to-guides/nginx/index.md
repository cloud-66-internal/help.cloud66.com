---
layout: post
template: one-col
title:  "Maestro: Nginx"
categories: how-to-guides/nginx
lead: How to configure Nginx
legacy: false
permalink: /:collection/:categories/index.html
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/nginx" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->