---
layout: post
template: one-col
title:  "Getting Started"
lead: Quick guides to getting up and running with Maestro
legacy: false
permalink: /:collection/quickstarts/index.html
---

<div class="Toc Toc--howto">
<h3>Quick guides to getting up and running with Maestro</h3>
    <ul>
    {% assign section = site.maestro | where:"categories","quickstarts" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->