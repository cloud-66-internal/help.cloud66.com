<!-- usedin: [ _legacy_docker/getting-started/server-size.md, _maestro/getting-started/server-size.md, _node/getting-started/server-size.md, _rails/getting-started/server-size.md, _skycap/getting-started/server-size.md] -->


When deploying your stack, you are asked to specify a server size for the deployment. If you're testing Cloud 66, you may be inclined to do so on as small a server as possible. **We recommend that you do not do this, as this will come at a detriment to your experience with the service.**

When your stack is built for the first time, a number of packages are built from source, along with other memory intensive operations. Though we create a [swap file](http://www.computerhope.com/jargon/s/swapfile.htm) on small servers by default, to avoid it running out of memory, running on low resources will cause your build to take longer than normal.

