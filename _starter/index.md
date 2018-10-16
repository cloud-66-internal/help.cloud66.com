---
layout: post
template: one-col
title: Starter
lead: An Open Source Dockerfile Generator
legacy: false
permalink: /:collection/index.html
---

<h2>
<a id="welcome-to-github-pages" class="anchor" href="#welcome-to-github-pages" aria-hidden="true"><span class="octicon octicon-link"></span></a>Welcome to Starter</h2>

<p>Starter is an open-source command line tool to generate a <code>Dockerfile</code> and a <code>service.yml</code> file from arbitrary source code. The service.yml file is a Cloud 66 service definition file which is used to define the service configuration on a stack.</p>

<p>Starter works in the same way as <a href="https://devcenter.heroku.com/articles/buildpacks">BuildPacks</a> do, but only generates the above mentioned files; the image compile step happens on <a href="http://help.cloud66.com/building-your-stack/building-your-docker-service">BuildGrid</a>. Starter does not require any additional third party tools or frameworks to work (it's compiled as a Go executable).</p>

<h2>Getting Started</h2>
<p>Here is a <a href="https://github.com/cloud66-oss/starter#quick-start">quick guide on installing Starter</a>.</p>

<p>Once installed, you run Starter like this:</p>

<pre class="yaml">
  <code>
    $ cd /my/project

    $ starter -g dockerfile,service,docker-compose
  </code>
</pre>

<p>This will analyze the project in the current folder and generate the three files: <code>Dockerfile</code>, <code>docker-compose.yml</code> and <code>service.yml</code> in the same folder, prompting for information when required.
</p>

<pre class="yaml">
  <code>
    Cloud 66 Starter ~ (c) 2016 Cloud 66
    Detecting framework for the project at /Users/awesome/work/boom
    Found ruby application
    Enter ruby version: [latest]
    ----> Found config/database.yml
    Found mysql, confirm? [Y/n]
    Found redis, confirm? [Y/n]
    Found elasticsearch, confirm? [Y/n]
    Add any other databases? [y/N]
    ----> Analyzing dependencies
    ----> Parsing Procfile
    ----> Found Procfile item web
    ----> Found Procfile item worker
    ----> Found unicorn
    This command will be run after each build: '/bin/sh -c "RAILS_ENV=_env:RAILS_ENV bundle exec rake db:schema:load"', confirm? [Y/n]
    This command will be run after each deployment: '/bin/sh -c "RAILS_ENV=_env:RAILS_ENV bundle exec rake db:migrate"', confirm? [Y/n]
    ----> Writing Dockerfile...
    ----> Writing docker-compose.yml...
    ----> Writing service.yml
    Done
  </code>
</pre>

<p>Starter supports <a href="https://devcenter.heroku.com/articles/procfile">Procfiles</a> and generates a service in <code>service.yml</code> for each item in the Procfile. It’s highly advised to use a Procfile to define your own service commands, as otherwise, Starter will only detect the web service.</p>

<p>To use Starter on a different folder, you can use the <code>p</code> option:</p>

<pre class="yaml">
  <code>
    $ starter -p /my/project
  </code>
</pre>

<p> For more options, please see:</p>

<pre class="yaml">
  <code>
    $ starter help
  </code>
</pre>

<p>Starter can generate a <code>Dockerfile</code> , <code>docker-compose.yml</code> and a Cloud 66 specific <code>service.yml</code> for you:</p>

<ul>

<p> <li>Dockerfile: a Docker specification text document that contains all the commands a user could call on the command line to assemble an image (more compatible with development environments)</li></p>

<p> <li> docker-compose.yml: a Docker specification file for making it easy to run your Dockerized application on your machine and mimic the Docker infrastructure. Ofcourse without all the extra ops stuff you need thanks to running Docker in production with Cloud 66 (more compatible with development environments) </li></p>

<p><li> service.yml: a Cloud 66 service definition file, which is used to define the service configurations on a stack (more compatible with production environments). </li></p>

</ul>

<h3>Deploying your app to your servers</h3>

<p>Once you have the <code>docker-compose.yml</code> and <code>Dockerfile</code> generated, you can open them up in your favourite text editor for inspection or modifications:</p>

<pre class="yaml">
  <code>
    $ atom Dockerfile

    $ atom docker-compose.yml
  </code>
</pre>

<p> The <code>docker-compose.yml</code> file is a good start to run your containerized application in production. Depending on your target platform, you need to adjust the settings or translate the <code>docker-compose.yml</code> in a specific service configuration for your target platform</p>

<h3> Deploy on Cloud 66 </h3>

<p>Once done, you can now use these files to build and deploy your application on Cloud 66 (you’ll need a <a href="https://app.cloud66.com/users/sign_up?utm_source=starter&utm_medium=page&utm_campaign=opensource">free Cloud 66 account</a> for this).</p>

<p> Cloud 66 inspects your <code>Dockerfile</code> via your source code, so we’ll need to commit that into the code in your Git repository.</p>

<pre class="yaml">
  <code>
    $ git add Dockerfile

    $ git commit -m "adding Dockerfile"

    $ git push origin master
  </code>
</pre>

<p> Now you can use the web interface <a href="http://help.cloud66.com/introduction-to-cloud-66/introduction-to-cloud-66">to create a new stack</a> for your app in Cloud 66. All you need to do is to copy and paste the generated <code>service.yml</code> to the advanced settings of the stack creation step.</p>

<p> Alternatively you can use the <a href="http://help.cloud66.com/toolbelt/toolbelt-stack-management">Cloud 66 Toolbelt</a> to create your stack from the command line:</p>

<pre class="yaml">
  <code>
    $ cx stacks create --name "My Awesome Stack" --environment "production" --service_yaml service.yaml
  </code>
</pre>

<p> Find more information on <a href="http://help.cloud66.com/toolbelt/toolbelt-stack-management">creating a stack with the Toolbelt</a>.</p>

<h2> Support for new frameworks and languages </h2>

<p> We’ll be adding support for new languages and frameworks over time. However, if you find yourself interested in adding one, it's fairly easy to do:</p>

<ul>

<li><p> Get the source code and compile it (it's written in Go!)</p></li>
<li><p> Create a new directory under <code>packs/</code> for your language or framework, e.g <code>packs/java/</code></li>
<li><p> You then need to implement two interfaces: <code>packs.Analyzer</code> and <code>packs.Detector</code></p></li>
<li><p> The Detector tells starter if the project is written in the given language or framework (in this example - Java)</p></li>
<li><p> The Analyzer analyzes the project and writes the <code>Dockerfile</code> and <code>service.yml</code></p></li>
<li><p> A template is created with the name of the language under the <code>templates</code> folder, e.g <code>java.dockerfile.template</code></p></li>
<li><p> Use Golang template syntax to build the template for the <code>Dockerfile</code></p></li>

</ul>

<h2> Contribute to Starter using Habitus </h2>

<p> If you want to contribute to Starter. You can build Starter using <a href="http://www.habitus.io/">Habitus</a>. Habitus is an open source build flow tool for Docker. (https://github.com/cloud66/habitus)</p>

<p> Run Habitus in the root directory of this repository. The latest version is generated (after tests) inside the <code>/artifacts/compiled</code> directory.

<pre class="yaml">
  <code>
    $ sudo habitus –host $DOCKER_HOST –certs $DOCKER_CERT_PATH
  </code>
</pre>

<p>To make sure you a have isolated development environment for contribution. You can use the docker-compose for developing, testing and compiling.</p>

<pre class="yaml">
  <code>
    $ docker-compose run starter
  </code>
</pre>

<p> Building Starter inside a docker container:</p>

<pre class="yaml">
  <code>
    $ root@xx:/usr/local/go/src/github.com/cloud66/starter# go build
  </code>
</pre>

<p> Running the tests:</p>

<pre class="yaml">
  <code>
    $ root@xx:/usr/local/go/src/github.com/cloud66/starter# go test
  </code>
</pre>

<p> And you are ready to start your contributions to Starter.  </p>


<!-- video and blog -->
<p class="YouTube"><iframe width="560" height="315" src="https://www.youtube.com/embed/50-0IQNGd3g" frameborder="0" allowfullscreen></iframe></p>
<p class="articles">Read more <a href="http://blog.cloud66.com/tag/starter/">articles about Starter.</a></p>
