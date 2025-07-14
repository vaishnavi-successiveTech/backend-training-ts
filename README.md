
## Backend Training
This repository contains step to install Node.Js on Debian-based Linux system
Node.js is a powerful, open-source JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript code outside the browser, typically on the server.
It’s widely used to build fast, scalable backend applications and APIs thanks to its event-driven, non-blocking I/O model.



## 1.Run the following commands
bash
sudo apt update

sudo apt install curl

## 2.Add NodeSource Repository for Node.js LTS

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -


## 3.Install Node.js and npm
   sudo apt install nodejs

# 4. Verify Installation
    node -v
    npm -v


# Node.js Backend Setup with Express, Cookie-Parser, and Postman

This guide provides step-by-step instructions to:

- Install and set up the latest stable version of Express.js
- Configure `cookie-parser` middleware
- Install the latest stable version of Postman on a Debian-based Linux system

---

##  1. Install and Set Up Express.js

### Step 1: Initialize a Node.js project

```bash
npm init -y
npm install express
```
# Cookie-Parser Setup and Postman Installation

This guide will help you:

- Set up and configure `cookie-parser` in an Express app
- Install the latest stable version of Postman on a Debian-based Linux system

---

##  2. Setup and Configure cookie-parser

### Step 1: Install `cookie-parser`

```bash
npm install cookie-parser
```

# Postman Installation 

This guide provides instructions for installing the latest stable version of Postman on Linux systems.



##  Installation Method 

### Prerequisites
Ubuntu/Debian-based Linux distribution
Terminal access with sudo privileges

### Installation Steps


1. **Add the Postman repository**
bash
   sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'
  

2. **Import the Postman GPG Key**
bash
   sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
  

3. **Update the package list**
bash
   sudo apt-get update
  

4. **Install Postman**
bash
   sudo apt-get install postman