---
layout: code
---

worker: rake resque:work QUEUE=*
scheduler: rake resque:scheduler
