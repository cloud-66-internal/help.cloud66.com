---
layout: section
template: one-col
title:  "How-to Guides"
categories: how-to-guides
lead: In-depth guides to Prepress features
legacy: false
permalink: /:collection/:categories/index.html
sitemap: false
noindex: true
---

<div class="Toc Toc--howto">
    <h2>Deploying Your Applications</h2>
    <ul>
    {% assign section = site.prepress | where:"categories","how-to-guides/deployment" | sort: "order" %}
    {% include list_articles.html section=section %}
	</ul>

    <h2>Common Tools</h2>
    <ul>
    {% assign section = site.prepress | where:"categories","how-to-guides/common-tools" | sort: "order" %}
    {% include list_articles.html section=section %}
	</ul>

</div>
