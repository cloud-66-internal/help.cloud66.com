---
layout: code
---

env :PATH, ENV['PATH']

every 10.minutes, :roles => [:redis] do
  command "a&#95;dummy&#95;command"
end
