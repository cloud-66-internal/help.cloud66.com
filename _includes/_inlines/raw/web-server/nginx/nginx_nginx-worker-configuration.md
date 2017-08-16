---
post: 
---

## Nginx worker configuration

The following table specifies the number of workers configured for your Nginx based on the server resources (CPU cores) on each cloud.



  

    

      

        Cloud provider  

      

      

        Instance type
      

      

        Number of Workers
      

    

  

  

    

      

        **AWS** 
-

      

      


      


    

    

      


      

        t1.micro
      

      

        1
      

    

    

      


      

        m1.small
      

      

        1
      

    

    

      


      

        m1.medium
      

      

        2
      

    

    

      


      

        m1.large
      

      

        2
      

    

    

      


      

        m1.xlarge
      

      

        4
      

    

    

      


      

        m3.medium
      

      

        1
      

    

    

      


      

        m3.large
      

      

        2
      

    

    

      


      

        m3.xlarge
      

      

        4
      

    

    

      


      

        m3.2xlarge
      

      

        8
      

    

    

      


      

        m2.xlarge
      

      

        2
      

    

    

      


      

        m2.2xlarge
      

      

        4
      

    

    

      


      

        m2.4xlarge
      

      

        8
      

    

    

      


      

        c1.medium
      

      

        2
      

    

    

      


      

        c1.xlarge
      

      

        8
      

    

    

      


      

        c3.large
      

      

        2
      

    

    

      


      

        c3.xlarge
      

      

        4
      

    

    

      


      

        c3.2xlarge
      

      

        8
      

    

    

      


      

        c3.4xlarge
      

      

        16
      

    

    

      


      

        c3.8xlarge
      

      

        32
      

    

    

      


      

        cc2.8xlarge
      

      

        88
      

    

    

      


      

        i2.xlarge
      

      

        4
      

    

    

      


      

        i2.2xlarge
      

      

        8
      

    

    

      


      

        i2.4xlarge
      

      

        16
      

    

    

      


      

        i2.8xlarge
      

      

        32
      

    

    

      


      

        cr1.8xlarge
      

      

        88
      

    

    

      


      

        hi1.4xlarge
      

      

        35
      

    

    

      


      

        hs1.8xlarge
      

      

        35
      

    

    

      


      

        cg1.4xlarge
      

      

        33
      

    

    

      


      

        g2.2xlarge
      

      

        8
      

    

  

  

    

      

        **DigitalOcean** 
-

      

      


      


    

    

      


      

        512MB - 1 CPU
      

      

        1
      

    

    

      


      

        1GB - 1 CPU
      

      

        1
      

    

    

      


      

        2GB - 2 CPU
      

      

        2
      

    

    

      


      

        4GB - 2 CPU
      

      

        2
      

    

    

      


      

        8GB - 4 CPU
      

      

        4
      

    

    

      


      

        16GB - 8 CPU
      

      

        8
      

    

    

      


      

        32GB - 12 CPU
      

      

        12
      

    

    

      


      

        48GB - 16 CPU
      

      

        16
      

    

    

      


      

        64GB - 20 CPU
      

      

        20
      

    

    

      


      

        96GB - 24 CPU
      

      

        24
      

    

  

  

    

      

        **GCE** 
-

      

      


      


    

    

      


      

        n1-standard-1
      

      

        1
      

    

    

      


      

        n1-standard-2
      

      

        2
      

    

    

      


      

        n1-standard-4
      

      

        4
      

    

    

      


      

        n1-standard-8
      

      

        8
      

    

    

      


      

        n1-standard-16
      

      

        16
      

    

    

      


      

        n1-highmem-2
      

      

        2
      

    

    

      


      

        n1-highmem-4
      

      

        4
      

    

    

      


      

        n1-highmem-8
      

      

        8
      

    

    

      


      

        n1-highmem-16
      

      

        16
      

    

    

      


      

        n1-highcpu-2
      

      

        2
      

    

    

      


      

        n1-highcpu-4
      

      

        4
      

    

    

      


      

        n1-highcpu-8
      

      

        8
      

    

    

      


      

        n1-highcpu-16
      

      

        16
      

    

    

      


      

        f1-micro
      

      

        1
      

    

    

      


      

        g1-small
      

      

        1
      

    

  

  

    

      

        **Linode** 
-

      

      


      


    

    

      


      

        Linode 1GB
      

      

        1
      

    

    

      


      

        Linode 2GB
      

      

        2
      

    

    

      


      

        Linode 4GB
      

      

        4
      

    

    

      


      

        Linode 8GB
      

      

        6
      

    

    

      


      

        Linode 16GB
      

      

        8
      

    

    

      


      

        Linode 32GB
      

      

        12
      

    

    

      


      

        Linode 48GB
      

      

        16
      

    

    

      


      

        Linode 64GB
      

      

        20
      

    

    

      


      

        Linode 96GB
      

      

        20
      

    

  

  

    

      

        **Microsoft Azure** 
-

      

      


      


    

    

      


      

        ExtraSmall
      

      

        1
      

    

    

      


      

        Small
      

      

        1
      

    

    

      


      

        Medium
      

      

        2
      

    

    

      


      

        Large
      

      

        4
      

    

    

      


      

        ExtraLarge
      

      

        8
      

    

    

      


      

        A5
      

      

        2
      

    

    

      


      

        A6
      

      

        4
      

    

    

      


      

        A7
      

      

        8
      

    

    

      


      

        A8
      

      

        8
      

    

    

      


      

        A9
      

      

        16
      

    

    

      


      

        STANDARD_D1
      

      

        1
      

    

    

      


      

        STANDARD_D2
      

      

        2
      

    

    

      


      

        STANDARD_D3
      

      

        4
      

    

    

      


      

        STANDARD_D4
      

      

        8
      

    

    

      


      

        STANDARD_D11
      

      

        2
      

    

    

      


      

        STANDARD_D12
      

      

        4
      

    

    

      


      

        STANDARD_D13
      

      

        8
      

    

    

      


      

        STANDARD_D14
      

      

        16
      

    

  

  

    

      

        **Rackspace** 
-

      

      


      


    

    

      


      

        512MB Standard Instance
      

      

        1
      

    

    

      


      

        1GB Standard Instance
      

      

        1
      

    

    

      


      

        2GB Standard Instance
      

      

        2
      

    

    

      


      

        4GB Standard Instance
      

      

        2
      

    

    

      


      

        8GB Standard Instance
      

      

        4
      

    

    

      


      

        15GB Standard Instance
      

      

        6
      

    

    

      


      

        30GB Standard Instance
      

      

        8
      

    

    

      


      

        3.75 GB Compute v1
      

      

        2
      

    

    

      


      

        7.5 GB Compute v1
      

      

        4
      

    

    

      


      

        15 GB Compute v1
      

      

        8
      

    

    

      


      

        30 GB Compute v1
      

      

        16
      

    

    

      


      

        60 GB Compute v1
      

      

        32
      

    

    

      


      

        1 GB General Purpose v1
      

      

        1
      

    

    

      


      

        2 GB General Purpose v1
      

      

        2
      

    

    

      


      

        4 GB General Purpose v1
      

      

        4
      

    

    

      


      

        8 GB General Purpose v1
      

      

        8
      

    

    

      


      

        15 GB I/O v1
      

      

        4
      

    

    

      


      

        30 GB I/O v1
      

      

        8
      

    

    

      


      

        60 GB I/O v1
      

      

        16
      

    

    

      


      

        90 GB I/O v1
      

      

        24
      

    

    

      


      

        120 GB I/O v1
      

      

        32
      

    

    

      


      

        15 GB Memory v1
      

      

        2
      

    

    

      


      

        30 GB Memory v1
      

      

        4
      

    

    

      


      

        60 GB Memory v1
      

      

        8
      

    

    

      


      

        120 GB Memory v1
      

      

        16
      

    

    

      


      

        240 GB Memory v1
      

      

        32
      

    

    

      


      

        1 GB Performance
      

      

        2
      

    

    

      


      

        2 GB Performance
      

      

        2
      

    

    

      


      

        4 GB Performance
      

      

        4
      

    

    

      


      

        8 GB Performance
      

      

        8
      

    

    

      


      

        15 GB Performance
      

      

        4
      

    

    

      


      

        30 GB Performance
      

      

        8
      

    

    

      


      

        60 GB Performance
      

      

        16
      

    

    

      


      

        90 GB Performance
      

      

        24
      

    

    

      


      

        120 GB Performance
      

      

        32
      

    

  

  

    

      

        **CloudA** 
-

      

      


      


    

    

      


      

        512 MB
      

      

        1
      

    

    

      


      

        1 GB
      

      

        1
      

    

    

      


      

        2 GB
      

      

        1
      

    

    

      


      

        4 GB
      

      

        2
      

    

    

      


      

        8 GB
      

      

        4
      

    

    

      


      

        16 GB
      

      

        6
      

    

    

      


      

        32 GB
      

      

        8
      

    

    

      


      

        8 GB - HM
      

      

        2
      

    

    

      


      

        16 GB - HM
      

      

        4
      

    

    

      


      

        32 GB - HM
      

      

        6
      

    

    

      


      

        4 GB - HC
      

      

        4
      

    

    

      


      

        8 GB - HC
      

      

        8
      

    

    

      


      

        16 GB - HC
      

      

        12
      

    

  




