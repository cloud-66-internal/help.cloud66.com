---
layout: post
template: one-col
title:  "Account settings"
lead: "A guide to account settings in Cloud 66"
legacy: false
permalink: /:collection/account/index.html
product: Maestro
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
 {% assign section = site.maestro | where:"categories","account" | sort: "order" %}
    <h2>Setting and options in Cloud 66 accounts</h2>
    <ul>
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
