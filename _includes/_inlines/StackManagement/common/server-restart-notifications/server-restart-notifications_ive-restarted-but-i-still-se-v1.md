<!--  usedin: [ _legacy_docker/stack-management/server-restart-notifications-v1.md, _maestro/stack-management/server-restart-notifications-v1.md, _node/stack-management/server-restart-notifications-v1.md, _rails/stack-management/server-restart-notifications-v1.md] -->


## I've restarted, but I still see the notification

Due to the periodic checking of your server (as stated above) it can take up to 12 hours for your notifications to be cleared. Deploying your stack will cause an immediate refresh of your restart notification state (after deployment completes). You can also manually check your restart required status on your server by running the command:



{%include _inlines/StackManagement/common/server-restart-notifications/code_server-restart-notifications_ive-restarted-but-i-sti-v1.md  product = include.product %}




