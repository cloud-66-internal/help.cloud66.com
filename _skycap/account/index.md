---
layout: post
template: one-col
title:  "Account management"
lead: Managing your Cloud 66 account
legacy: false
permalink: /:collection/account/index.html
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.skycap | where:"categories","account" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->