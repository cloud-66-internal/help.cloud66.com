---
menuheaders: [ "Contents", "Public repositories", "Notice", "Private repositories", "GitHub example", "BitBucket example" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/custom_git_repo/custom_git_repo_contents.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/custom_git_repo/custom_git_repo_public-repositories.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/custom_git_repo/custom_git_repo_notice.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/custom_git_repo/custom_git_repo_private-repositories.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/custom_git_repo/custom_git_repo_github-example.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/GettingStarted/common/custom_git_repo/custom_git_repo_bitbucket-example.md" ]
layout: post
template: one-col
title: Connecting Your Git Repository
categories: getting-started
lead: ""
legacy: true

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/GettingStarted/common/custom_git_repo/custom_git_repo_public-repositories.md  product = product %}
<a name="3"></a>{% include _inlines/GettingStarted/common/custom_git_repo/custom_git_repo_notice.md  product = product %}
<a name="4"></a>{% include _inlines/GettingStarted/common/custom_git_repo/custom_git_repo_private-repositories.md  product = product %}
<a name="5"></a>{% include _inlines/GettingStarted/common/custom_git_repo/custom_git_repo_github-example.md  product = product %}
<a name="6"></a>{% include _inlines/GettingStarted/common/custom_git_repo/custom_git_repo_bitbucket-example.md  product = product %}