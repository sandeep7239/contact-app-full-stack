To create a README file for your MERN stack project "mycontact", you can follow the template below:

# MyContact

MyContact is a MERN stack project that allows users to manage their contacts. This repository contains the backend code for the project.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

## Getting Started

1. Clone the repository:

   ```
   git clone <https://github.com/sandeep7239/contact-app-full-stack.git>
   ```

2. Install the dependencies:

   ```
   cd mycontact
   npm install
   ```

3. Start the server:

   ```
   npm start
   ```

4. The server should now be running on `http://localhost:5000`.

## Functionality

### Middleware

- `fetch.js`: Middleware function for authenticating user requests using JWT.

### Models

- `notes.js`: Defines the schema for the notes collection in the MongoDB database.
- `user.js`: Defines the schema for the user collection in the MongoDB database.

### Routes

- `auth.js`: Contains routes for user authentication, including registration, login, and getting user details.
  - `POST /api/auth/createuser`: Creates a new user with the provided name, email, and password.
  - `POST /api/auth/login`: Authenticates a user with the provided email and password and returns a JWT token.
  - `POST /api/auth/getuser`: Retrieves the details of the logged-in user.

- `note.js`: Contains routes for managing notes.
  - `GET /api/notes/fetchallnotes`: Retrieves all notes of the logged-in user.
  - `POST /api/notes/addnote`: Adds a new note with the provided title, description, and tag.
  - `PUT /api/notes/updatenote/:id`: Updates an existing note with the provided ID, title, description, and tag.
  - `DELETE /api/notes/deletenote/:id`: Deletes an existing note with the provided ID.

### Database

- `db.js`: Establishes a connection to the MongoDB database.

## Frontend

The frontend code for the MyContact project is located in a separate repository. You can find it [here](<>).



## Contact App Screenshot
![xeno1](https://github.com/sandeep7239/contact-app-full-stack/assets/88778019/a67bcb97-652f-4e62-96ad-36d9a98a9074)
![xeno2](https://github.com/sandeep7239/contact-app-full-stack/assets/88778019/91c52131-8187-4652-bcbf-3466df2be92d)
![xeno3](https://github.com/sandeep7239/contact-app-full-stack/assets/88778019/a70a98dd-e6cb-48f9-8317-de05037f7f67)
![xeno4](https://github.com/sandeep7239/contact-app-full-stack/assets/88778019/da2eb182-550a-428e-be6a-09a2a5132241)


