const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// const redis = require("redis");
// const { promisify } = require("util");

// const client = redis.createClient();

// const GET_ASYNC = promisify(client.get).bind(client);
// const SET_ASYNC = promisify(client.set).bind(client);

dotenv.config();

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }
  try {
    // let reply = await GET_ASYNC(token);
    // if (reply) {
    //   reply = JSON.parse(reply);
    //   console.log("Using Redis db");
    //   req.id = reply.token;
    //   return next();
    // }

    jwt.verify(token, process.env.SECRET_KEY, async (err, id) => {
      // if (err) {
      //   return res.sendStatus(403);
      // }
      // const saveResult = await SET_ASYNC(
      //   token,
      //   JSON.stringify({
      //     token: id,
      //   }),
      //   "EX",
      //   500
      // );

      // console.log("New Data is cashed in redis", saveResult);

      req.id = id;
      next();
    });
  } catch (err) {
    res.status(500).json({
      message: "somthing went wrong",
    });
  }
};

module.exports = authenticateToken;
