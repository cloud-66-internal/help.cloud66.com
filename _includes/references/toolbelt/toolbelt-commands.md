These commands are listed alphabetically by top level command name. 

## backups list
{% include references/toolbelt/backups-list.md %}

## backups download
{% include references/toolbelt/backups-download.md %}

## backups new
{% include references/toolbelt/backups-new.md %}

## config
Allows you to configure multiple profiles in cx to support multiple Cloud 66 accounts. Please read our [separate guide](/{{page.collection}}/references/toolbelt/toolbelt-profiles.html) on configuring Toolbelt.

## containers list
Alias: `container list`

{% include references/toolbelt/containers-list.md %}

## containers attach
Alias: `container attach`

{% include references/toolbelt/containers-attach.md %}

## containers stop
Alias: `container stop`

{% include references/toolbelt/containers-stop.md %}

## containers restart
Alias: `container restart`

{% include references/toolbelt/containers-restart.md %}


## databases promote-replica
Alias: `database promote-replica` <br/>
Alias: `database promote-slave` (deprecated) <br/>
Alias: `databases promote-slave` (deprecated)

{% include references/toolbelt/databases-promote-slave.md %}

## databases resync-replica
Alias: `database resync-replica` <br/>
Alias: `database resync-slave` (deprecated) <br/>
Alias: `databases resync-slave` (deprecated)

{% include references/toolbelt/databases-resync-slave.md %}

## download

{% include references/toolbelt/download.md %}

## dump-token

{% include references/toolbelt/dump-token.md %}

## env-vars list

{% include references/toolbelt/env-vars-list.md %}

## env-vars download

{% include references/toolbelt/env-vars-download.md %}

## env-vars set

{% include references/toolbelt/env-vars-set.md %}

## env-vars upload

{% include references/toolbelt/env-vars-upload.md %}

<!-- ## formations bundle
Alias: `formation bundle`

{% include references/toolbelt/formations-bundle.md %}
-->

## failover-groups list
{% include references/toolbelt/failover-groups-list.md %}

## failover-groups add
{% include references/toolbelt/failover-groups-add.md %}

## failover-groups delete
{% include references/toolbelt/failover-groups-delete.md %}

## failover-groups update
{% include references/toolbelt/failover-groups-update.md %}

{% if include.product == 'skycap' %}
## formations list
Alias: `formation list`

{% include references/toolbelt/formations-list.md %}

## formations commit
Alias: `formation commit`

{% include references/toolbelt/formations-commit.md %}

## formations create
Alias: `formation create`

{% include references/toolbelt/formations-create.md %}

## formations deploy
Alias: `formation deploy`

{% include references/toolbelt/formations-deploy.md %}

## formations fetch
Alias: `formation fetch`

{% include references/toolbelt/formations-fetch.md %}

## formations stencils list
Alias: `formation stencils list`

{% include references/toolbelt/formations-stencils-list.md %}
{% endif %}
{% if include.product == 'rails' %}
## gateways list

{% include references/toolbelt/gateways-list.md %}

## gateways add

{% include references/toolbelt/gateways-add.md %}

## gateways close

{% include references/toolbelt/gateways-close.md %}

## gateways open

{% include references/toolbelt/gateways-open.md %}

## gateways remove

{% include references/toolbelt/gateways-remove.md %}
{% endif %}
## help

{% include references/toolbelt/help.md %}

<!--
## help-environ

{% include references/toolbelt/help-environ.md %}
-->

## info

{% include references/toolbelt/info.md %}

## init
Initializes the Toolbelt. Please read our separate guide on [installing and configuring Toolbelt](/{{page.collection}}/references/toolbelt/toolbelt-installation.html).

## init agent
Initializes the Toolbelt as a standalone (headless) agent. Please read our separate guide on [installing and configuring Toolbelt](/{{page.collection}}/references/toolbelt/toolbelt-installation.html).

<!--
## init setup
???

{% include references/toolbelt/init-setup.md %}
-->

## jobs list
Alias: `job list`

{% include references/toolbelt/jobs-list.md %}

## jobs run
Alias: `job run`

{% include references/toolbelt/jobs-run.md %}

## lease

{% include references/toolbelt/lease.md %}

## login

{% include references/toolbelt/login.md %}

## notifications download

{% include references/toolbelt/notifications-download.md %}

## notifications upload

{% include references/toolbelt/notifications-upload.md %}

## open

{% include references/toolbelt/open.md %}

## processes list
Alias: `process list`

{% include references/toolbelt/processes-list.md %}

## processes pause
Alias: `process pause`

{% include references/toolbelt/processes-pause.md %}

## processes restart
Alias: `process restart`

{% include references/toolbelt/processes-restart.md %}

## processes resume
Alias: `process resume`

{% include references/toolbelt/processes-resume.md %}

## processes scale
Alias: `process scale`

{% include references/toolbelt/processes-scale.md %}

## redeploy
Alias: `stacks redeploy`

{% include references/toolbelt/redeploy.md %}

## register-server

{% include references/toolbelt/register-server.md %}

## run

{% include references/toolbelt/run.md %}

## servers list
Alias: `server list`

{% include references/toolbelt/servers-list.md %}

## servers reboot
Alias: `server reboot`

{% include references/toolbelt/servers-reboot.md %}

## servers settings list
Alias: `server settings list`

{% include references/toolbelt/servers-settings-list.md %}

## services info
Alias: `service info`

{% include references/toolbelt/services-info.md %}

## services list
Alias: `service list`

{% include references/toolbelt/services-list.md %}

## services pause
Alias: `service pause`

{% include references/toolbelt/services-pause.md %}

## services restart
Alias: `service restart`

{% include references/toolbelt/services-restart.md %}

## services resume
Alias: `service resume`

{% include references/toolbelt/services-resume.md %}

## services scale
Alias: `service scale`

{% include references/toolbelt/services-scale.md %}

## services stop
Alias: `service stop`

{% include references/toolbelt/services-stop.md %}

## settings list
Alias: `setting list`

{% include references/toolbelt/settings-list.md %}

## settings set
Alias: `setting set`

{% include references/toolbelt/settings-set.md %}

## skycap listen

{% include references/toolbelt/skycap-listen.md %}

{% if include.product == 'skycap' %}
## snapshots list

{% include references/toolbelt/snapshots-list.md %}

## snapshots render

{% include references/toolbelt/snapshots-render.md %}
{% endif %}
## ssh

{% include references/toolbelt/ssh.md %}

## stacks clear-caches
Alias: `stack clear-caches`

{% include references/toolbelt/stacks-clear-caches.md %}

## stacks configure download
Alias: `stack configure download`

{% include references/toolbelt/stacks-configure-download.md %}

## stacks configure list-versions
Alias: `stack configure list-versions`

{% include references/toolbelt/stacks-configure-list-versions.md %}

## stacks configure upload
Alias: `stack configure upload`

{% include references/toolbelt/stacks-configure-upload.md %}

## stacks configuration list
Alias: `stack configuration list`

{% include references/toolbelt/stacks-configuration-list.md %}

## stacks configuration apply
Alias: `stack configuration apply`

{% include references/toolbelt/stacks-configuration-apply.md %}

## stacks configuration download
Alias: `stack configuration download`

{% include references/toolbelt/stacks-configuration-download.md %}

## stacks configuration upload
Alias: `stack configuration upload`

{% include references/toolbelt/stacks-configuration-upload.md %}

## stacks list
Alias: `stack list`

{% include references/toolbelt/stacks-list.md %}

## stacks create
Alias: `stack create`

{% include references/toolbelt/stacks-create.md %}

## stacks listen
Alias: `stack listen`

{% include references/toolbelt/stacks-listen.md %}

## stacks reboot
Alias: `stack reboot`

{% include references/toolbelt/stacks-reboot.md %}

## stacks redeploy
Alias: `stack redeploy`

Triggers the deployment of an application. Alias of `redeploy` function.

## stacks restart
Alias: `stack restart`

{% include references/toolbelt/stacks-restart.md %}

## stacks ssl
Alias: `stack ssl`

{% include references/toolbelt/stacks-ssl.md %}

## tags add

{% include references/toolbelt/tags-add.md %}

## tags delete

{% include references/toolbelt/tags-delete.md %}

## tail

{% include references/toolbelt/tail.md %}

{% if include.product == 'skycap' %}
## templates list

{% include references/toolbelt/templates-list.md %}

## templates resync

{% include references/toolbelt/templates-resync.md %}

## templates show

{% include references/toolbelt/templates-show.md %}
{% endif %}
## test

{% include references/toolbelt/test.md %}

## tunnel

{% include references/toolbelt/tunnel.md %}

## update

{% include references/toolbelt/update.md %}

## upload

{% include references/toolbelt/upload.md %}

## users list

{% include references/toolbelt/users-list.md %}

## users apply-profile

{% include references/toolbelt/users-apply-profile.md %}

## users show

{% include references/toolbelt/users-show.md %}


