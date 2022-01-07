Enqueues redeployment of an existing application. If the app is already building, another build will be enqueued and performed immediately after the current one is finished.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx redeploy --stack <application name> --listen [-y] [--git-ref <git_ref>] [--service <service>] [--deploy-strategy <strategy>] [--rollout-strategy <strategy>] [--canary-percentage <percentage>] [--deployment-profile <profile name>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| -y | no | — | Answer yes to confirmations |
| \--listen | no | — | Waits for deployment to complete, shows progress and log output when available |
| \--git-ref &lt;git_ref&gt; | no | — | Redeploy the specific git reference (branch, tag or hash). |
| \--service &lt;service&gt; | no | — | Will deploy the specified services from your application. Each service can have an optional colon-separated reference which is an image tag or git reference. |
| \--deploy-strategy &lt;strategy&gt; | no | — | Set a strategy for this redeployment. Options are serial, parallel, rolling (Rails/Rack) or fast (Maestro) |
| \--rollout-strategy &lt;strategy&gt; | no | none | Set a rollout strategy for this redeployment. Options are none, blue_green_immediate, blue_green_delayed, or canary |
| \--canary-percentage &lt;percentage&gt; | no | — | Set the percentage of traffic to direct to a canary rollout |
| \--deployment-profile &lt;profile name&gt; | no | — | Use an existing profile for this redeployment. |
{% include references/toolbelt/boilerplate/example.html %}
$ cx redeploy -s "My Awesome App" -e production --deploy-strategy fast
$ cx redeploy -s "My Awesome App" -e production -y --git-ref my_git_ref_value
$ cx redeploy -s "My Awesome Containerized App" --service web:8c7f3d393162f88b8b9493f6babec574b03ca957 --service api:latest
{% include references/toolbelt/boilerplate/footer.html %}