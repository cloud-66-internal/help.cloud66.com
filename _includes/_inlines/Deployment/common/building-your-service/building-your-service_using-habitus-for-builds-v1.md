


### Using Habitus for builds

[Habitus is a build workflow tool for Docker](http://www.habitus.io). It allows you to create a build workflow consisting of multiple steps for your Docker stacks on BuildGrid. Cloud 66 BuildGrid fully supports Habitus. To enable Habitus on BuildGrid builds, you need to do the following:

1.  Add a `build.yml` to your repository
2.  Set `use_habitus` attribute to `true` in your `service.yml`
3.  Set the `use_habitus_step` to the step you would like to use for your servide in your `service.yml`

Check out the [Habitus website](http://www.habitus.io) for more information about generating a `build.yml`.

A Habitus build usually has multiple steps and each step can generate a Docker image. Using `use_habitus_step` attribute you can specify which step's results you would like to use as the image for the container. 
