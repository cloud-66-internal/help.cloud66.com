Runs the given job once with the given parameters.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx jobs run --stack <application name> --arg [--arg option --arg option] <job name>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| &lt;job name&gt; | yes | — | The name of the job |
| \--arg [--arg option --arg option] | no | — | Parameters to be passed to the job |
{% include references/toolbelt/boilerplate/example.html %}
$ cx job run -s "My Awesome App" my_job
$ cx job run -s "My Awesome App" --arg "arg1" --arg "arg2" my_job
{% include references/toolbelt/boilerplate/footer.html %}