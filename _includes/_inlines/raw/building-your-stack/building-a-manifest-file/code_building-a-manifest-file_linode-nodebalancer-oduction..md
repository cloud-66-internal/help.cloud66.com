<!-- post: building-a-manifest-file_linode-nodebalancer -->


production:
    load_balancer:
        configuration:
            httpchk: /
            balance: leastconn
