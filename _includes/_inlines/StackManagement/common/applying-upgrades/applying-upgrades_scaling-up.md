

#### Scaling up

Arguably the best option to use when upgrading Ruby is to scale up a new server within the same stack, and simply drop the old one. You can specify your new Ruby version in a  [manifest file] (/building-your-stack/getting-started-with-manifest-files). Once you've pushed this change and deployed, scale up a new web server, which will use this version of Ruby. The previous server would remain on the old version of Ruby.




Make sure you redeploy before you scale up, otherwise the new manifest will not be taken to account.




There are a couple of small caveats to be aware of though - after you've done this process, you'll have servers in your stack on different Ruby versions. If you were to enforce a Ruby version in your Gemfile, this would mean that your application would stop working on either one of the servers (depending on which version you chose in your Gemfile).

You can scale-down your older web server to ensure all your web servers are the correct version, but your backend servers will still be the older version of Ruby. This may or may-not have any implication, depending on what you're doing with your servers. However, if you were to then run the "Ruby upgrade" job, this would sync all your servers to your new version of Ruby, so your backend servers would be upgraded at that point too.

Also, if you have background jobs running on your old server, ensure that you gracefully shut these down before switching everything to the new server (to avoid lost jobs).

