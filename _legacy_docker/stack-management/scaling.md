---
menuheaders: [ "Contents", "About scaling servers", "Horizontal scaling", "Web servers", "Process servers", "Database servers", "Docker services", "Vertical scaling", "Note" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/scaling/scaling_contents-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/scaling/scaling_about-scaling-servers-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/scaling/scaling_horizontal-scaling-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/scaling/scaling_web-servers-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/scaling/scaling_process-servers-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/scaling/scaling_database-servers-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/scaling/scaling_docker-services-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/scaling/scaling_vertical-scaling-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/scaling/scaling_note-v1.md" ]
layout: post
template: one-col
title: Scaling
categories: stack-management
lead: ""
legacy: true

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/StackManagement/common/scaling/scaling_about-scaling-servers-v1.md  product = product %}
<a name="3"></a>{% include _inlines/StackManagement/common/scaling/scaling_horizontal-scaling-v1.md  product = product %}
<a name="4"></a>{% include _inlines/StackManagement/common/scaling/scaling_web-servers-v1.md  product = product %}
<a name="5"></a>{% include _inlines/StackManagement/common/scaling/scaling_process-servers-v1.md  product = product %}
<a name="6"></a>{% include _inlines/StackManagement/common/scaling/scaling_database-servers-v1.md  product = product %}
<a name="7"></a>{% include _inlines/StackManagement/common/scaling/scaling_docker-services-v1.md  product = product %}
<a name="8"></a>{% include _inlines/StackManagement/common/scaling/scaling_vertical-scaling-v1.md  product = product %}
<a name="9"></a>{% include _inlines/StackManagement/common/scaling/scaling_note-v1.md  product = product %}