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

<p>Before you start, please check you have the following:</p>

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
            <strong>Give your App a Name</strong> &mdash; This will be used to label your application throughout the Cloud 66 dashboard.
        </p>
    </li>
    <li>
        <p>
            <strong>Adding Services</strong> &mdash; You can add as many services as required by clicking the green <em>Add Service</em> link at the bottom of the page.
        </p>
    </li>
</ul>

<p style="margin-top: 2em">
    <img src="/assets/skycap/skycap_add_services_ani.gif" alt="Adding services to a Skycap build pipeline">
</p>

<h2 id="add-services">
    <a href="#add-services" class="headerlink" title="App Name and Services"></a>
    Specifying the source of your images
</h2>

<img src="/assets/skycap/skycap_service_image.png" alt="Specifying the source of your service" style="float:right; margin-top: 0.25em">
<p style="padding-right: 4em">The <em>Where is your service Image</em> dropdown provides you with three options to specify the source of your services.</p>

<ul style="margin-top: 4em">
   <li>
        <p> <strong>Build Image from a GitHub repo</strong> &mdash; This is the easiest way to add services if your code is hosted on GitHub. You'll need to link your GitHub account with Cloud 66 before you can take advantage of this. Just click the <em>Lets link with GitHub now</em> link.</p>
    </li>
   <li>
        <p> <strong>Build image from any Git Repo</strong> &mdash; Use this option if you have a private git repo or you're using another git provider such as BitBucket. You can also use this if you don't want to link Cloud 66 to your GitHub account. You will need to add your Cloud 66 public key if your repo is private. You'll be prompted to do this if desired.</p>
    </li>
   <li>
        <p> <strong>It's in a Docker image repository</strong> &mdash; Use this to add pre-built images to a project. You can use a service like DockerHub or your own private image repo. If you're using a private repository you'll be prompted to add the necessary login credentials. </p>
    </li>
</ul>

<p>Once you've finished adding your services click the Build button.</p>

<h2 id="building-images-buildgrid">
    <a href="#building-images-buildgrid" class="headerlink" title="Building your images"></a>
    Building images with BuildGrid
</h2>

<p>BuildGrid is the Cloud 66 service that's used to build container images from your source code.</p>

<p>During the build process you can view the status of each individual image build and drill down into the logs if you need to troubleshoot any part of the process.</p>

<p>
    <img src="/assets/skycap/skycap_buildgrid_queue.png" alt="Adding services to a Skycap build pipeline">
</p>

<h2 id="advanced-features">
    <a href="#advanced-features" class="headerlink" title="Advanced Skycap features"></a>
    Accessing advanced features
</h2>

<p>All of the information that defines how services are built is accessible in the <em>service.yml</em> file. Switching to <em>advanced</em> provides full access to this configuration. Here you can setup advanced features.</p>

<ul>
    <li>
        <p><strong><a href="http://help.cloud66.com/building-your-stack/docker-service-configuration">Service.yml documentation</a></strong> &mdash; including advanced configuration examples.</p>
    </li>
    <li>
        <p><strong><a href="https://help.cloud66.com/article/139-multi-tenancy-for-stacks">Multi Tenancy</a></strong> &mdash; an example of using multiple services to configure multi tenancy Stacks.</p>
    </li>
</ul>




