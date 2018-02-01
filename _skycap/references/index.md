---
layout: post
template: one-col
title:  "Skycap References"
lead: "In Depth Documentation on Cloud 66 for Skycap"
legacy: false
permalink: /:collection/references/index.html
---

<div class="Toc Toc--howto">
    <h2>References</h2>
    <ul>
    {% assign section = site.skycap | where:"categories","references" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

    <!-- common -->
    <h2>Cloud 66 Toolbelt</h2>
    <ul>
    {% assign section = site.skycap | where:"categories","references/toolbelt" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
    
    <h2>Account Management</h2>
    <ul>
    {% assign section = site.skycap | where:"categories","references/accounts" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

    <h2>Integrations</h2>
    <ul>
    {% assign section = site.skycap | where:"categories","references/integrations" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->


