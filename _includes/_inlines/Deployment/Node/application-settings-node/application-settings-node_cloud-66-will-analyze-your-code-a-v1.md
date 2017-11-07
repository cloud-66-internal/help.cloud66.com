<!-- usedin: [ _node/deployment/application-settings-node-v1.md] -->



Cloud 66 will analyze your code and detect a few things:

*    The Node.js version you want to use.
*    The [framework](supported-frameworks.html), for example Express.js, you are using.
*    The datasources, for example MongoDB, you want to use.

During the analysis phase we are using two files to determine the information about application: `package.json` and `Procfile`. If the outcome of the analyze phase doesn't satisfy your needs, you need to update your `package.json`.

