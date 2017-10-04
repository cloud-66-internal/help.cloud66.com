<!-- usedin: [ _legacy_docker/AddIns/redis-v1.md, _maestro/AddIns/redis-v1.md, _node/addins/redis-v1.md, _rails/AddIns/redis-v1.md] -->


## Remove Redis from your stack

At the current state, there is only one way of removing components/servers and that is removing their servers from the stack. Based on this, in order to be able to remove Redis from your stack, Redis needs to be installed on its own server i.e. not on a <u>server shared</u> with another component, otherwise you will need to [migrate your stack](http://community.cloud66.com/article/264-how-to-migrate-your-stack) and set the new one up without Redis.