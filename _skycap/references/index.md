---
layout: section
template: one-col
title:  "Skycap References"
lead: "In Depth Documentation on Cloud 66 for Skycap"
legacy: false
permalink: /:collection/references/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <h2>References</h2>
    <ul>
    {% assign section = site.skycap | where:"categories","references" | sort: "order" %}
    {% include list_articles.html section=section %}

    {% assign section = site.skycap | where:"categories","references/toolbelt" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>

    <!-- common -->

    <h2>Account Management</h2>
    <ul>
    {% assign section = site.skycap | where:"categories","references/accounts" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
