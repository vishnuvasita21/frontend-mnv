import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `https://mnv-backend.onrender.com/`,
  });
};
