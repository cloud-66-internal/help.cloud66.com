
## Redeploy your application

This is an alias for the `stacks redeploy` command, which triggers the deployment of a application from the command line, just like clicking on _redeploy_ in the UI.


### Usage

```
$ cx redeploy [-s <stack>] [-y] [--git-ref <git_ref>] [--service <service>] [--service <service>] [--service <service>]
```




### Parameters

|		Parameter 		   |   Description    |
|--| ----:|
|stack 					   |		Name of your application|
|e  (optional)   | 	Your application environment|
|y (optional)	   |Automatically answer yes to any prompts|
|git-ref (optional, non-Docker)  |  Redeploy the specific git reference (branch, tag or hash). Non-Docker stacks only. |
|service (optional, repeatable, Docker only)	   |	Will deploy the specified services from your application only. Each service can have an optional colon-separated reference which is image tag or git reference for image based services, or for git based services. |
|listen (optional)	   |	Will follow the deployment and log progress output  |
{:.table}


### Examples

```
$ cx redeploy -s "My Awesome App" -e production
```

```
$ cx redeploy -s "My Awesome App" -e production -y --git-ref my_git_ref_value
```

```
$ cx redeploy -s "My Awesome Docker App" --service web:8c7f3d393162f88b8b9493f6babec574b03ca957 --service api:latest
```

Deploying a application that is already being deployed will enqueue your redeploy command and will run it immediately after the current deployment is finished.

