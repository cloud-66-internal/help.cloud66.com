---
layout: post
template: one-col
title:  "Docker Quickstarters"
lead: Getting Started with Docker
legacy: true
permalink: /:collection/quickstarts/index.html
---

## Notice
<div class="notice notice-warning"><p>This documentation set has been merged with the <a href="/maestro/">Maestro Version 2</a> documentation and is officially deprecated. These pages will be redirected to their equivalents in that doc set within the next few weeks.</p></div>

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.legacy_docker | where:"categories","quickstarts" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->