const express = require("express");
const mongoose = require("mongoose");

//const item = require("./routes/item");

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

//app.use("/items", item);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 