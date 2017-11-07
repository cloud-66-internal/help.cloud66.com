<!--  usedin: [ _legacy_docker/Tutorials/1936-09-26-symlink-folders-v1.md, _maestro/Tutorials/1936-09-26-symlink-folders-v1.md, _node/tutorials/1936-09-26-symlink-folders-v1.md, _rails/Tutorials/1936-09-26-symlink-folders-v1.md] -->


## Symbolic link

Alternatively, you can use [deploy hooks](http://help.cloud66.com/deployment/deploy-hooks) to create the symbolic link. Also, you can use _$STACK_BASE_ for your stack base path (eg. _$STACK_BASE/shared/uploads_) for your deploy hook script.

To create the symbolic link, your deploy hook script could contain this:



{%include _inlines/Tutorials/common/1936-09-26-symlink-folders/code_1936-09-26-symlink-folders_symbolic-link-dirp-v1.md  product = include.product %}

The reason we are doing _rm -rf_ on the _$STACK_PATH/uploads_ directory is due to the way that the _ln_ command works. When you issue the _ln_ command,
it places a link to the source directory inside the target directory, so we have to remove the directory before creating the symbolic link.

The deploy hook would look like this:



{%include _inlines/Tutorials/common/1936-09-26-symlink-folders/code_1936-09-26-symlink-folders_symbolic-link-oduction-v1.md  product = include.product %}



