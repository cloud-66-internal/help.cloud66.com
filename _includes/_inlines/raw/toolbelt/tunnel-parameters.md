### Parameters

At least one of the optional server parameters are necessary in order to identify which server to run the command on.

Also, you need to specify at least the `remote` port. If `local` is missing, `remote + 1` will be used as `local`. For example, `--remote 3306` without `local` will use `3307` as `local`.



    

        

            
Parameter

            
Default

            
Description

        

    

    

        

            
_stack_

            
&mdash;

            
Name of the stack

        

        

            
_server_

            
&mdash;

            
Specify a server

        

        

            
_server name_ (optional)

            
&mdash;

            
Name of the server to access

        

        

            
_server ip_ (optional)

            
&mdash;

            
IP of the server to access

        

        

            
_server role_ (optional)

            
&mdash;

            
Role of the server to access (eg. web)

        

        

            
_remote_

            
&mdash;

            
Remote port for the tunnel

        

        

            
_local_ (optional)

            
&mdash;

            
Local port for the tunnel. If not specified, remote + 1 is used.

        

    




