For improved performance, Cloud 66 caches volatile code. It is possible for a those caches to become invalid if you switch branches, change git repository URL, rebase or force a commit. Since switching branch or changing git repository URL is done via the Cloud 66 interface, your volatile caches will automatically be purged. However, rebasing or forcing a commit is external to Cloud 66 and therefore doesn’t trigger the purge, so this command can be used to manually purge the existing volatile caches.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx stacks clear-caches --stack <application name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
{% include references/toolbelt/boilerplate/example.html %}
$ cx stacks clear-caches -s "my updated app"
{% include references/toolbelt/boilerplate/footer.html %}