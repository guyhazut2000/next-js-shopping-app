require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("../models/User");

app.use(express.json());
app.use(cors());

// save refresh tokens list instead of saving in db.
let refreshTokens = [];

app.post("/api/token", (req, res) => {
  const refreshToken = req.body.token;
  // check for refresh token.
  if (refreshToken == null) return res.sendStatus(401);
  // check if refresh token exists in our db.
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  // verify token, generate new access token if verification succeed.
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

app.delete("/api/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

// register new user
app.post("/api/register", (req, res) => {
  // create new user.
  const { username, password, email } = req.body;
  const newUser = User({
    username,
    password,
    email,
  });
  // register new user
  registerNewUser(newUser);

  // find user by email function
  async function findUserByEmail(email) {
    try {
      const query = { email: email };
      const user = await User.findOne(query);
      // return user
      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Unable to find user by email.");
    }
  }
  // register new user function
  async function registerNewUser(newUser) {
    try {
      // check if the user email exists in db.
      const user = await findUserByEmail(email);
      // if email exists send corresponding message and status.
      if (user) {
        return res.status(202).json({
          user: null,
          registerStatus: "failed",
          message: "user failed to register, email is already been used.",
        });
      }
      console.log("new user create, user = ", newUser);
      // save new user in db.
      newUser.save();
      // return new user with status and message.
      if (newUser) {
        return res.status(201).json({
          user: newUser,
          registerStatus: "success",
          message: "user registered with success.",
        });
      }
      return res.status(202).json({
        user: null,
        registerStatus: "failed",
        message: "user failed to register.",
      });
    } catch (error) {
      console.log(error);
      throw new Error("Unable to register new user.");
    }
  }
});

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = { name: username };

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  refreshTokens.push(refreshToken);
  res.status(200).json({
    username,
    accessToken,
    refreshToken,
  });
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}

//start auth server
const PORT = process.env.AUTH_PORT || 4040;

mongoose
  .connect(
    "mongodb+srv://guy:guy@cluster0.471cl.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Auth server is running on port: ${PORT}!`);
});
