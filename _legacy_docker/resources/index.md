---
layout: post
template: one-col
title:  "Docker Resources"
lead: "Useful Resources About Cloud 66"
legacy: true
permalink: /:collection/resources/index.html
---

## Notice
<div class="notice notice-warning"><p>This documentation set has been merged with the <a href="/maestro/">Maestro Version 2</a> documentation and is officially deprecated. These pages will be redirected to their equivalents in that doc set within the next few weeks.</p></div>

<div class="Toc Toc--howto">
    <h2>Resources</h2>
    <ul>
    {% assign section = site.legacy_docker | where:"categories","resources" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
    <h2>Beta Program</h2>
    <ul>
    {% assign section = site.legacy_docker | where:"categories","resources/beta-program" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->


