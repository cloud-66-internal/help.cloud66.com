<!-- layout:code post: 1950-09-26-implementing-faye_1.-rails&95;root -->


production:
    before&#95;rails:
      - source: /.cloud66/files/add&#95;thin&#95;and&#95;faye.sh
        destination: ~/add&#95;thin&#95;and&#95;faye.sh
        target: rails
        execute: true
        sudo: true
        apply&#95;during: build&#95;only
        run&#95;on: all&#95;servers
