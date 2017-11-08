---
menuheaders: [ "Cloud 66 ChatOps", "Quick install:", "Create a Slack bot", "Download Igor", "Deregister", "For any informations on how to use Igor:" ]
layout: post
template: one-col
title: Manage your stacks from Slack with ChatOps
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---








## Cloud 66 ChatOps
Igor is an open source Slack-bot, built by [Cloud 66](http://www.cloud66.com/?utm_source=gh&utm_medium=ghp&utm_campaign=robochat). It is your very own personal assistant that operates on your stacks directly from the Slack chat window. Now, you can display the state of your stacks, perform deployments, and cancel them with simple commands like `list` , `deploy`, and `cancel`.





__________________________________________________________________

## Quick install:






### Create a Slack bot

First thing you will need to do is to create your ChatOps bot on Slack.

- Go to `https://you_slack_team.slack.com/apps/manage/custom-integrations` 
- Go to `Bots`
- Go to `Add Configuration`
- Choose the name of your bot, the name will be required before each commands
- Save the token for later

Once you have filled the registration page you can invite your bot to any slack channels from your team you want : `/invite @bot-name`.






### Download Igor

You can install the app either from the Cloud 66 app store or from the docker-compose

From the Cloud66's app store:

-   Go to `https://app.cloud66.com/easydeploys`
-   Install the `ChatOps` app
-   Deploy the stack
-   Click on `Browse` to access the web resgistration page for your bot.

or

From the docker-compose file:

- The docker-compose file is available [here](https://github.com/cloud66/igor-bot/blob/feature/testing_enhancements/docker-compose.yml)






### Deregister

Go to the registration page from the `Browse` of your Igor registration container and then click on deregister. You will have to restart your Igor container for the changes to take place.






### For any informations on how to use Igor:

Please go to : [http://chatops.cloud66.com](http://chatops.cloud66.com)

