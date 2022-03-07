import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL:
    process.env.NODE_ENV === "production"
      ? "production url - to be added"
      : "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json",
  },
});
