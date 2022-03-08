import User from "../../models/User";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Process a GET request
  } else if (req.method === "POST") {
    // Process a POST request
    console.log("ENV ", process.env.MONGO_URL);
    const newUser = req.body;
    console.log("here");
    res.status(200).json("user logged in successfully");
  } else if (req.method === "PUT") {
    // Process a PUT request
  } else if (req.method === "DELETE") {
    // Process a DELETE request
  }
}
