---
menuheaders: [ "The basics", "The specifics" ]
layout: post
template: one-col
title: Errors when installing gem libv8
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---








## The basics

If you specify the version of libv8 as `gem libv8 '~>3.11.8'` for instance, in your Gemfile, you *could* encounter an unfriendly error.
(Note that most of the time, libv8 is installed as a pre-dependency for gem therubyracer, so you don't always need to specify it explicitly)

The easiest solution is to determine which version of the gem actually works on your target machine, and then either relax the constraint in your Gemfile or fix it at a working revision afterwards.

You can determine the working gem version by opening a terminal to your server and manually uninstalling/installing gem versions with:

`gem uninstall libv8`

`gem install libv8` (for the latest or `gem install libv8 --version '3.11.8.13'` for a specific version for instance)

Finally, if you can't get this to work and you're running Rails > 3.1.0 then you also have the option of letting Cloud 66 install Node.js for you.

Remove 'therubyracer' from your Gemfile and [Cloud 66 will automatically install Node.js](http://help.cloud66.com/building-your-stack/asset-pipeline-compilation) - simple!






## The specifics

The following is the unfriendly libv8 installation error you may be presented with:





```
Gem::Installer::ExtensionBuildError: ERROR: Failed to build gem native extension.

/usr/local/bin/ruby extconf.rb
checking for main() in -lpthread... yes
creating Makefile

make
compiling message.cc
compiling handles.cc
compiling rr.cc
compiling value.cc
compiling invocation.cc
compiling exception.cc
compiling array.cc
compiling external.cc
compiling stack.cc
compiling trycatch.cc
compiling primitive.cc
compiling date.cc
compiling script.cc
compiling constraints.cc
compiling string.cc
compiling signature.cc
compiling backref.cc
compiling init.cc
compiling heap.cc
compiling locker.cc
compiling object.cc
compiling accessor.cc
compiling v8.cc
compiling gc.cc
compiling function.cc
compiling constants.cc
compiling context.cc
compiling template.cc
linking shared-object v8/init.so
/var/deploy/mindr-staging/web_head/shared/bundle/ruby/1.9.1/gems/libv8-3.11.8.3-x86_64-linux/vendor/v8/out/x64.release/obj.target/tools/gyp/libv_base.a: could not read symbols: Malformed archive
collect2: ld returned 1 exit status
make: *** [init.so] Error 1
```





