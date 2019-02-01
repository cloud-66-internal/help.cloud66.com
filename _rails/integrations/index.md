---
layout: post
template: one-col
title:  "Integration guides"
lead: "Integrating Cloud 66 for Rails with popular CI/CD services"
legacy: false
permalink: /:collection/integrations/index.html
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.rails | where:"categories","integrations" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

</div><!--/.Toc-->


