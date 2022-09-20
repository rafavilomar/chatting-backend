# Chatting (backend)

### Table of content
- [Technologies](#technologies)
- [About](#about)
- [Running the Project](#running-the-project)
- [Author](#author)

## Technologies
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=ffffff)
![Node.js](https://img.shields.io/badge/-NodeJS-E0234E?style=flat&logo=nodedotjs&logoColor=fff)
![Socket.io](https://img.shields.io/badge/-Socket_io-010101?style=flat&logo=socketdotio&logoColor=fff)
![MOngoDB](https://img.shields.io/badge/-Docker-47A248?style=flat&logo=mongodb&logoColor=fff)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=Docker&logoColor=fff)


## About
**Chatting** is room to connect people on a global chat. Every one will be able to talk to every online users with just an username. 
**This is just the backend side, if you want to see the frontend project go [here](https://github.com/rafavilomar/chatting-frontend)**

## Live Demo
[Got to live demo](https://chatting-frontend.vercel.app/login)


## Before Running the Project
It's necessary to create a new `.env` file in the root project to define all necessary enviroment variables, there is a `.env.example` file with variable list. Anyway, you can learn more about them here.
| Key | Description |
|-----|-------------|
| `PORT` | Port to expose the API |
| `CLIENT_DOMAIN` | Client domaint taht you want to connect |
| `DB_HOST` | MongoDB uri connection |

## Running the Project

#### Prerequisite
- Install NodeJS to execute javascript without any browser. You can install it [here](https://nodejs.org/en/download/).
- Install and setup MongoDB for the database. You can install it [here](https://www.mongodb.com/try/download/community).

#### Installation
Once you have NodeJS and MongoDB in your machine, run the command above in your terminal located on the root project:
```bash
$ npm install
```

#### Run the Project
```bash
# development and watch mode
$ npm run dev

# production mode
$ npm start
```

### Author
- Author: Rafael Vilomar
- LinkedIn: https://www.linkedin.com/in/rafavilomar/
- Email: rafavilomar@gmail.com


