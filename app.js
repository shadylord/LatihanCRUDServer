const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// routes
const userRoutes = require("./routes/users");

const app = express();
const port = process.env.PORT || 3000;

// database
const db = require("./database/postgres");

// test koneksi database
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// routes
app.use("/users", userRoutes);

// selain semua routes maka tampilkan not found
app.get("*", (req, res) => {
  res.send({
    message: "Not Found!"
  });
});

app.listen(port, () => console.log(`Listening to port ${port}.`));
