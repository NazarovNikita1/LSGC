const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/your_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  teamName: String,
  memberNames: String,
  email: String,
  contacts: String,
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send({ message: "User registered successfully!" });
});

app.listen(3000, () => console.log("Server started on port 3000"));
