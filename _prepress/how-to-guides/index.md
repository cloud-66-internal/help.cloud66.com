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
    {% assign section = site.prepress | where:"categories","how-to-guides" | sort: "order" %}
    {% include list_articles.html section=section %}

<!---
    </ul>

    <h2>Add-ins for your Applications</h2>
    <ul>
    {% assign section = site.prepress | where:"categories","how-to-guides/add-ins" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
--->
</div><!--/.Toc-->
