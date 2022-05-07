import axios from "axios";

const server = axios.create({
  baseURL: "https://git.heroku.com/whale-log.git/api",
});

export default server;
