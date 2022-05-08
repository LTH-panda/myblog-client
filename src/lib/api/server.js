import axios from "axios";

let baseURL;

if (process.env.NODE_ENV !== "production") {
  baseURL = "http://localhost:4000/api";
} else {
  baseURL = "https://whale-log.herokuapp.com/api";
}

const server = axios.create({
  baseURL,
});

export default server;
