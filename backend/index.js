const express = require("express");
const mongoose = require("mongoose");

const PORT = 5000;
const DB_URL =
  "mongodb+srv://iraryzha:123@tik-tak-cluster.iue3kyr.mongodb.net/?retryWrites=true&w=majority&appName=tik-tak-cluster";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json("Server is work");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json("Post is success");
});

async function appStart() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

appStart();
