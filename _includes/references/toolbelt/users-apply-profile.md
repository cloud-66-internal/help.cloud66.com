Apply Profile allows you to apply a user’s Access Profile to another one. To use this command you need to have an Access Profile as a `json` file. This can be generated using the `users show` command with the `json` option. Once you have the file you can modify it to make any changes you require in the Access Profile.

Any missing attribute for the `json` Access Profile will be left unchanged even if `override` is used. Also, `override` doesn’t have any effect on the contents of the `account_profile` section.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx users apply-profile <user email> --json <access profile>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| &lt;user email&gt; | yes | — | The email address associated with the user's Cloud 66 account |
| \--json &lt;access profile&gt; | yes | — | The access profile to be applied to the user |
| \--override | no | — | Will override the access rights instead of append |
{% include references/toolbelt/boilerplate/example.html %}
$ cx --org My_Awesome_org users apply-profile jack@gmail.com --json /tmp/jim_profile.json
$ cx --org My_Awesome_org users apply-profile jack@gmail.com --json /tmp/jim_profile.json --override
{% include references/toolbelt/boilerplate/footer.html %}