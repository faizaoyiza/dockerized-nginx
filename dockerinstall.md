# Docker Installation and Basic Commands

This guide provides instructions to install Docker, run a simple Hello World container, and some basic Docker commands to get you started.

---

## Installing Docker

### For Windows and Mac
1. Download Docker Desktop from [Docker Official Website](https://www.docker.com/products/docker-desktop).
2. Follow the installation instructions specific to your OS.
3. Once installed, open Docker Desktop and ensure it is running.
<img width="815" height="440" alt="Image" src="https://github.com/user-attachments/assets/3f96907a-847a-4290-9ce7-4bc05dd90a91" />
<img width="815" height="440" alt="Image" src="https://github.com/user-attachments/assets/84ca101e-0f30-4ff1-9329-04b2212244f2" />
<img width="947" height="488" alt="Image" src="https://github.com/user-attachments/assets/f9c5018a-0e9e-48be-a86b-682783943df9" />
### For Ubuntu/Linux
Open a terminal and run the following commands:

```bash
# Update package index
sudo apt-get update

# Install prerequisites
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

# Add Docker’s official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Add Docker repository
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Install Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

# Verify installation
docker --version
