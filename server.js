// import dependencies
const express = require("express");
const app = express();
const mysql = require("mysql2");
const dotenv = require("dotenv");

// configure environment variables
dotenv.config();

// create a connection object
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// test the connection
db.connect((err) => {
  //connection is not successful
  if (err) {
    return console.log("Error connection to the database: ", err);
  }
  //connection is successful
  console.log("Connection complete to MySQL:", db.threadId);
});

// ejs not for the assignment
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

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

// start and listen to the server
app.listen(3300, () => {
  console.log(`server is running on port 3300...`);
});
