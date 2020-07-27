## List environment variables

This commands allows you to list environment variables for your application.

### Parameters

|		Parameter 		   |	Default		|   Description    |
|--|:--:| -:|
|stack 					   |		—		| Name of the application|
|setting   				   | 	—			| Name of environment variable |
|value					   | 	—			| Value for environment variable |
{:.table}

### Usage

```shell
$ cx env-vars list [-s <stack>] [--history] [environment_variables] 
```

## Set environment variables

This command allows you to set (update) environment variables for your application.

### Parameters


|		Parameter 		   |	Default		|   Description    |
|--|:--:| -:|
|stack 					   |		—		| Name of the application|
|setting   				   | 	—			| Name of environment variable |
|value					   | 	—			| Value for environment variable |
{:.table}

### Usage

```shell
$ cx env-vars set My_Awesome_App FIRST_VAR=123
```


## Download environment variables

This command downloads your env vars and writes them to a file. This file can either use the same format as web download (`dotenv`) or `json`. 

You can specify which kinds of variables to download using `environment-type` with the following variables: `all`, which will return all environment variables; `user`, which will return only the user-created environment variables; `generated`, which will return Cloud 66 created environment variables; and `locked`, which will return non-editable Cloud 66 created environment variables.

### Parameters

Parameter|Default |Description
:-----|:-----|:-----
stack|-|Full or partial  name of the application
file-type|-|Format of the file containing the list of environment variables (`dotenv` or `json`)
file|-|The filename of the file being created or updated by the download
environment|-|Full or partial environment name
environment-type|-|Specify the type of variables. Accepts multiple options. (`all`, `user`, `generated`, `locked`)
{:.table}


### Usage

```shell
$ cx env-vars download -s mystack --file environment_variables_dotenv --file-type dotenv

$ cx env-vars download -s mystack --environment user --file environment_variables_json --file-type json
```

## Upload environment variables

This command sets multiple environment variables for an application based on a file in either  `dotenv` or `json` format. 

You must specify an `apply-strategy` for your upload process. They can either be applied `immediately` or on the next `deployment`. 

#### Warning
<div class="notice notice-warning"><p>
Applying environment variable changes "immediately" will result in all your environment variables being sent to your servers immediately, and running processes being restarted.</p></div>

#### Parameters

Parameter|Default |Description
:-----|:-----|:-----
stack|-|Full or partial  name of the application
file-type|-|Format of the file containing the list of environment variables (dotenv or json)
file|-|The filename of the file being uploaded
apply-strategy|-|When uploaded changes will be applied (immediately , deployment)
environment|-|Full or partial environment name
delete|-|Delete any user-generated variables that don't appear in file
{:.table}

### Usage

```bash
$ cx env-vars upload -s mystack --file environment_variables_dotenv --file-type dotenv --apply-strategy deployment --delete

$ cx env-vars upload -s mystack --file environment_variables_json --file-type json --apply-strategy immediately
```

