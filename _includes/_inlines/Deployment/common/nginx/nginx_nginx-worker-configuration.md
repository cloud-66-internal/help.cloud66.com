<!-- usedin: [ _legacy_docker/deployment] - post: -->


## Nginx worker configuration

The following table specifies the number of workers configured for your Nginx based on the server resources (CPU cores) on each cloud.



  <table id="fields" class="table table-bordered table-striped table-small fields"> 
     <thead valign="top"> 
      <tr> 
       <th> Cloud provider<br> </th> 
       <th> Instance type </th> 
       <th> Number of Workers </th> 
      </tr> 
     </thead> 
     <tbody> 
      <tr class="header"> 
       <td width="25%"> <strong>AWS</strong> <span>-</span> </td> 
       <td width="40%"></td> 
       <td width="70%"></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td width="40%"> t1.micro </td> 
       <td width="70%"> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m1.small </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m1.medium </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m1.large </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m1.xlarge </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m3.medium </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m3.large </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m3.xlarge </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m3.2xlarge </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m2.xlarge </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m2.2xlarge </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> m2.4xlarge </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> c1.medium </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> c1.xlarge </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> c3.large </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> c3.xlarge </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> c3.2xlarge </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> c3.4xlarge </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> c3.8xlarge </td> 
       <td> 32 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> cc2.8xlarge </td> 
       <td> 88 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> i2.xlarge </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> i2.2xlarge </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> i2.4xlarge </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> i2.8xlarge </td> 
       <td> 32 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> cr1.8xlarge </td> 
       <td> 88 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> hi1.4xlarge </td> 
       <td> 35 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> hs1.8xlarge </td> 
       <td> 35 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> cg1.4xlarge </td> 
       <td> 33 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> g2.2xlarge </td> 
       <td> 8 </td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td width="25%"> <strong>DigitalOcean</strong> <span>-</span> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td width="40%"> 512MB - 1 CPU </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 1GB - 1 CPU </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 2GB - 2 CPU </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 4GB - 2 CPU </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 8GB - 4 CPU </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 16GB - 8 CPU </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 32GB - 12 CPU </td> 
       <td> 12 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 48GB - 16 CPU </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 64GB - 20 CPU </td> 
       <td> 20 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 96GB - 24 CPU </td> 
       <td> 24 </td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td width="25%"> <strong>GCE</strong> <span>-</span> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td width="40%"> n1-standard-1 </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-standard-2 </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-standard-4 </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-standard-8 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-standard-16 </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-highmem-2 </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-highmem-4 </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-highmem-8 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-highmem-16 </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-highcpu-2 </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-highcpu-4 </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-highcpu-8 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> n1-highcpu-16 </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> f1-micro </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> g1-small </td> 
       <td> 1 </td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td width="25%"> <strong>Linode</strong> <span>-</span> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td width="40%"> Linode 1GB </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Linode 2GB </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Linode 4GB </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Linode 8GB </td> 
       <td> 6 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Linode 16GB </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Linode 32GB </td> 
       <td> 12 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Linode 48GB </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Linode 64GB </td> 
       <td> 20 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Linode 96GB </td> 
       <td> 20 </td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td width="25%"> <strong>Microsoft Azure</strong> <span>-</span> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td width="40%"> ExtraSmall </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Small </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Medium </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> Large </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> ExtraLarge </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> A5 </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> A6 </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> A7 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> A8 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> A9 </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> STANDARD_D1 </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> STANDARD_D2 </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> STANDARD_D3 </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> STANDARD_D4 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> STANDARD_D11 </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> STANDARD_D12 </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> STANDARD_D13 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> STANDARD_D14 </td> 
       <td> 16 </td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td width="25%"> <strong>Rackspace</strong> <span>-</span> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td width="40%"> 512MB Standard Instance </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 1GB Standard Instance </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 2GB Standard Instance </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 4GB Standard Instance </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 8GB Standard Instance </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 15GB Standard Instance </td> 
       <td> 6 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 30GB Standard Instance </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 3.75 GB Compute v1 </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 7.5 GB Compute v1 </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 15 GB Compute v1 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 30 GB Compute v1 </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 60 GB Compute v1 </td> 
       <td> 32 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 1 GB General Purpose v1 </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 2 GB General Purpose v1 </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 4 GB General Purpose v1 </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 8 GB General Purpose v1 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 15 GB I/O v1 </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 30 GB I/O v1 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 60 GB I/O v1 </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 90 GB I/O v1 </td> 
       <td> 24 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 120 GB I/O v1 </td> 
       <td> 32 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 15 GB Memory v1 </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 30 GB Memory v1 </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 60 GB Memory v1 </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 120 GB Memory v1 </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 240 GB Memory v1 </td> 
       <td> 32 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 1 GB Performance </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 2 GB Performance </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 4 GB Performance </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 8 GB Performance </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 15 GB Performance </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 30 GB Performance </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 60 GB Performance </td> 
       <td> 16 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 90 GB Performance </td> 
       <td> 24 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 120 GB Performance </td> 
       <td> 32 </td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td width="25%"> <strong>CloudA</strong> <span>-</span> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td width="40%"> 512 MB </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 1 GB </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 2 GB </td> 
       <td> 1 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 4 GB </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 8 GB </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 16 GB </td> 
       <td> 6 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 32 GB </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 8 GB - HM </td> 
       <td> 2 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 16 GB - HM </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 32 GB - HM </td> 
       <td> 6 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 4 GB - HC </td> 
       <td> 4 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 8 GB - HC </td> 
       <td> 8 </td> 
      </tr> 
      <tr> 
       <td></td> 
       <td> 16 GB - HC </td> 
       <td> 12 </td> 
      </tr> 
     </tbody> 
    </table> 
