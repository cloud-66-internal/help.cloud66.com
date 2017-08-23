---
layout: post
template: one-col
title: Environment variables
categories: Deployment
lead: ""
legacy: false

---
{% assign product = "rails" %}

{% include _inlines/Deployment/common/env-vars/env-vars_contents.md %}
{% include _inlines/Deployment/common/env-vars/env-vars_about-environment-variables.md %}
{% include _inlines/Deployment/common/env-vars/env-vars_auto-generate-variables.md %}
{% include _inlines/Deployment/common/env-vars/env-vars_auto-generated-environment-variables.md %}
{% include _inlines/Deployment/common/env-vars/env-vars_assign-environment-variables-for-deployment.md %}
{% include _inlines/Deployment/common/env-vars/env-vars_assign-environment-variables-after-stack-build.md %}
{% include _inlines/Deployment/common/env-vars/env-vars_define-referenced-environment-variable.md %}
{% include _inlines/Deployment/common/env-vars/env-vars_using-environment-variables.md %}
{% include _inlines/Deployment/common/env-vars/env-vars_pre-defined-environment-variables.md %}
