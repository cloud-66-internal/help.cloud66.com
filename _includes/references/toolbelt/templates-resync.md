Pulls the latest code from the stencil template repository for a specific template.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx templates resync --template <template UID>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--template &lt;template UID&gt;  | yes | — | The UID of the template that will be refreshed |
{% include references/toolbelt/boilerplate/example.html %}
$ cx templates resync --template 'bt-2e0810a17c33ab35d7970ff330b1f916'
{% include references/toolbelt/boilerplate/footer.html %}