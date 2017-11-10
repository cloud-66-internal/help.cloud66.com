---
layout: post
template: one-col
title:  "How-to Guides"
categories: how-to-guides
lead: How to properly use Cloud 66 for Rails
legacy: false
permalink: /:collection/:categories/index.html
---

<div class="Toc Toc--howto">
    <h2>Deploying Your Applications</h2>
    <ul>
    {% assign section = site.rails | where:"categories","how-to-guides/deployment" | sort: "order" %}
    {% for page in section %}
        <li>
            {% for tag in page.tags %}
            <span class="Tag">{{tag}}</span>
            {% endfor %}
            <a href="{{ page.url }}">
                {{ page.title }}
                <p>{{ page.lead }}</p>
            </a>
        </li>
    {% endfor %}
    </ul>

    <h2>Using Databases</h2>
    <ul>
    {% assign section = site.rails | where:"categories","how-to-guides/databases" | sort: "order" %}
    {% for page in section %}
        <li>
            {% for tag in page.tags %}
            <span class="Tag">{{tag}}</span>
            {% endfor %}
            <a href="{{ page.url }}">
                {{ page.title }}
                <p>{{ page.lead }}</p>
            </a>
        </li>
    {% endfor %}
    </ul>

    <h2>Securing Your Applications</h2>
    <ul>
    {% assign section = site.rails | where:"categories","how-to-guides/security" | sort: "order" %}
    {% for page in section %}
        <li>
            {% for tag in page.tags %}
            <span class="Tag">{{tag}}</span>
            {% endfor %}
            <a href="{{ page.url }}">
                {{ page.title }}
                <p>{{ page.lead }}</p>
            </a>
        </li>
    {% endfor %}
    </ul>


</div><!--/.Toc-->


