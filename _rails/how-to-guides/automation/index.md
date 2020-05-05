---
layout: post
template: one-col
title:  "How-to: Automation"
lead: Automating management tasks for your Rails application with Cloud 66
legacy: false
permalink: /:collection/how-to-guides/automation/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>

    {% assign section = site.rails | where:"categories","how-to-guides/automation" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>
</div><!--/.Toc-->
