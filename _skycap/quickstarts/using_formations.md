---
layout: post
title: Getting started with Skycap Formations
order: 2
categories: quickstarts
legacy: false
tags: ["getting started", "formations"]
lead: Use Skycap to deploy your applications to any Kubernetes cluster
permalink: /:collection/:path:output_ext
---

Formations are used to create, manage and deploy Kubernetes configuration files to any Kubernetes cluster.

## What you’ll need

Before you start, please check you have the following:

* **An application set up with Skycap** &mdash; You can quickly set up an application with Skycap by following our [getting started guide](/skycap/quickstarts/getting_started.html).

<div class="notice"><p>
In this guide we are using a <a href="https://github.com/cloud66-samples/helloworld">simple project</a> that we've supplied on Github. It's a good idea to use this project in your initial Skycap set up so that the steps below correspond to your application.</p></div>

* **A Working Kubernetes Cluster** &mdash; You can use [Cloud 66 Maestro](/maestro/quickstarts/getting_started_with_clusters.html) to create a blank cluster or use a cloud provider service like [Google GKE](https://cloud.google.com/kubernetes-engine), [AWS Fargate](https://aws.amazon.com/fargate) or [Microsoft Azure AKS](https://azure.microsoft.com/en-us/services/container-service), or [set it up yourself](https://kubernetes.io/docs/getting-started-guides/scratch).
For this example we are going to use [Minikube](https://github.com/kubernetes/minikube)
        
* **A `kubectl` client** on your development machine or a server that is configured to communicate with your Kubernetes cluster.

* **Basic familiarity** with Kuberentes configuration files and commands.
    
## The basics

Before getting started, we need to understand the 3 main components of the Skycap CDP: **Formations**, **Stencils** and **Snapshots**:

### Formation

A Formation is a "deployment destination" for your application. This could be a dedicated Kubernetes cluster or a shared one. A Formation allows you to manage the collection of Kubernetes configuration templates or **Stencils** that define an application and its environment.

<div class="notice"><p>You can find more detailed information about Formations <a href="/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-formation">here</a>.</p></div>

### Stencils

Stencils are essentially dynamic Kubernetes configuration templates. They can contain one or more Kubernetes configuration items like `Services`, `Deployments`, `ConfigMaps` or others.

Stencils can use dynamic **placeholders** that are populated with the correct values before they are applied to a Kubernetes cluster. This is called **Rendering** and it allows you to more easily standardize and re-use common templates.

<div class="notice"><p>You can find more detailed information about Stencils <a href="/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-stencil">here</a>.</p></div>

### Snapshots

A Snapshot is the state of your application at a point in time. It includes all your application's images and tags as well as any environment variables and configuration items defined in Skycap. 

All of these components (including all configurations) are then stored in a private repository on your Cloud 66 account so that you can roll back to a particular application state easily at any time.

<div class="notice"><p>You can find more detailed information about Snapshots <a href="/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-snapshot">here</a>.</p></div>

## Set up your Formations

### 1. Create your first Formation

After the final step of [setting up your application](/skycap/quickstarts/getting_started.html) on Skycap, click the *Create Formation* button and give your Formation a name. 

You can also add a few tags to it (these help to identify components later on). In our example we're going to call our Formation "hello-setup"

You'll notice that you can choose to include (or exclude) Template Libraries at this point. For now just include both libraries (i.e. leave the boxes checked).

#### Note
<div class="notice"><p>
Template Libraries are git repositories that contain sets of pre-defined Stencils. Read <a href="/skycap/how-to-guides/formations/create_your_own_stencil_template_repos.html">our guide</a> on the subject for more info on how to create your own. </p></div>

## ANI-GIF
<img src="/assets/skycap/skycap-formations-step-1a.gif"/>

## VIDEO
<video controls width="680">
<source src="/assets/skycap/skycap-formations-step-1.mp4" type="video/mp4" width="680">
<source src="/assets/skycap/skycap-formations-step-1.webm" type="video/webm" width="680">
</video>

### 2. Add your first Stencil

<div class="notice notice-warning"><p>This section assumes you are familiar with Kubernetes configuration files at a basic level.</p></div>

Now that you have a Formation defined you can begin populating it with **Stencils**.

To do this, click on the *Add Stencils* link under the panel for the Formation you just created. This will open the configuration interface for your new Formation.

The first thing you need to configure in a new Formation is a `namespace`. To do this, choose *setup.yml* from the menu that automatically opens on the Formation page.

<img src="/assets/skycap/formation_step_2_NEW.gif"/>

This creates a Stencil for a namespace configuration file. Let's look at the first section of the template in a bit more detail:

{% highlight yaml %}
kind: Namespace
apiVersion: v1
metadata:
  name: c66-system
  labels:
    certmanager.k8s.io/disable-validation: "true"
    cloud66.com/relay-events: "true"
---
apiVersion: v1
kind: Namespace
metadata:
  name: ${formation.name}
  annotations:
    cloud66.com/relay-events: "true"
{% endhighlight %}

As you can see, the default `setup.yml` Stencil (from our default [Template Library](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-template-library)) sets up the required scaffolding for deploying an application to Kubernetes starting with a namespace.

You've probably already noticed the dynamic Stencil placeholders like `${formation}` and `${registry_credentials()}`. Placeholders offer a simple way to automatically populate values in your configuration files when they [Render](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-rendering).

For example,`${formation}` gets replaced with a Kubernetes friendly version of your Formation's name. So if your Formation is called "My Sample Formation", the value of `${formation}` will be `my-sample-formation` when it renders (we will get to how to render the Stencils later). You can see a full list of all Stencil functions and placeholders [here](/skycap/references/stencil_placeholders.html).

You've probably also noticed that we automatically append `@cloud66.yml` to the names of each YAML file. This is the name of the Template Library from which this Stencil was drawn. You can change this to whatever suits your needs.

We do this for two reasons:

1. It allows you to keep multiple configuration files of the same type (e.g. multiple deploy.yml files) in the same application repository without running into naming conflicts.
2. It reminds you of the Template Library you're using to create the file. This is helpful when you have multiple repos. (Don't worry though - editing this name won't affect the link between the template and the repo)

Now that we are a bit more familiar with the Stencils, let's save our `setup.yml` without making any changes. To do this, scroll down and add a "commit message". For now just use `initial`. Then click *Save changes*. (Commit messages are required every time you save any Stencil.)

### 3. Add a deployment.yaml

Our example application has a single service called Hello World. Hello World is a web service which serves traffic on port 8080. Next we will generate the Kubernetes configuration files to deploy and run Hello World as a service on our cluster.

(Reminder: The source code for this example can be found on [Github](https://github.com/cloud66-samples/helloworld).)

A service running on Kubernetes consists of 2 parts: a `deployment` and a `service`. Our template library has a Stencil for each one. 

#### Reminder
<div class="notice"><p>
We automatically append the name each new YAML file with the name of its source Template Library - in this case  "@cloud66" - but you can edit this as needed. However we recommend using a consistent and sensible naming scheme (e.g. give all the YAML files for the same application the same prefix)</p></div>

Click on the **+** button and choose **deployment.yml**. In the generated Stencil, you can see the are some placeholders named `${require(...)}`. You need to replace these with values that are specific to your application. Let's do that for our Hello World application now.

Set `containerPort` to `8080` (this is the port through which the Hello World container will serve traffic) and set `command` to `["/go/src/helloworld/helloworld"]` (Hello World is written in Go and this command initialises that code). Then add a commit message and save your new deployment template.

<img src="/assets/skycap/formation_step_4_NEW.gif"/>

### 4. Add a service.yml

By now you should have a `setup@cloud66.yml` and a `helloworld_deploy@cloud66.yml` in your Formation Stencils. The last file is a `service.yml` which tells Kubernetes to route web traffic hitting the cluster to the Hello World pod we just defined in our `helloworld_deploy.yml`.

Click on the **+** button again but choose the `service.yml` template this time. You will need to make a few changes to the template to make it work for you application. In our Hello World example, this is limited to the port numbers.

Make the following changes: change `port` to `8080` and `targetPort` to `5000`. This tells Kubernetes that our service container is serving on port `8080` and that we are going to expose this to the outside using port `5000`. Finally add a commit message and save your new service template.

<img src="/assets/skycap/formation_step_5_NEW.gif"/>

## Deploying it all to your cluster

We now have all the configuration files we need to deploy our sample application to our Kubernetes cluster. All that's left is to render the files and apply them to Kubernetes.

### A. Render the templates

Rendering of Stencils happens automatically when you download them from Skycap.

The easiest way to start Rendering is to click the *Render Formation* button below the list of Stencils on your Formation page.

<img src="/assets/skycap/formation_step_6_NEWer.gif"/>

Now you should be able to see all your Stencils rendered and ready to be used on a Kubernetes cluster.

### B. Deploy the templates

One way to apply your rendered Stencils to the cluster is by downloading them as a single YML file and running `kubectl apply -f FILE` on the cluster. You can download this YML file using the link at the top of the Render page.

A simpler way is to use [Cloud 66 Toolbelt](/skycap/quickstarts/using-cloud66-toolbelt.html) (cx). Simply click on the "copy" icon below the `cx` command at the top of the page and use it to pipe the Stencils directly to your cluster by appending `| kubectl apply -f -` to the end of the command.

The end result should look something like this:
<pre class="prettyprint">cx formations deploy -s "Hello World" -f "hello-setup" | kubectl apply -f -</pre> 

The `cx formations deploy` command pulls the rendered versions of your Stencils from your Formation and concatenates them so they can be piped into your cluster using `kubectl`. 

<div class="notice notice-warning"><p>If Minikube isn't running or has other issues, the cx command will fail. Make sure you have set it up properly using <a href="https://kubernetes.io/docs/setup/minikube/">this guide</a>.</p></div>

Next, run `kubectl get ns` to check that your new namespace is up and running. You can also use the `get` command to check that the pod and service are up and running.

Then, invoke the service using `minikube service` command, and a browser window should open confirming that the app is up and running.

<img src="/assets/skycap/formation_step_7_NEW.gif"/>

Congratulations! You just deployed your first Formation to a Kubernetes cluster.

## What's next?

Formations are an extremely powerful tool for managing the flow of configuration files into Kubernetes. Here are some of their features:
	
* [Formations](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-formation) as an infrastucture time machine
* Fine grained [access control and permissions](/skycap/tutorials/setting-up-access-control.html) for each Formation and every Stencil for your team members
* The ability to setup private [Template Libraries](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-template-library) for your team
* The powerful [Stencil placeholders syntax](/skycap/references/stencil_placeholders.html)
* Bulk import of your [environment variables](/skycap/tutorials/setting-environment-variables.html) and secrets into Stencils
	

