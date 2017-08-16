<!-- layout:code post: database-backups_mysql -->


$ find /path/to/unarchived/folder '(' -name '*.sql' -o -name '*.sql.gz' ')' -type f -exec basename {} ';'    
