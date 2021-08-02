---
layout: section
template: one-col
title:  "The Basics"
lead: Basic concepts, terminology and frequently asked questions (FAQs)
legacy: false
permalink: /:collection/the-basics/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.skycap | where:"categories","the-basics" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
