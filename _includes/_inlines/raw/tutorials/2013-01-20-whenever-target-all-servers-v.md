---
layout: code
---

env :PATH, ENV['PATH']

every 10.minutes do
  command "a&#95;dummy&#95;command"
end
every 45.minutes do
  command "a&#95;dummy&#95;command"
end
