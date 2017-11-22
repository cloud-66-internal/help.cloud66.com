---
layout: post
title: Getting started with Maestro
categories: quickstarts
legacy: false
tags: ["getting started"]
lead:
permalink: /:collection/:path
---

<p class="lead">
    Maestro is a full container management service. Once your images are ready we'll take care of deploying and managing your containers.
</p>

<h2 id="What-youll-need">
    <a href="#What-youll-need" class="headerlink" title="What you’ll need"></a>
    What you’ll need
</h2>

<p>Before you start, please check you have the following:</p>

<ul>
    <li>
        <p><strong>A Cloud 66 Account</strong> &mdash; If you don't already have one, <a href="https://app.cloud66.com/users/sign_up" target="_blank">sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products free for 14 days.</p>
    </li>
    <li>
        <p><strong>Container Images to deploy</strong> &mdash; These can be images you've built with Skycap or your own pre-built images that are hosted in an image repository.</p>
    </li>
    <li>
        <p><strong>A Cloud Account or Your Own Servers</strong> &mdash; See below.</p>
    </li>
</ul>

{% include general/cloud_provider_or_own_server_tabs.html %}

<h2 id="get-started">
    <a href="#get-started" class="headerlink" title="Get Started"></a>
    Lets Get Started
</h2>

<p>This guide assumes that you already have container images that you need to deploy. If you need to learn how to build images or pull existing images from a repo please  check out <a href="/skycap/quickstarts/getting_started">Getting started with Skycap</a> and then return to this guide.</p>



<h2 id="deployment-setup">
    <a href="#deployment-setup" class="headerlink" title="Get Started"></a>
    Deployment Setup
</h2>

<p>The first step in the deployment process is to select an environment for the application you're about to deploy.</p>

<div class="Grid Grid--gutters Grid--full large-Grid--fit med-Grid--guttersXl">
    <div class="Grid-cell">
        <img src="/assets/maestro/maestro_deployment_setup.png" alt="Start a new Maestro Deployment">
    </div>
    <div class="Grid-cell">
        <p>Please choose from the standard list of environments:</p>
        <ul class="u-textSmall">
          <li>Development</li>
          <li>QA</li>
          <li>Staging</li>
          <li>Production</li>
         </ul>
    </div>
</div>


