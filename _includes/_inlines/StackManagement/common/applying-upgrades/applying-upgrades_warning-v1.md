<!-- post: -->


### Warning!

Upgrading in-place involves downtime as the docker engine and local files are all upgraded. To have zero down-time you'd have to clone your stack and use [Failover groups]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/failover-groups/failover-groups.html{% else %}https://help.cloud66.works/{{ include.product }}/failover-groups/failover-groups.html{% endif %}) to switch to the new one.




