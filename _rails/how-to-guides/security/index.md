---
layout: section
template: one-col
title:  "How-to: Security"
lead: How to configure security for your Rails application
legacy: false
permalink: /:collection/how-to-guides/security/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>

    {% assign section = site.rails | where:"categories","how-to-guides/security" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>
</div><!--/.Toc-->
