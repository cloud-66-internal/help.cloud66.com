<!-- post: containers_example -->


$ cx containers exec -s mystack 2844142cbf /bin/bash
$ cx containers exec -s mystack web.pro-active-quick-witted-dinosaur /bin/bash
$ cx containers exec -s mystack --docker-flags="--interactive=true --tty=true --detach=false" 2844142cbf /bin/bash
$ cx containers exec -s mystack --docker-flags="--interactive=false --tty=false --detach=true" 2844142cbf /tmp/my_background_command
