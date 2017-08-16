<!-- layout:code post: 2013-01-20-whenever_target-your-database-server -->


env :PATH, ENV['PATH']

every 10.minutes, :roles => [:db] do
  command "a&#95;dummy&#95;command"
end
