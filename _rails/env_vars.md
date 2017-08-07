---
layout: post
template: one-col
title:  "Using environment variables with Rails"
categories: deployment
lead: Using Environment variables with Rails
legacy: false
---
{% assign product = "Rails" %}
{% include _inlines/common/deployment/env_vars/about_environment_variables.md product="Rails" %}
{% include _inlines/common/deployment/env_vars/auto_generate_environment_variables.md product="Rails" %}{% include _inlines/common/deployment/env_vars/generated_environment_variables.md product="Rails" %}
{% include _inlines/common/deployment/env_vars/assign_environment_variables_for_deployment.md product="Rails" %}
{% include _inlines/common/deployment/env_vars/define_referenced_environment_variable.md product="Rails" %}
{% include _inlines/{{ product | downcase }}/deployment/env_vars/pre-defined_environment_variables.md product="Rails" %}
