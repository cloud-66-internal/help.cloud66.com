---
layout: post
template: one-col
title:  "Using environment variables with Rails"
categories: deployment
lead: Using Environment variables with Docker
legacy: true
---
{% assign product = "Legacy_docker" %}
{% include _inlines/common/deployment/env_vars/about_environment_variables.md product="Legacy_docke" %}
{% include _inlines/common/deployment/env_vars/auto_generate_environment_variables.md product="Legacy_docke" %}
{% include _inlines/common/deployment/env_vars/generated_environment_variables.md product="Legacy_docke" %}
{% include _inlines/common/deployment/env_vars/assign_environment_variables_for_deployment.md product="Legacy_docke" %}
{% include _inlines/common/deployment/env_vars/define_referenced_environment_variable.md product="Legacy_docke" %}
{% include _inlines/{{ product | downcase }}/deployment/env_vars/pre-defined_environment_variables.md product="Legacy_docke" %}
