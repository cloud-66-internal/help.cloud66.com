---
post: 
---

## Service configurations

Below is a table of the available configurations for a given service with a brief description. For more detailed information about an option, click the link provided.





    
**Option**

    
**Description**





    
[build_command](/building-your-stack/building-your-docker-service#build_command)

    
Specifies the command you would like to run during stack build.





    
[build_root](/building-your-stack/building-your-docker-service#build_root)

    
Specifies the directory of your repository in which you wish to run your Docker build.





    
[command](/building-your-stack/building-your-docker-service#command)

    
Specifies the command used to start your container.





    
[constraints](/managing-your-stack/scaling#services)

    
Specifies [container amount](/managing-your-stack/scaling#services) or [resource](/managing-your-stack/service-resources) constraints for a service across the cluster.





    
[deploy_command](/building-your-stack/building-your-docker-service#deploy_command)

    
Specifies the command you would like to run during stack deploy (runs once per service).





    
[dns_behaviour](/network/service-network-settings#dns_behaviour)

    
Specifies the dns behaviour for this service. One of the values: _versioned_, _non-versioned_. Default value is _versioned_





    
[dockerfile_path](/building-your-stack/building-your-docker-service#dockerfile_path)

    
Specifies the location of the Dockerfile to be used for building this service, eg. _docker/Dockerfile_.





    
[git_url](/building-your-stack/building-your-docker-service#git_url)

    
The Git repository URL your Docker image will be built with.





    
[git_branch](/building-your-stack/building-your-docker-service#git-branch)

    
The Git repository branch your Docker image will be based on.





    
[use_habitus](/building-your-stack/building-your-docker-service#use-habitus)

    
Use [Habitus](http://www.habitus.io) build workflow





    
[use_habitus_step](/building-your-stack/building-your-docker-service#use-habitus)

    
The [Habitus](http://www.habitus.io) step to use for the build.






    
[health](/managing-your-stack/service-life-cycle-management#health)

    
One of the values: _default_, _none_ or a hash containing at least one of _type_, _endpoint_, _protocol_, _accept_ or _timeout_.





    
[image](/building-your-stack/building-your-docker-service#image)

    
The image you would typically run `docker pull` from.





    
[load_balancing](/network/service-network-settings#load_balancing)

    
Specifies the load balancing method for this service. Accepted values are: _roundrobin_, _sticky_, _closest_. Default value is _roundrobin_





    
[log_folder](/managing-your-stack/logging#docker)

    
Folder your services logs to, mounted to `/var/log/containers/service` on the host filesystem.





    
[ports](/network/service-network-settings#ports)

    
The ports that are running within the container, as well as their corresponding external ports.





    
privileged _(default: false)_

    
Boolean value to indicate whether the container should be [run with extended privileges](https://docs.docker.com/reference/run/#runtime-privilege-linux-capabilities-and-lxc-configuration).





    
[pre_start_signal](/managing-your-stack/service-life-cycle-management#pre_start)

    
This is a signal that is sent to the existing running containers of the service before the new service containers are started during deployment.





    
[pre_stop_sequence](/managing-your-stack/service-life-cycle-management#pre_stop)

    
This is a stop sequence that is executed on your running containers before they are shut down.





    
[requires](/managing-your-stack/service-life-cycle-management#requires)

    
Array of other defined service names that should be started before this service during build and deployment.





    
[restart_on_deploy](/managing-your-stack/service-life-cycle-management#restart) _(default: true)_

    
Boolean value to indicate whether the containers of this service should be restarted during deployment.






    
[stop_grace](/managing-your-stack/service-life-cycle-management#stop_grace)

    
Duration between the Docker `TERM` and `KILL` signals when Docker stop is run and a container is stopped.





    
[traffic_matches](/network/service-network-settings#traffic_matches)

    
The automatically configured traffic names in your Nginx config that will route traffic to these containers based on request DNS name. Allows microservices on the same port routes by subdomain for instance.





    
[volumes](/managing-your-stack/service-storage)

    
The volumes that are mounted from your host into your container. 
**Note:**it must be absolute path.






    
work_dir

    
Specifies the [working directory](https://docs.docker.com/reference/builder/#workdir) in your image for any command to be run.







* * *

