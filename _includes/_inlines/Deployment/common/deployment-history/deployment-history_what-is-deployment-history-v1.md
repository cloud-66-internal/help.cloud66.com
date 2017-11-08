


### What is deployment history?
Whether working in a team or by yourself, it's always useful to have an overview of your deployment history. This history includes
information about who deployed, when they deployed, what code revision was deployed and how the deployment was triggered (web, [API](http://developers.cloud66.com) or [redeployment hook](https://help.cloud66.works/{{ include.product }}/deployment/redeployment-hook.html)). In addition to this, you can also revert
back to previous commits if need be.

Reverting to a previous commit will only affect your code - you might still need to restore a [database backup]({% if include.product == "skycap" %}https://help.cloud66.works/skycap/databases/database-backup.html{% else %}https://help.cloud66.works/{{ include.product }}/databases/database-backup.html{% endif %}). If you wish, you can [switch off your database migrations]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-management.html{% else %}https://help.cloud66.works/{{ include.product }}/databases/database-management.html{% endif %}), roll back your database and then roll back your code.
