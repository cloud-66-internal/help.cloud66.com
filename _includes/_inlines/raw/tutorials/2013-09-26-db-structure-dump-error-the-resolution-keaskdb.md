---
layout: code
---

Rake::Task["db:structure:dump"].clear if ENV['STACK_PATH']
