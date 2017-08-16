<!-- post: -->


### Config variables



	

	

	

	





	

		
Variable Name

		
Type

		
Description

	






	

		
haproxy_username

		
string

		
Your HAProxy username

	

	

		
haproxy_password

		
string

		
Your HAProxy password

	

	

		
httpchk

		
string

		
Default value is "HEAD / HTTP/1.0" unless specified in your manifest file

	

	

		
balance

		
array

		
Default value is "roundrobin" unless specified in your manifest file

	


	

		
errorfile_lines

		
array

		
Default is empty array unless specified in your manifest file

	

	

		
servers

		
array

		
Array of "server" objects that are to be load balanced (see below)

	

	

		
server.ext_ipv4

		
string

		
External IPv4 address (server is one of the items in the "servers" array above)

	

	

		
server.int_ipv4

		
string

		
Internal IPv4 address (server is one of the items in the "servers" array above)

	







