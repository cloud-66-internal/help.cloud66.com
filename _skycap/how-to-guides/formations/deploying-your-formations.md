---
layout: post
template: one-col
title: Deploying your Formations
categories: how-to-guides/formations
lead: ""
legacy: false
tags: ["formations", "toolbelt"]
permalink: /:collection/:path
---

<h2>Deploying Formations to Kubernetes</h2>
<p>
	Formations are like deployment destinations: you can create one for every Kubernetes cluster in production, development or staging. They can also be used to setup different parts of the same cluster: one Formation to setup the basics of the cluster like default http backends, RBAC and storage classes and another one for the deployment of the application itself on to the cluster. No matter how and why you create your Formations, deploying them to your Kubernetes cluster is the same.
</p>

<h2>Deploying with Toolbelt</h2>
<p>
	If you use Kubernetes, you most probably use <code>kubectl</code>, the command line tool to interact with the cluster. To deploy a formation onto the cluster, you will need a working <code>kubectl</code>. You can test this by running a command like this: <kbd>$ kubectl get namespaces</kbd>
</p>

<p>
	Once your <code>kubectl</code> is working, you can simply use the <a href="https://app.cloud66.com/toolbelt">CX Toolbelt</a> on your terminal to render the resulting Formation Stencils. To render the Stencils of a Formation using the Toolbelt, head to the Formation detail page and click on the Render Formation button and copy the command you see on the page. This command includes everything you need to render the Stencils with the Toolbelt. Here is an example of what it can look like:
	<pre class="prettyprint">$ cx snapshots render --stack 'My Stack' --snapshot 'sn-xivam-nymip-tobor-hasif-migyv-hytob-lanun-hotif-cixox' --formation 'fm-4556aff7cfbe1fc2419b414360167e24'</pre>
</p>
<p>
	This will show you all of the Stencils as a single yaml file, ordered in the same order as the Stencils are sorted on the Formation detail page. You can pipe this output to <code>kubectl</code> now.
</p>

<h3>Deploying StencilGroups</h3>
<p>
	You can also use <a href="/skycap/how-to-guides/formations/stencil_groups.html">StencilGroups</a>, with the Toolbelt. From the Formation detail page, select the StencilGroup you want to render and click on the Render Group link, this will take you to the page where you can see the group's rendered Stencils and the Toolbelt command for them. Copy the command and use it in your terminal.
	<pre class="prettyprint">$ cx snapshots render --stack 'Central Test' --snapshot 'sn-xivam-nymip-tobor-hasif-migyv-hytob-lanun-hotif-cixox' --formation 'fm-4556aff7cfbe1fc2419b414360167e24' --stencil-group 'stg-54a733469be013c2aa535b4e1bc86c2a'</pre>
</p>
<p>
	This will show you the selected set of the Stencils in this group as a single yaml file, ordered in the same order as the Stencils are sorted on the Formation detail page. You can pipe this output to <code>kubectl</code> now.
</p>

<h4>Using <code>kubectl</code></h4>
<p>
	To deploy your Formation to your cluster, pipe the results of the commands above into <code>kubectl apply</code> command:
	<pre class="prettyprint">$ cx snapshot render .... | kubectl apply -f -</pre>
</p>

<h2>Using individual files</h2>
<p>
	Rendered Stencil files can be downloaded as individual files. You can click on the download icon (top right of each rendered file) to download them to your local machine and then apply them using <code>kubectl</code>:
	<pre class="prettyprint">$ kubectl apply -f foo.yml</pre>
</p>

<h2>Using tarballs</h2>
<p>
	As well as downloading individual files, you can select some or all of the rendered Stencils to download as a tarball. All files will be placed in a single tarball with their names prefixed with a 3 digit number representing their order so they can be applied in the right order.
	<pre class="prettyprint">
	$ kubectl apply -f 001_foo.yml
	$ kubectl apply -f 002_bar.yml</pre>
</p>
