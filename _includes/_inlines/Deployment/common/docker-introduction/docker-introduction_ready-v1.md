<!-- usedin: [ _legacy_docker/deployment/docker-introduction-v1.md, _maestro/Deployment/docker-introduction-v1.md, _skycap/deployment/docker-introduction-v1.md] -->


### Ready?

  Are you ready to [build your first Docker stack](https://help.cloud66.works/general/introduction/cloud66-introduction.html)?

Cloud 66 Docker includes the following:
   {% if include.product == "skycap" %}- [Container life-cycle management](https://help.cloud66.works/maestro/stack-management/service-lifecycle-management.html){% else %}- [Container life-cycle management](https://help.cloud66.works/{{ include.product }}/stack-management/service-lifecycle-management.html){% endif %}
   - [BuildGrid](https://help.cloud66.works/skycap/deployment/buildgrid/)
   - [Networking layer and DNS](https://help.cloud66.works/{{ include.product }}/deployment/service-network-configuration.html)
   {% if include.product == "skycap" %}- [Storage layer](https://help.cloud66.works/maestro/stack-management/service-storage.html){% else %}- [Storage layer](https://help.cloud66.works/{{ include.product }}/stack-management/service-storage.html){% endif %}
   - [Docker scaling]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/scaling.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/scaling.html{% endif %})
Docker-based stacks enjoy the same benefits as other Cloud 66 stacks, including: 
   - [Deployed and managed databases]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-management.html{% else %}https://help.cloud66.works/{{ include.product }}/databases/database-management.html{% endif %})
   - Database [backups]({% if include.product == "skycap" %}https://help.cloud66.works/skycap/databases/database-backup.html{% else %}https://help.cloud66.works/{{ include.product }}/databases/database-backup.html{% endif %}), [verification](https://help.cloud66.works/rails/databases/backup-verifiers.html) and [replication]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-replication.html{% else %}https://help.cloud66.works/{{ include.product }}https://help.cloud66.works/{{ include.product }}/databases/database-replication.html{% endif %})
   - [Load balancing]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/load_balancing.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/load_balancing.html{% endif %})
   - [Firewall management and brute force protection for web and SSH]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %})
   - [Team and organisations](https://help.cloud66.works/general/teams/team-accounts.html)
   - Fast response 100% SLA DNS layer [failover groups]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/failover-groups/failover-groups.html{% else %}https://help.cloud66.works/{{ include.product }}/failover-groups/failover-groups.html{% endif %}) for quick traffic switch overs
   - [Server vital sign metrics](https://help.cloud66.works/{{ include.product }}/stack-management/server-monitoring.html)
   - [Intuitive UI](https://app.cloud66.com/dashboard)
   - [API](http://developers.cloud66.com) and [command line](https://help.cloud66.works/{{ include.product }}/toolbelt/introduction.html)
