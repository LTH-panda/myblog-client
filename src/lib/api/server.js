import axios from "axios";

const server = axios.create({
  baseURL: "https://whale-log.herokuapp.com/api",
});

export default server;
