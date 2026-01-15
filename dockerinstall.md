# Docker Installation and Basic Commands

This guide provides instructions to install Docker, run a simple Hello World container, and some basic Docker commands to get you started.

---

## Installing Docker

### For Windows and Mac
1. Download Docker Desktop from [Docker Official Website](https://www.docker.com/products/docker-desktop).
2. Follow the installation instructions specific to your OS.
3. Once installed, open Docker Desktop and ensure it is running.
<img width="815" height="440" alt="Image" src="https://github.com/user-attachments/assets/84ca101e-0f30-4ff1-9329-04b2212244f2" />

# Docker: Installation, Usage, and Concepts

This guide provides a comprehensive overview of Docker, including its benefits, installation steps for different operating systems, running containers, and essential Docker commands.

---

## Understanding Containers and Their Benefits

**What are Docker Containers?**  
Docker containers are lightweight, portable, and self-sufficient units that package an application along with all its dependencies, libraries, and configuration files. They run on a shared operating system kernel but are isolated from each other.

**Benefits of Docker Containers:**  
- **Portability:** Containers run the same way across different environments (development, testing, production).  
- **Efficiency:** Containers share the host OS kernel, making them more lightweight than traditional virtual machines.  
- **Rapid Deployment:** Containers start quickly, enabling agile development and deployment cycles.  
- **Isolation:** Different applications and services run in separate containers, avoiding conflicts.

**How do Containers Solve Deployment Challenges?**  
Containers eliminate the "it works on my machine" problem by ensuring consistency across different environments. They simplify dependency management and streamline continuous integration/continuous deployment (CI/CD) workflows.

---
<img width="947" height="488" alt="Image" src="https://github.com/user-attachments/assets/f9c5018a-0e9e-48be-a86b-682783943df9" />
## Installing Docker

### For Windows and Mac

1. **Download Docker Desktop:**  
   Visit [Docker Desktop Download](https://www.docker.com/products/docker-desktop) and choose the appropriate version for your OS.

2. **Install Docker Desktop:**  
   - Run the installer and follow the on-screen instructions.  
   - During installation, ensure that the option to "Use Windows containers" or "Use Linux containers" is selected as per your needs.

3. **Verify Installation:**  
   - Open Docker Desktop and wait until it indicates Docker is running.  
   - Open Command Prompt (Windows) or Terminal (Mac) and run:

     ```bash
     docker --version
     ```

   - If installed correctly, you should see the Docker version displayed.

**Note:**  
On Windows, for Windows containers, additional configuration may be required. For Linux containers, Docker Desktop uses a Linux VM internally.

---
<img width="436" height="62" alt="Image" src="https://github.com/user-attachments/assets/128cf14d-a274-42ba-8eab-c725269f708c" />


### For Ubuntu/Linux

Run the following commands in your terminal:

```bash
# Update package index
sudo apt-get update

# Install prerequisites
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common

# Add Docker’s official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Add Docker repository
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Update package index again
sudo apt-get update

# Install Docker Engine
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Optional: Manage Docker as a non-root user
sudo usermod -aG docker $USER
# Log out and log back in to apply group changes

# Verify installation
docker --version
