<!--  usedin: [ _node/deployment/application-settings-node.md] -->


##  Fire up some workers 

You can use Procfiles to ensure that your background jobs run and are monitored. Doing so is as easy as defining them in the root of your application, in a file called `Procfile`.

A typical Procfile may look something like this:



{%include _inlines/Deployment/Node/application-settings-node/code_application-settings-node_fire-up-some-workers--bnodes.md  product = include.product %}




The commands above would run node `server.js` and node `some_work.js` and monitor them. Cloud 66 will attempt to bring processes that go down or crash up again. Processes are also instructed to start when your server is booted. An overall view of your processes is available in your stack detail page.

