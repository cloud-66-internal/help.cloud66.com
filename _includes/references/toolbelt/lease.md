## Temporary lease

Opens a port on your server firewall to temporarily allow access from a specified IP address.


### Usage

```shell
$ cx lease [-s <stack>] [-f <from IP>] [-t <time to open>] [-p <port>]
```




### Parameters

|		Parameter 		   |	Default		|   Description    |
|--|:--:| ----:|
|stack 					   |		—		|Name of the application|
|f (optional)	   | 	User IP address		| The source IP to allow connections from|
|t (optional)	 	   |	20 minutes	| Time to open for (max 240 minutes) |
|p (optional)	 	   |	22	| Port to open |
|e (optional)	 	   |	—	| Your application environment |
{:.table}


### Example

```shell
$ cx lease -s "My Awesome App" -f 123.123.123.123 -t 30 -e production
```
For more fine grained access control, use the [Application network settings]({% if page.collection == "maestro" or page.collection == "skycap" %}/maestro/how-to-guides/build-and-config/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}) page.

