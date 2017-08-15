## Configure Mongoid

As the most popular Ruby client for MongoDB, here is an example of how to change your `mongoid.yml` file to use a replica set.

Before having a replica set, you had the following setup:



{%include _inlines/path_to_code %}



After replica sets are enabled you can use something like this:



{%include _inlines/path_to_code %}



The reason for the ugly looking line is that `mongoid` requires the list of server addresses in the replica set to be in an array with port numbers. Since your replica set will be configured to work on the normal MongoDB port of 27017 by default, this line will split the comma separated list into an array in Ruby. The end result will look like something like this:



{%include _inlines/path_to_code %}






