const express = require("express");
const cors = require("cors");

const registerRoute = require("./Routes/register");
const loginRoute = require("./Routes/login");
const produntsRoute = require("./Routes/products");
const categoryRoute = require("./Routes/category");
const cartRoute = require("./Routes/cart");
const sendEmailRoute = require("./Routes/email");

const dotenv = require("dotenv");

const connectDB = require("./Config/db");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api", registerRoute);

app.use("/api", loginRoute);

app.use("/api", produntsRoute);

app.use("/api", categoryRoute);

app.use("/api", cartRoute);

app.use("/api", sendEmailRoute);

connectDB();

app.listen(8000, () => {
  console.log("Listening at port 8000");
});
