# Notes-Events-Organizer

![App Screenshot/Demo GIF (Optional)](./docs/app-screenshot.png) ## Project Description

A comprehensive MERN stack application providing full CRUD operations for notes, tasks, and events, with robust offline capabilities and real-time alarming features. This application aims to be your go-to personal organizer, allowing you to manage your daily tasks, capture thoughts, and schedule important events seamlessly, whether you're online or offline.

## Features

* **Notes Management:** Create, read, update, and delete notes.
* **Tasks Management:** Full CRUD for tasks, helping you stay organized.
* **Event Scheduling:** Plan and manage your events efficiently.
* **Online & Offline Capabilities:** Access and modify your notes and tasks even without an internet connection. Data automatically synchronizes when connectivity is restored.
* **Real-time Alarming:** Set alarms for events and tasks to receive timely notifications.
* **User Authentication:** Secure user registration and login.
* **Responsive UI:** A user-friendly interface designed for various screen sizes.

## Technologies Used

This project is built using the MERN stack along with modern development tools for containerization and environment management.

* **Frontend:**
    * [React.js](https://reactjs.org/)
    * [React Router](https://reactrouter.com/)
    * [Axios](https://axios-http.com/)
    * (Add any other significant frontend libraries like Redux, Context API, etc.)
* **Backend:**
    * [Node.js](https://nodejs.org/)
    * [Express.js](https://expressjs.com/)
    * [Mongoose](https://mongoosejs.com/) (for MongoDB object modeling)
    * [JWT (JSON Web Tokens)](https://jwt.io/) (for authentication)
    * (Add any other significant backend libraries like bcrypt, nodemailer, etc.)
* **Database:**
    * [MongoDB](https://www.mongodb.com/) (NoSQL database)
* **Containerization & Orchestration:**
    * [Docker](https://www.docker.com/)
    * [Docker Compose](https://docs.docker.com/compose/)

## Project Structure

The repository is organized into two main parts:

* `Client/`: Contains the React frontend application.
* `Server/`: Contains the Node.js/Express.js backend API.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

* [**Git**](https://git-scm.com/downloads)
* [**Docker Desktop**](https://www.docker.com/products/docker-desktop) (Includes Docker Engine and Docker Compose, and handles WSL2 setup on Windows).
    * **Minimum Windows Requirement:** Windows 10 Pro/Enterprise/Home version 19044 or above.
    * Ensure Docker Desktop is running when you use Docker commands.
* **(Optional for local dev without Docker):** [Node.js](https://nodejs.org/en/download/) (LTS version recommended) and npm (comes with Node.js).

## Getting Started

Follow these steps to set up and run the application locally using Docker Compose:

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone [https://github.com/kamaljoshi33/Notes-Events-Organizer.git](https://github.com/kamaljoshi33/Notes-Events-Organizer.git)
cd Notes-Events-Organizer
