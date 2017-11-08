


### Note

To run database migrations during deployment, it is advisable to deploy in serial.

Although database migrations only occur on one server, depending on the changes, they could stop deployments on other servers from succeeding. Refer to our page on [controlling your database migrations]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-management.html{% else %}https://help.cloud66.works/{{ include.product }}/databases/database-management.html{% endif %}) for more information.
