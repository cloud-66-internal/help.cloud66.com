<!-- post: -->


### Public folder

If it's acceptable to serve your files from your public directory, you can re-use
the public/system folder which is already auto-symlinked to shared/system on each deploy. The down-side of doing this is that it bypasses your application
and your files get served directly by Nginx without security.

