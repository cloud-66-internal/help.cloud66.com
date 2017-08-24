<!-- usedin: [ _rails/Tutorials/1989-09-26-replace-sqlite.md] -->


## PostgreSQL

1.  Replace `adapter: sqlite` with `adapter: postgresql` in your config/database.yml file.
2.  Replace `gem 'sqlite*'` with `gem 'pg'` in your Gemfile.
3.  Run `bundle install`.
4.  Commit and check changes in.
5.  Rebuild your stack.

More information about [databases](http://help.cloud66.com/database-management/database-management) supported by Cloud 66.
