import axios from "axios";

const instance = axios.create({
  baseURL: "https://enaruproject.firebaseio.com/",
});

export default instance;
