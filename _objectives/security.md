---
layout: section
template: one-col
title: Security
lead: Cloud 66 for Rails
legacy: false
permalink: /:collection/:categories/security.html
noindex: true
sitemap: false
---

<p class="lead">Guide to <b>Security</b> clever lead paragraph - the list below is pulled by tag instead of collection 🚀</p>

<br/>

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.rails | where:"tags","security" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

</div><!--/.Toc-->

