import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://iraryzha:123@tik-tak-cluster.iue3kyr.mongodb.net/?retryWrites=true&w=majority&appName=tik-tak-cluster";

const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
