


## How can I use GlusterFS in my application?
Now that you have a share storage service provided by GlusterFS in your stack, you can use it in your application like a normal disk volume. By default, Cloud 66 will create and mount a shared volume on `/mnt/data-store` on every application server of your stack. 

To see how your shared file system works, you can SSH to one of you web servers and run the following commands:



{%include _inlines/AddIns/common/glusterfs/code_glusterfs_how-can-i-use-glusterfs-in-my-application-c-v1.md  product = include.product %}




Now SSH to another web server on your stack and you should be able to see `hello.txt` under `/mnt/data-store`.

