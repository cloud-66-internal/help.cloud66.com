---
layout: post
title: Getting started with Skycap
categories: quickstarts
legacy: false
tags: ["getting started"]
lead:
permalink: /:collection/:path
---
<h2 id="What-youll-need">
    <a href="#What-youll-need" class="headerlink" title="What you’ll need"></a>
    What you’ll need
</h2>

<p>Before you can start building images with Skycap please check you have the following:</p>

<ul>
    <li>
        <p><strong>A Cloud 66 Account</strong> &mdash; If you don't already have one <a href="https://app.cloud66.com/users/sign_up" target="_blank">Sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full access to all products Free for 14 days.</p>
    </li>
    <li>
        <p><strong>A Git Repo containing your application code</strong> &mdash; This can be a public or private repo. You can use any Git provider like GitHub / BitBucket or use your own privately hosted repo.</p>
    </li>
</ul>

<h2 id="build-pipeline">
    <a href="#build-pipeline" class="headerlink" title="Skycap Build Pipelines"></a>
    Skycap build pipelines
</h2>

<p>Build pipelines are composed of individual services that are used to make up your application. They can include pre-built images or source code you want to build into container images. You can mix and match these if required.</p>

<ul>
    <li>
        <p> <strong>Pre-built Container Images</strong> &mdash; Can be hosted in an image repo like Dockerhub or in your own private repo. </p>
    </li>
    <li>
        <p> <strong>Built from Source</strong> &mdash; Your code should be hosted in a git repo and contain a <em>Dockerfile</em> that describes how to build your image. Cloud 66 provides basic Dockerfile templates for building common web frameworks. You can use these to help get started. </p>
    </li>
  </ul>