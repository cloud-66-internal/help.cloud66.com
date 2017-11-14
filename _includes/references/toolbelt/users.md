
## List command

This command shows a list of all users you have access to. This is a list of all users within the organization you specify and have enough access rights to manage users for.


### Usage

```
$ cx --org <organization_name> users list
```


### Parameters
|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|organization_name		   |		—		| Name of the organization -you can find it by using cx info- |

### Examples

```
$ cx --org My_Awesome_org users list
```
This will result in a simple list of users shows as below:

```
Id  Email
1   jim@gmail.com
2   jack@gmail.com
```


## Show command

This command shows details about a single user.


### Usage

```
$ cx --org <organization_name> users show <username> [--json <json_file_path>]
```


### Parameters
|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|organization_name		   |		—		| Name of the organization -you can find it by using cx info- |
|json_file_path  		   | 	—			| File path to the saved json's file |

### Examples

```
$ cx --org My_Awesome_org users show jim@gmail.com
$ cx --org My_Awesome_org users show jim@gmail.com --json /tmp/jim_profile.json
```
You can change the json file to suite any changes you require (or use it as it is) and apply it to other users in your account using the `apply-profile` command.

### Note

You can download the same Access Profile from the web dashboard, under each user's access rights page under the Teams left hand menu (click on the Accounts on top right to get there).



## Apply Profile command

Apply Profile allows you to apply a user's Access Profile to another one. To use this command you need to have an Access Profile as a `json` file. This can be generated using the `users show` command with the `json` option. Once you have the file you can modify it to make any changes you require in the Access Profile.


### Usage

```
$ cx --org <organization_name> users apply-profile <username> --json <json_file_path> [--override]
```


### Parameters
|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|organization_name		   |		—		| Name of the organization -you can find it by using cx info- |
|json_file_path  		   | 	—			| File path to the saved json's file |
|override	   			   | 	—			| Will override the access rights instead of append |

### Examples

```
$ cx --org My_Awesome_org users apply-profile jack@gmail.com --json /tmp/jim_profile.json
$ cx --org My_Awesome_org users apply-profile jack@gmail.com --json /tmp/jim_profile.json --override
```
These will apply Jim's profile to Jack's; first one will append the access rights and the second one will overwrite them.

## A note on overwriting Access Profiles

Any missing attribute for the `json` Access Profile will be left unchanged even if the `override` is `used`.
  Also, `overrirde` doesn't have any effects on the contents of the `account_profile` section.

