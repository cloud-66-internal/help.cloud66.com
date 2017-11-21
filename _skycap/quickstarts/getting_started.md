---
layout: post
title: Getting started with Skycap
categories: quickstarts
legacy: false
tags: ["getting started"]
lead:
permalink: /:collection/:path
---

<p class="lead">
    Skycap is a container delivery pipeline. You can use Skycap to automatically turn your source code into container (Docker) images.
</p>

<h2 id="What-youll-need">
    <a href="#What-youll-need" class="headerlink" title="What you’ll need"></a>
    What you’ll need
</h2>

<p>Before you can start building images with Skycap please check you have the following:</p>

<ul>
    <li>
        <p><strong>A Cloud 66 Account</strong> &mdash; If you don't already have one <a href="https://app.cloud66.com/users/sign_up" target="_blank">Sign up for a Cloud 66 account</a>. There is a free community plan and you'll get full unlimited access to all products Free for 14 days.</p>
    </li>
    <li>
        <p><strong>A Git Repo containing your application code</strong> &mdash; This can be a public or private repo. You can use any Git provider like GitHub / BitBucket or use your own privately hosted repo.</p>
    </li>
</ul>

<h2 id="build-pipeline">
    <a href="#build-pipeline" class="headerlink" title="Skycap Build Pipelines"></a>
    Skycap Build Pipelines
</h2>

<p>Build pipelines are composed of a number of individual services that are used to make up your application. Services can include source code that you need to build into images, or pre-built images. You can mix and match these if required.</p>

<ul>
    <li>
        <p> <strong>Build from Source</strong> &mdash; Your code should be hosted in a git repo and contain a <em>Dockerfile</em> that describes how to build your image. Cloud 66 provides simple Dockerfile templates for building common web frameworks. You can use these to get started.</p>
    </li>
    <li>
        <p> <strong>Pre-built Container Images</strong> &mdash; Can be hosted in an image repo like Dockerhub or your own private repo. </p>
    </li>
  </ul>

<h2 id="add-services">
    <a href="#add-services" class="headerlink" title="App Name and Services"></a>
    Adding Services
</h2>
<ul>
    <li>
        <p>
            <strong>Give your App a Name</strong> &mdash; First give your app a name, this will be used to label your app throughout the Cloud 66 dashboard.
        </p>
    </li>
    <li>
        <p>
            <strong>Adding Services</strong> &mdash; You can add as many services as required by clicking the green <em>Add Service</em> link at the bottom of the page
        </p>
    </li>
</ul>

<p>
    <img src="/assets/skycap/skycap_add_services_ani.gif" alt="Adding services to a Skycap build pipeline">
</p>

<h2 id="add-services">
    <a href="#add-services" class="headerlink" title="App Name and Services"></a>
    Where is your service Image
</h2>
<p>This dropdown provides three options.</p>
<ul>
   <li>
        <p> <strong>I'm using a GitHub Repo</strong> &mdash; This is the easiest way to add services from GitHub repos. You will need to link your GitHub account with Cloud 66 before you can take advantage of this. You can do this by clicking the <em>Lets link with GitHub now</em> link that will appear if you haven't signed up to Cloud 66 with GitHub. </p>
    </li>
   <li>
        <p> <strong>I'm using a manual Git Repo</strong> — Use this option if you have a private git repo or you're using another git provider such as BitBucket. You can also choose this if you don't want to link Cloud 66 to your GitHub account. You will need to <a href="https://help.cloud66.com/getting-started/git-repository">add and approve the Cloud 66 public key</a> if your repo is private. You'll be prompted to do this if required. </p>
    </li>
   <li>
        <p> <strong>It's a Docker Image</strong> — Use this to add pre-built images to a project. You can use a service like DockerHub or your own private image repo. If you're using a private repository you'll be prompted to add the necessary login credentials. </p>
    </li>
</ul>