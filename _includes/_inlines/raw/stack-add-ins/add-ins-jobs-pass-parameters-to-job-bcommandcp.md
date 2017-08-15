---
layout: code
---

job command: cp $1 ${2:-/tmp}
passing arguments in dashboard: "log*.txt" tmp/logs
passing arguments in toolbelt: --arg "log*.txt" -- arg tmp/logs
