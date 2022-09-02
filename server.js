// import Mongoose
const mongoose = require("mongoose");
// require express
const express = require("express");

// listen on Port 3001
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// require routes
app.use(require("./routes"));

// tell Mongoose which database to connect to
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/kn-social-network-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// this logs mongo queries
mongoose.set("debug", true);

// console log when connected to port
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
