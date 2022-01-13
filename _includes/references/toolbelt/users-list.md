Shows a list of all the users in an organization that you have rights to manage. You can find your `<organization name>` by using `cx info`.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx --org <organization name> users list
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--org &lt;organization name&gt; | yes | — | The email address associated with the user's Cloud 66 account |
{% include references/toolbelt/boilerplate/example.html %}
$ cx --org my-org users list
{% include references/toolbelt/boilerplate/footer.html %}