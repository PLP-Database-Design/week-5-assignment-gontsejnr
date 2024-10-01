# Database Interaction in Web Applications

This demonstrates the connection of MySQL database and Node.js to create a simple API

## Requirements

- [Node.js](https://nodejs.org/) installed
- MySQL installed and running
- A code editor, like [Visual Studio Code](https://code.visualstudio.com/download)

## Setup

1. Clone the repository
2. Initialize the node.js environment
   ```
   npm init -y
   ```
3. Install the necessary dependencies
   ```
   npm install express mysql2 dotenv nodemon
   ```
4. Create a `server.js` and `.env` files
5. Basic `server.js` setup
   <br>

   ```js
   const express = require("express");
   const app = express();

   // Question 1 goes here
   // retrieve all patients
   app.get("", (req, res) => {
     const getPatients =
       "SELECT patient_id, first_name, last_name, date_of_birth FROM patients";
     db.query(getPatients, (err, data) => {
       // if there is an error
       if (err) {
         return res.status(400).send("Failed to get patients", err);
       }
       //if successful
       res.status(200).send(data);
     });
   });

   // Question 2 goes here
   // retrieve all providers
   app.get("", (request, response) => {
     const getProviders =
       "SELECT first_name, last_name, provider_specialty FROM providers";
     db.query(getProviders, (err, data) => {
       if (err) {
         return response.status(400).send("Failed to get providers", err);
       }
       response.status(200).send(data);
     });
   });

   // Question 3 goes here
   // Retrieve patients by first Name
   app.get("", (req, res) => {
     const getFirstName = "SELECT * FROM patients ORDER BY first_name";
     db.query(getFirstName, (err, data) => {
       if (err) {
         return res.status(400).send("Failed to get patients", err);
       }
       res.status(200).send(data);
     });
   });

   // Question 4 goes here
   // retrieve providers by specialty
   app.get("", (request, response) => {
     const getSpecialty = "SELECT * FROM providers ORDER BY provider_specialty";
     db.query(getSpecialty, (err, data) => {
       if (err) {
         return response.status(400).send("Failed to get specialty", err);
       }
       response.status(200).send(data);
     });
   });

   // listen to the server
   const PORT = 3000;
   app.listen(PORT, () => {
     console.log(`server is running on http://localhost:${PORT}`);
   });
   ```

   <br><br>

## Run the server

```
nodemon server.js
```

<br><br>

## Setup the `.env` file

```.env
DB_USERNAME=root
DB_HOST=localhost
DB_PASSWORD=your_password
DB_NAME=hospital_db
```

<br><br>

## Configure the database connection and test the connection

Configure the `server.js` file to access the credentials in the `.env` to use them in the database connection

<br>

## 1. Retrieve all patients

Create a `GET` endpoint that retrieves all patients and displays their:

- `patient_id`
- `first_name`
- `last_name`
- `date_of_birth`

<br>

## 2. Retrieve all providers

Create a `GET` endpoint that displays all providers with their:

- `first_name`
- `last_name`
- `provider_specialty`

<br>

## 3. Filter patients by First Name

Create a `GET` endpoint that retrieves all patients by their first name

<br>

## 4. Retrieve all providers by their specialty

Create a `GET` endpoint that retrieves all providers by their specialty

<br>

## NOTE: Do not fork this repository
