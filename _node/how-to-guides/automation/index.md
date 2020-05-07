---
layout: post
template: one-col
title:  "How-to Guides: Automation"
lead: How to automate management tasks for your Node application on Cloud 66
legacy: false
permalink: /:collection/how-to-guides/automation/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.node | where:"categories","how-to-guides/automation" | sort: "order" %}
    {% include list_articles.html section=section %}
</ul>

</div><!--/.Toc-->
