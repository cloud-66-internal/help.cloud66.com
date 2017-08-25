<!--  usedin: [ _rails/Tutorials/2014-04-26-gem-dependencies.md] -->


Depending on which gems you're using together with a specific Ruby version, you may see dependency issues such as:


{%include _inlines/Tutorials/Rails/2014-04-26-gem-dependencies/code_2014-04-26-gem-dependencies_depending-on-which-gems-yo.md %}




This may happen with a gem such as `debugger`, which is designed to hook into low level components of a language to dynamically stop and inspect the execution of code.

1.
This should _not_ be done in production, so you could start by moving the gem to your `development` group in your `Gemfile`:

{%include _inlines/Tutorials/Rails/2014-04-26-gem-dependencies/code_2014-04-26-gem-dependencies_1.md %}

Once this is done, run bundle install, commit to your Git and re-deploy.


2.
You may be running an old version of a gem while running a later version of Ruby - try running `bundle update debugger` to update the gem. Your other option is to downgrade your Ruby version.

3.
You could investigate what dependencies are required by running `gem install debugger` on the server, and taking note of the required packages. You could then use a [manifest file](http://help.cloud66.com/building-your-stack/getting-started-with-manifest-files) or [deploy hooks](http://help.cloud66.com/deployment/deploy-hooks) to automate the installation of these packages as you scale.
