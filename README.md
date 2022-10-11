# Social Media API - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description

A simple Social Media API backend

## Table of Contents

- [Usage](#usage)
- [License](#license)
- [Technology](#technology)
- [Questions](#questions)

## Usage

[Click here for a Walkthrough Video](https://youtu.be/UWH1D2_y7G8)

1. Using a CLI navigate to the folder where you have saved the server.
2. Run command `npm run start` to start the server.
3. The server has the following API routes for interacting with the database:

    ### **User**

    GET `/api/users` - Returns all users

    GET `/api/users/:id` - Returns a user by id

    POST `/api/users` - Create new user

    The body object must have the following properties:

    - `username` - username ( String )

    - `email` - must be a valid email address ( String )
    <br>

    PUT `/api/users/:id` - Updates existing user

    The body object may contain either of the following properties to be updated:

    - `username` - username ( String )

    - `email` - must be a valid email address ( String )
    <br>

    DELETE `/api/users/:id` - Deletes existing user

    ---

    ### **Friends**

    POST `/api/users/:userId/friends/:friendId` - Add user to friends list

    DELETE `/api/users/:userId/friends/:friendId` - Remove user from friends list

    ---
    ### **Thoughts**

    GET `/api/thoughts` - Returns all thoughts

    GET `/api/thoughts/:id` - Returns a thought by id

    POST `/api/thought` - Create new thought
    
    The body object must have the following properties:

    - `thoughtText` - Thought content ( String )

    - `username` - username of the user this thought belongs to ( String )

    - `userId` - id of the user this thought belongs to ( String )
    <br>

    PUT `/api/thought/:id` - Update existing Thought

    The body object may contain any of the following properties to be updated:

    - `thoughtText` - Thought content ( String )

    - `username` - username of the user this thought belongs to ( String )

    - `userId` - id of the user this thought belongs to ( String )
    <br>

    ---

    ### **Reactions**

    POST `/api/thoughts/:thoughtId/reactions` - Creates new reaction

    The body object must have the following properties:

    - `reactionBody` - Reaction content ( String )

    - `username` - username of the user this reaction belongs to ( String )
    <br>

    DELETE  `/api/thoughts/:thoughtId/reactions` delete a reaction

    The body object must have the following properties:

    - `reactionId` - Reaction id ( String )

## License

<p>
MIT License

Copyright 2022 &copy; Daniel Stewart

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p>

## Technology

### Languages

- [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)

### Runtime

- [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)

### Packages

- [![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
- [![Mongoose.js](https://img.shields.io/badge/Mongoose-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://mongoosejs.com/)
- [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)




### Database

- [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

### Development

- [![Nodemon](https://img.shields.io/badge/nodemon-669944?style=for-the-badge&logo=nodemon&logoColor=white)](https://www.mysql.com/)
## Questions 

If you have any questions or feedback you can contact me through one of the links below <br>
GitHub Profile - [danielstewart914](https://github.com/danielstewart914)<br>
Email - [danielstewart914@outlook.com](mailto:danielstewart914@outlook.com)
