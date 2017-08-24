---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2016-04-07-logs-for-containers/code_2016-04-07-logs-for-containers_if-you-are-confused-why-1.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2016-04-07-logs-for-containers/code_2016-04-07-logs-for-containers_if-you-are-confused-why.html" ]
 usedin: [ _legacy_docker/Tutorials/2016-04-07-logs-for-containers.md, _maestro/Tutorials/2016-04-07-logs-for-containers.md] -->


If you are confused why you can see your logs in [livelogs](http://help.cloud66.com/managing-your-stack/live-logs) but not under `/var/log/containers/` even after introducing `log_folder` or if you need to work with your logs this article is for you.

In the livelogs you can see the `stdout` and the content of `/log` folder of your container by default, so if you cannot see anything under `/log` and still there are logs being shown in livelogs it means the logs are coming from the container's stdout.

This sample will run an app in a container and by default the folder `/log` and the `stdout` will be piped to Docker default Json log file.



{%include _inlines/Tutorials/common/2016-04-07-logs-for-containers/code_2016-04-07-logs-for-containers_if-you-are-confused-why-1.md %}




If your app shows its log in the `stdout` and you need to have a more centeralised log file you can do this:

1. Change the command from: `command: rackup -p 3000`

   	to:  `command: rackup -p 3000 > /PATH_TO_LOG_FOLDER/LOG_FILE`

   	which will pipe the stdout to your specified log file.

2. Add this to your service: 

		log_folder: /PATH_TO_LOG_FOLDER

	So your service.yml will look like this:
		{%include _inlines/Tutorials/common/2016-04-07-logs-for-containers/code_2016-04-07-logs-for-containers_if-you-are-confused-why.md %}

3\. Now after you start the service you can ssh to the server/host and have a look at `/var/log/containers/SERVICE_NAME/`

You should see the `LOG_FILE` is listed.
