const express = require("express");
const mongoose = require("mongoose");

const user = require("./routes/user.routes");

const app = express();
const port = 4002;

// create mongodb database
const url = 'mongodb://127.0.0.1/fbclone';

mongoose.connect(url, { useNewUrlParser: true });

// create connection
const con = mongoose.connection;

// on connection
con.on("open", () => {
  console.log('MongoDB connected!');
});

app.use(express.json());

app.use("/users", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 