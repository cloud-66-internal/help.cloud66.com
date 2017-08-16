<!-- layout:code post: 2013-01-20-whenever_target-your-web-server(s) -->


env :PATH, ENV['PATH']

every 10.minutes, :roles => [:app] do
  rake "test:example"
end
