// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const jwt = require("jsonwebtoken");

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }

//       return resolve(result)
//     })
//   })
// }

// async function handler(req, res) {
//   // Run the middleware
//   await runMiddleware(req, res, cors)

//   // Rest of the API logic
//   res.json({ message: 'Hello Everyone!' })
// }

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token:", token);
  if (token == null) return res.status(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.status(403);
    req.username = user;
    next();
  });
}

export default function handler(req, res) {
  if (req.method === "GET") {
    // Process a GET request
  } else if (req.method === "POST") {
    // Process a POST request
    const { username, password } = req.body;
    console.log(req.body);
    res.status(200).json("user logged in successfully");
  } else if (req.method === "PUT") {
    // Process a PUT request
  } else if (req.method === "DELETE") {
    // Process a DELETE request
  }
}
