---
layout: code
post: 2013-01-20-whenever_target-all-servers.md
---


env :PATH, ENV['PATH']

every 10.minutes do
  command "a&#95;dummy&#95;command"
end
every 45.minutes do
  command "a&#95;dummy&#95;command"
end
