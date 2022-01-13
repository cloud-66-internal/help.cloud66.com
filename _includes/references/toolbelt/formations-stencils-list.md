List all the stencils in a formation.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx formations stencils list --formation <formation name> --output <view>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| \--formation &lt;formation name&gt; | yes | — | The name of the Formation to which the Stencils belong. |
| \--output &lt;view&gt; | no | standard | Tailor the output view (standard or wide) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx formations stencils list --formation foo 
$ cx formations stencils list --formation bar --output wide
{% include references/toolbelt/boilerplate/footer.html %}