---
menuheaders: [ "Contents", "What are deploy hooks?", "Hook points", "Hook fields", "How to use deploy hooks", "Use a snippet deploy hook", "Use a command deploy hook", "Important", "Use an existing script deploy hook (Rails/Node stacks only)", "Use an inline script deploy hook" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_contents.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_what-are-deploy-hooks.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_hook-points.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_hook-fields.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_how-to-use-deploy-hooks.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_use-a-snippet-deploy-hook.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_use-a-command-deploy-hook.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_important.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_use-a-script-deploy-hook-only-for-rails.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_use-an-inline-script-deploy-hook.md" ]
layout: post
template: one-col
title: Deploy hooks
categories: Deployment
lead: ""
legacy: true

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/Deployment/common/deploy-hooks/deploy-hooks_what-are-deploy-hooks.md  product = product %}
<a name="3"></a>{% include _inlines/Deployment/common/deploy-hooks/deploy-hooks_hook-points.md  product = product %}
<a name="4"></a>{% include _inlines/Deployment/common/deploy-hooks/deploy-hooks_hook-fields.md  product = product %}
<a name="5"></a>{% include _inlines/Deployment/common/deploy-hooks/deploy-hooks_how-to-use-deploy-hooks.md  product = product %}
<a name="6"></a>{% include _inlines/Deployment/common/deploy-hooks/deploy-hooks_use-a-snippet-deploy-hook.md  product = product %}
<a name="7"></a>{% include _inlines/Deployment/common/deploy-hooks/deploy-hooks_use-a-command-deploy-hook.md  product = product %}
<a name="8"></a>{% include _inlines/Deployment/common/deploy-hooks/deploy-hooks_important.md  product = product %}
<a name="9"></a>{% include _inlines/Deployment/common/deploy-hooks/deploy-hooks_use-a-script-deploy-hook-only-for-rails.md  product = product %}
<a name="10"></a>{% include _inlines/Deployment/common/deploy-hooks/deploy-hooks_use-an-inline-script-deploy-hook.md  product = product %}