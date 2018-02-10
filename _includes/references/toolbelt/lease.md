## Temporary lease

Opens a port on your server firewall to temporarily allow access from a specified IP address.


### Usage

```
$ cx lease [-s <stack>] [-f <from IP>] [-t <time to open>] [-p <port>]
```




### Parameters

|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |		—		|Name of the stack|
|f (optional)	   | 	User IP address		| The source IP to allow connections from|
|t (optional)	 	   |	20 minutes	| Time to open for (max 240 minutes) |
|p (optional)	 	   |	22	| Port to open |
|e (optional)	 	   |	—	| Your stack environment |

### Example

```
$ cx lease -s "My Awesome App" -f 123.123.123.123 -t 30 -e production
```
For more fine grained access control, use the [Stack network settings]({% if include.product == "skycap" %}/maestro/tutorials/service-network-configuration.html{% else %}/{{ include.product }}/tutorials/service-network-configuration.html{% endif %}) page.

