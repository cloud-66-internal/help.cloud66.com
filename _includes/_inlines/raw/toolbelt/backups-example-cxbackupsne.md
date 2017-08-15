---
layout: code
---

$ cx backups new -s mystack --dbtypes=postgresql --frequency="0 */1 * * *" --keep 50 --gzip=true exclude-tables=my_log_table --run-on-replica=false
