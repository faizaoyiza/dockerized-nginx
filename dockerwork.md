# Working with Docker Containers

This document demonstrates basic Docker container operations performed in **PowerShell** on Windows. The examples include starting, stopping, listing, and running containers, as well as checking Docker images and version.

---
<img width="943" height="510" alt="Image" src="https://github.com/user-attachments/assets/ad528810-3b03-4906-b092-2585f0a0d7f5" />

## 🐳 Docker Version
```powershell
PS C:\Users\Abdul> docker --version

Docker version 28.1.1, build 4eba377
PS C:\Users\Abdul> docker images
REPOSITORY        TAG       IMAGE ID       CREATED          SIZE
nginx-js-site     latest    9e09b66c6ddd   30 minutes ago   188MB
python            3.12      a592bd1f6835   2 weeks ago      1.11GB
jenkins/jenkins   lts       75109de20007   5 weeks ago      499MB
postgres          15        e195b2889efd   5 months ago     445MB
odoo              17        88b54a375ad6   5 months ago     1.81GB
nginx             latest    9592f5595f2b   6 months ago     192MB
hello-world       latest    74cc54e27dc4   11 months ago    10.1kB


PS C:\Users\Abdul> docker ps
CONTAINER ID   IMAGE           COMMAND                  CREATED             STATUS             PORTS                                   NAMES
f60d836878f2   nginx-js-site   "/docker-entrypoint.…"   About an hour ago   Up About an hour   0.0.0.0:8080->80/tcp                    stoic_agnesi
055decbe4d36   odoo:17         "/entrypoint.sh odoo"    4 weeks ago         Up 2 hours         0.0.0.0:8069->8069/tcp, 8071-8072/tcp   odoo_app
510bd84a2370   postgres:15     "docker-entrypoint.s…"   4 weeks ago         Up 2 hours         5432/tcp                                odoo_db

PS C:\Users\Abdul> docker start f60d836878f2
f60d836878f2

PS C:\Users\Abdul> docker run -d ubuntu
00d22b738a702525f5250c32f6bc70ad40e3dfa2155f7bffe2272b2fe8397412
