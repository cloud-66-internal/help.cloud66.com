---
post: 
---

## Running processes with unique identifiers

To assign a unique identifier to your process (for example with Sidekiq), use the 
&#123;&#123;UNIQUE_INT&#125;&#125;
 notation. For example, your process could look as follows:



{%include _inlines/proc-files/code_proc-files_running-processes-with-unique-identifiers-r.md %}



This integer should be unique across processes, so that multiple processes won't clash, but may not be unique across servers.

