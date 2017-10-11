<!-- usedin: [ _legacy_docker/AddIns/add-ins-jobs-v1.md, _maestro/AddIns/add-ins-jobs-v1.md, _node/addins/add-ins-jobs-v1.md, _rails/AddIns/add-ins-jobs-v1.md] -->


## Variety of jobs

There are a variety of jobs for your stack.

{% if include.product == "rails" %}
*   [Shell command](https://help.cloud66.works/{{ include.product }}/addins/jobs/shell.html)
*   [Rake task](https://help.cloud66.works/{{ include.product }}/addins/jobs/rake-task.html)
{% else %}
*   [Docker server task](https://help.cloud66.works/{{ include.product }}/addins/jobs/docker-server-task.html)
*   [Docker service task](https://help.cloud66.works/{{ include.product }}/addins/jobs/docker-service-task.html)
{% endif %}
