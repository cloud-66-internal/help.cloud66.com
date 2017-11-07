<!-- usedin: [ _legacy_docker/stack-management/ssh-v1.md, _maestro/stack-management/ssh-v1.md, _node/stack-management/ssh-v1.md, _rails/stack-management/ssh-v1.md] -->


## Prompted for Password

If you are being prompted for the password using CX, it means either your user doesn't exist on the 

Asking for password means either your Linux user doesn't exist on the server, or the key you are using doesn't match the one on the server -probably because of an incomplete key on the server. 

In order to fix any of the two issues above you can ask your team leader - Cannot see this happens to account owner - to remove your user permission from that stack and re-add your user again, so Cloud66 will go through the process of adding your username to the stack's servers again which I believe would fix this issue!
