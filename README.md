# BoteNook - Your Awesome MERN Note Management App 🚀

Manage and organize your personal notes securely with this powerful and user-friendly MERN (MongoDB, Express, React, Node.js) application! 📝💻

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)
- [Technical Details](#technical-details)

## Introduction
Welcome to **BoteNook**, a feature-rich application that empowers users to effortlessly manage their personal notes in a secure environment. This application is designed to provide a **seamless and intuitive** user experience while ensuring the utmost security of user data. Whether you need to jot down ideas, organize tasks, or keep track of important information, **BoteNook** has got you covered!

## Features
- 🔐 **Secure Authentication**: User data and accounts are protected with JWT authentication, ensuring secure access to personal notes.
- 🔒 **Password Encryption**: User passwords are securely encrypted using the bcryptJS algorithm, safeguarding sensitive information.
- 💻 **RESTful APIs**: The back-end utilizes Express to create robust RESTful APIs and endpoints for various functionalities.
- ✅ **Data Validation**: User inputs are rigorously validated using Express validators, ensuring data integrity.
- 📊 **MongoDB Database**: All data is stored in MongoDB, a flexible NoSQL database, to ensure efficient data management.
- 🎨 **User-Friendly Interface**: The front-end is built with React, featuring intuitive UI and seamless navigation.

## Technologies Used
- **MongoDB**: [https://www.mongodb.com/](https://www.mongodb.com/)
- **Express**: [https://expressjs.com/](https://expressjs.com/)
- **React**: [https://reactjs.org/](https://reactjs.org/)
- **Node.js**: [https://nodejs.org/](https://nodejs.org/)
- **bcryptJS**: [https://www.npmjs.com/package/bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **JSON Web Token (JWT)**: [https://jwt.io/](https://jwt.io/)
- **React Router DOM**: [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)
- **ContextAPI**: [https://reactjs.org/docs/context.html](https://reactjs.org/docs/context.html)

## Installation

To run the **BoteNook** application locally, you can use `npm run both` to start both the frontend and backend together using `concurrently`.

1. Clone the repository: `git clone https://github.com/adiiityabisht/botenook.git`
2. Navigate to the project directory: `cd botenook`
3. Install dependencies for both frontend and backend: `npm install`
4. Start both frontend and backend together: `npm run both`

The frontend (React app) and backend (Node.js and Express app) will be running concurrently.

Now you can access the app by visiting `http://localhost:3000` in your favorite web browser and start managing your notes securely! 📝💻


## Usage
1. Open your favorite web browser and visit `http://localhost:3000`.
2. Sign up for a new account or log in if you already have one.
3. Create, edit, and organize your notes effortlessly.
4. Enjoy a **secure and user-friendly** note management experience!

## Contributing
**Contributions are welcome!** If you encounter any issues or have suggestions for improvements, please feel free to create a pull request or submit an issue. Let's make BoteNook even better together! 🤝

## License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Technical Details
**BoteNook** is a full-stack MERN application, where the back-end is built on Express and connected with the React front-end. The back-end employs RESTful APIs and endpoints to facilitate various functionalities, which are further fortified with Express validators for rigorous data validation, ensuring data integrity and security. MongoDB, a flexible NoSQL database, efficiently manages all user data and notes, ensuring a seamless and responsive user experience. The front-end utilizes React, making use of powerful hooks such as useState, react-router-dom, contextAPI, and useLocation, to create an intuitive and user-friendly interface. The application leverages JWT authentication to secure user accounts and passwords, and bcryptJS encryption algorithm is used to protect sensitive user information. With the seamless integration of these technologies, BoteNook offers a robust, secure, and efficient note management solution for users.
