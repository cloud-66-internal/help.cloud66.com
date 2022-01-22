---
layout: section
template: one-col
title:  "Maestro: Automation"
lead: How to automate management and monitoring tasks for your application
legacy: false
permalink: /:collection/how-to-guides/automation/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/automation" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
