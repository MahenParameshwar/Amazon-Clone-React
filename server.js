const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const request = require("request");
const { v4: uuidv4 } = require("uuid");

const responseTime = require("response-time");

const registerRoute = require("./Routes/register");
const loginRoute = require("./Routes/login");
const produntsRoute = require("./Routes/products");
const categoryRoute = require("./Routes/category");
const cartRoute = require("./Routes/cart");
const sendEmailRoute = require("./Routes/email");
const customerRoute = require("./Routes/customer");
const addressRoute = require("./Routes/address");
const ordersRoute = require("./Routes/orders");

const dotenv = require("dotenv");

const connectDB = require("./Config/db");

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(responseTime());

app.use("/api", registerRoute);

app.use("/api", loginRoute);

app.use("/api", produntsRoute);

app.use("/api", categoryRoute);

app.use("/api", cartRoute);

app.use("/api", sendEmailRoute);

app.use("/api", customerRoute);

app.use("/api", addressRoute);

app.use("/api", ordersRoute);

const instance = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY_ID,
  key_secret: process.env.RAZOR_PAY_KEY_SECRET,
});
console.log(123);

app.get("/", (req, res) => {
  res.status(404).json({ code: 60, message: "resource not found" });
});

app.get("/favicon.ico", (req, res) => {
  res.status(404).json({ code: 60, message: "resource not found" });
});
app.post("/payment", (req, res) => {
  try {
    const options = {
      ...req.body,
      amount: req.body.amount * 100,
    };
    console.log(req.body);
    instance.orders.create(options, (err, order) => {
      if (err) {
        console.log(err.message);
        return res.status(500).json({ message: "Something went wrong" });
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.post("/capture/:paymentId", (req, res) => {
  try {
    return request(
      {
        method: "POST",
        url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form: {
          amount: req.body.amount * 100,
          currency: "INR",
        },
      },
      async function (error, response, body) {
        if (error) {
          console.log(err.message);
          return res.status(500).json({
            message: "Something Went Wrong",
          });
        }
        return res.status(200).json(body);
      }
    );
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log("You are connected");
});
