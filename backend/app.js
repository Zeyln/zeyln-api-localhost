const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000; // Change this to your desired port number, you will access the server at http://localhost:port-number)
const database = require("./dbconnector.js");
app.use(express.json());

app.use(
  cors({
    origin: "*", // Allows all origins
    methods: ["GET, POST"], // Allows only GET requests
  })
);

app.get("/CHANGE THIS TO YOUR HOME DESTINATION", (req, res) => {
  res.send("Hello, <your name here>!");
});

//query pulls everything from the table you define after "FROM". Make sure to change the endpoint and query to fit your needs.
app.get("/database", async (req, res) => {
  let query = "SELECT * FROM;";

  try {
    let games = await database.query(query);

    res.send(games);
  } catch (error) {
    res.send(error);
  }
});

//Customizable query. make sure to add your desired endpoint and query to fit your needs.
app.get("/customize1", async (req, res) => {
  let query = "SELECT <change this> FROM <change this>;";

  try {
    let games = await database.query(query);

    res.send(games);
  } catch (error) {
    res.send(error);
  }
});

//Customizable query for inserting new data. Make sure to change the endpoint and query to fit your needs.
app.post("/post", async (req, res) => {
  let newGame = req.body;
  let query = `INSERT INTO <change this> (collumn, collumn, collumn, collumn) VALUES (${"change this"}, ${"change this"}, ${"change this"}, ${"change this"})`;

  try {
    let newGame = await database.query(query);

    res.send(newGame);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});