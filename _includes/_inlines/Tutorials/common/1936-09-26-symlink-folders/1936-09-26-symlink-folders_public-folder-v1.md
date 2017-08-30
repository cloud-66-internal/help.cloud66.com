<!-- usedin: [ _legacy_docker/Tutorials/1936-09-26-symlink-folders-v1.md, _maestro/Tutorials/1936-09-26-symlink-folders-v1.md, _node/tutorials/1936-09-26-symlink-folders-v1.md, _rails/Tutorials/1936-09-26-symlink-folders-v1.md] -->


## Public folder

If it's acceptable to serve your files from your public directory, you can re-use
the public/system folder which is already auto-symlinked to shared/system on each deploy. The down-side of doing this is that it bypasses your application and your files get served directly by Nginx without security.

