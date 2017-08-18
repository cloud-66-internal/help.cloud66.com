<!-- post: -->


#### Github Integration

Users who have signed in through Github (and who have enough access to create and edit deployement events for their stacks on GitHub) can activate continuous deployments on GitHub. To do this: access your [Stack settings](/toolbelt/toolbelt-settings-command) via the [toolbelt
 and set **continuous.deploy** to _true_.



{%include _inlines/Deployment/common/redeployment-hook/code_redeployment-hook_github-integration-cxsettingss.md %}




This will create a new webhook for your repository on GitHub or simply modify and existing one to let Cloud66 recieve _deployment_ events as well.

With this feature enabled, whenever you push new commit, Cloud 66 will automatically generate a new _deployment event_ based on recieving the _push event_ from GitHub. We will also send _deployment status events_ on different deployment statuses, such as started, cancelled, succeeded and failed.

For more information please refer to the 
Github Deployment API](/toolbelt/toolbelt-introduction).

