Returns details about a user. You can dump these as a json file for use with the `users apply-profile` function.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx users show <user email> --json <filename>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| &lt;user email&gt; | yes | — | The email address associated with the user's Cloud 66 account |
| \--json &lt;filename&gt; | no | — | Dumps the profile data as a json formatted file. |
{% include references/toolbelt/boilerplate/example.html %}
$ cx users show jim@gmail.com --json /tmp/jim_profile.json
{% include references/toolbelt/boilerplate/footer.html %}