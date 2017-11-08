


## The basics

If you specify the version of libv8 as `gem libv8 '~>3.11.8'` for instance, in your Gemfile, you *could* encounter an unfriendly error.
(Note that most of the time, libv8 is installed as a pre-dependency for gem therubyracer, so you don't always need to specify it explicitly)

The easiest solution is to determine which version of the gem actually works on your target machine, and then either relax the constraint in your Gemfile or fix it at a working revision afterwards.

You can determine the working gem version by opening a terminal to your server and manually uninstalling/installing gem versions with:

`gem uninstall libv8`

`gem install libv8` (for the latest or `gem install libv8 --version '3.11.8.13'` for a specific version for instance)

Finally, if you can't get this to work and you're running Rails > 3.1.0 then you also have the option of letting Cloud 66 install Node.js for you.

Remove 'therubyracer' from your Gemfile and [Cloud 66 will automatically install Node.js](http://help.cloud66.com/building-your-stack/asset-pipeline-compilation) - simple!

