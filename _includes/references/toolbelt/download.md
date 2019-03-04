
## Download

Use this command to download a file from the remote server to your local computer.


### Usage

```
$ cx download [-s <stack>] [--server <server name>] [source file] [target directory]
```
If you don't specify a target directory, the file will be downloaded to your current local directory.


### Parameters

|		Parameter 		   |	Default		|   Description    |
|--|:--:| ----:|
|stack 					   |		—		|Name of the application|
|server name 	   | 	—		| Name of the server to access|
|source file	   |	—	| The path to the file on your server |
|target directory (optional)	   |	—	| Your local target path |
{:.table}


### Example

```
$ cx download -s "My Awesome App" --server web /tmp/file.txt /tmp/file.txt
```
