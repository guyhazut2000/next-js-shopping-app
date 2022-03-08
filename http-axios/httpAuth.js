import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.AUTH_URL
      : "prod url - to be added",

  "Content-type": "application/json",
});
