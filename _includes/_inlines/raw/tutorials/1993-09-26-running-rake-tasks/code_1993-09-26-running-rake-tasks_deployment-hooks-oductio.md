<!-- layout:code post: 1993-09-26-running-rake-tasks_deployment-hooks -->


production:
  after&#95;rails:
    - source: /.cloud66/scripts/rake&#95;task.sh
      destination: /tmp/rake&#95;task.sh
      target: rails
      execute: true
      run&#95;on: all&#95;servers
      apply&#95;during: all
      sudo: true
