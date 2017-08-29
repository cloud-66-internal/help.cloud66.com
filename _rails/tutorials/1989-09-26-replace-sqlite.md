---
menuheaders: [ "Instructions", "MySQL", "PostgreSQL" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1989-09-26-replace-sqlite/1989-09-26-replace-sqlite_instructions.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1989-09-26-replace-sqlite/1989-09-26-replace-sqlite_mysql.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/Rails/1989-09-26-replace-sqlite/1989-09-26-replace-sqlite_postgresql.md" ]
layout: post
template: one-col
title: Replacing SQLite with MySQL or PostgreSQL
categories: Tutorials
lead: ""
legacy: false

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Tutorials/Rails/1989-09-26-replace-sqlite/1989-09-26-replace-sqlite_instructions.md  product = product %}
<a name="2"></a>{% include _inlines/Tutorials/Rails/1989-09-26-replace-sqlite/1989-09-26-replace-sqlite_mysql.md  product = product %}
<a name="3"></a>{% include _inlines/Tutorials/Rails/1989-09-26-replace-sqlite/1989-09-26-replace-sqlite_postgresql.md  product = product %}