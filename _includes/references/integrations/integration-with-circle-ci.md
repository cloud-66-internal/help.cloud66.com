
You can use Circle CI to accomplish continuous integration and deployment of your application together with Cloud 66.

To get your build hooked up to Circle CI, you need to use the [redeployment hook]({% if page.collection != "skycap" %}/{{page.collection}}/tutorials/redeployment-hook.html{%else%}/maestro/tutorials/redeployment-hook.html{%endif%}) provided by Cloud 66:

Access the _stack information_ page:

![Stack info](http://assets.cloud66.com/help/images/stack_information.png)

Copy the redeployment hook:

![Redeployment hook](http://assets.cloud66.com/help/images/stack_info_overlay.png)

Please refer to the [Circle CI documentation](https://circleci.com/docs/configuration) for more information.
