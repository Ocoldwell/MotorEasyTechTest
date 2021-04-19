# MotorEasy Tech Test

This project was created for a tech test for MotorEasy, it includes both a React frontend and a Node server connected to a Mongo database.

## How to use

Clone into your development folder, and cd into the folder once finished.
To get started you'll need to cd into the server folder and npm install and then use npm start to start it up, then you'll need to head back to the main folder and cd into the client and again use npm install and npm start.
A note, this is running on my mongodb server, and my connection string is hidden.
## Packages used

* Frontend
  * Material UI - Fast package for quick attractive components and easily customisable.
  * SASS - I wanted custom styling on certain elements and like the modular approach of SASS
* Backend
  * dotenv - Ensuring that any sensitive information is stored locally on an environment file.
  * express - package for handling HTTP servers, easy to use and set up.
  * mongodb- dependency for mongoose.
  * mongoose - using primarily for the schema that sits above the monogodb driver, helps define data structure for document db.
