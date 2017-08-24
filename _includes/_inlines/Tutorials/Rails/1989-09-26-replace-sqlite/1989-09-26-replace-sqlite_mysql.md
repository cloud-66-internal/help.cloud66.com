<!-- usedin: [ _rails/Tutorials/1989-09-26-replace-sqlite.md] -->


## MySQL

1.  Replace `adapter: sqlite` with `adapter: mysql2` in your config/database.yml file.
2.  Replace `gem 'sqlite*'` with `gem 'mysql2'` in your Gemfile.
3.  Run `bundle install`.
4.  Commit and check changes in.
5.  Rebuild your stack.

