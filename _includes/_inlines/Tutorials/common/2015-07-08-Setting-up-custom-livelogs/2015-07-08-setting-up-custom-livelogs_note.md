---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2015-07-08-Setting-up-custom-livelogs/code_2015-07-08-setting-up-custom-livelogs_note-oduction.html" ]
 usedin: [ _legacy_docker/Tutorials/2015-07-08-Setting-up-custom-livelogs.md, _maestro/Tutorials/2015-07-08-Setting-up-custom-livelogs.md, _node/tutorials/2015-07-08-Setting-up-custom-livelogs.md, _rails/Tutorials/2015-07-08-Setting-up-custom-livelogs.md] -->


### Note

Server log file paths changes are calculated after each deployment, so if you change your logs in your manifest, be sure to redeploy in order to see them on the LiveLogs page.

You can also have multiple custom log files defined for different server roles; for instance see the example below to add custom log files to all Docker servers with different custom log files for all MySQL servers (on the same stack):

{%include _inlines/Tutorials/common/2015-07-08-Setting-up-custom-livelogs/code_2015-07-08-setting-up-custom-livelogs_note-oduction.md %}

