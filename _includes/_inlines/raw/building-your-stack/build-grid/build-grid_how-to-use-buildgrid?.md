<!-- post: -->


## How to use BuildGrid?

To use BuildGrid include the Git repository URL and Git branch of your source code in your `service.yml`:

{% highlight yaml %}
services:
  my_service:
    git_url: git@github.com:pkallberg/node-js-app.git
    git_branch: master
{% endhighlight %}

This is all you need to trigger automatic building of `my_service` Docker image on BuildGrid. With this `service.yml` BuildGrid will clone your code repository before deployment and will look for a `Dockerfile` in your code. It will then run a `docker bulld` command to build the image and then pushes the built image into a private Docker repository that’s available to all Cloud 66 Stacks.

The built image is then pulled from this repository on all the applicable servers and managed.

Find more information on [BuildGrid configuration in service.yml](/building-your-stack/building-your-docker-service).

