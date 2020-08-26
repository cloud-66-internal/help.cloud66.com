---
layout: post
template: one-col
title:  "Account management"
lead: "Integrating Cloud 66 for Rails with popular CI/CD services"
legacy: false
permalink: /:collection/account/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.rails | where:"categories","account" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

</div><!--/.Toc-->
