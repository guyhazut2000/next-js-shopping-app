require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("mongoose");

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

app.post("/api/login", (req, res) => {
  // Authenticate User

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
app.listen(PORT, () => {
  console.log(`Auth server is running on port: ${PORT}!`);
});
