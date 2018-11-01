## Job management

These commands allow you to list jobs and run a job immediately.

## List jobs

This command lists all jobs on a stack or a server.


### Usage

```
$ cx jobs list [-s <stack>] --server <server name>|<server ip>|<server role> --service <service name>
```


### Parameters

|		Parameter 		   |	Default		|   Description    |
|--|:--:| -:|
|stack 					   |		—		|Name of the stack | 
|server name 	 		   | 	—		    | Name of the job to run|
|arg (optional)	 		   |	—			| Parameters you would like to pass job ( [more info]() ) |
{:.table}


### Examples

```
$ cx job run -s "My Awesome App" my_job
$ cx job run -s "My Awesome App" --arg "arg1" --arg "arg2" my_job
```
