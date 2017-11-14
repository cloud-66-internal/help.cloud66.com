
## Environment variable setup

These commands allow you to list and set environment variables on your stack.


## List environment variables


### Usage

```
$ cx env-vars list [-s <stack>] [--history] [environment_variables] 
```


### Parameters

|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		| Name of the stack|
|history   				   | 	false		| Show the history of changed variables with the date of the change to the new value |
|environment variables (optional)| 	—		| List of multiple environment variables as separate parameters |

### Example

```
$ cx env-vars list -s My_Awesome_App
```


## Set environment variables


### Usage

```
$ cx env-vars set [-s <stack>] <setting>=<value>
```


### Parameters

|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		| Name of the stack|
|setting   				   | 	—			| Name of environment variable |
|value					   | 	—			| Value for environment variable |

### Example

```
$ cx env-vars set My_Awesome_App FIRST_VAR=123
```
