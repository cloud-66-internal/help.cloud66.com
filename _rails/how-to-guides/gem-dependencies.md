---
layout: post
template: one-col
title: Gem dependency errors
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---


{% assign product = "Rails" %}





Depending on which gems you're using together with a specific Ruby version, you may see dependency issues such as:




```
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.
/usr/local/bin/ruby extconf.rb
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.
```





This may happen with a gem such as `debugger`, which is designed to hook into low level components of a language to dynamically stop and inspect the execution of code.

1.
This should _not_ be done in production, so you could start by moving the gem to your `development` group in your `Gemfile`:



```
group :development do
  gem "debugger"
end
```


Once this is done, run bundle install, commit to your Git and re-deploy.


2.
You may be running an old version of a gem while running a later version of Ruby - try running `bundle update debugger` to update the gem. Your other option is to downgrade your Ruby version.

3.
You could investigate what dependencies are required by running `gem install debugger` on the server, and taking note of the required packages. You could then use a [manifest file](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html) or [deploy hooks](http://help.cloud66.com/deployment/deploy-hooks) to automate the installation of these packages as you scale.


