---
layout: post
template: one-col
title:  "How-To guides for configuring Skycap applications"
lead: How to configure components to work with Skycap
legacy: false
permalink: /:collection/how-to-guides/configuration/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">

<ul>

{% assign configuration = site.skycap | where:"categories","how-to-guides/configuration" | sort: "order" %}

{% include list_articles.html section=configuration %}

</ul>


</div><!--/.Toc-->
