import axios from "axios";

const searchURL = "https://api.github.com/search/users?q=";
const baseURL = "https://api.github.com/users/";
 
const API = {
  getUser: async (userName) => axios.get(`${baseURL + userName}`),
  getSearchUser: async (userName) => axios.get(`${searchURL + userName}`),
  getRepos: async (userName) => axios.get(`${baseURL + userName}/repos`),
  getFollowers: async (userName) => axios.get(`${baseURL + userName}/followers`),
  getFollowing: async (userName) => axios.get(`${baseURL + userName}/following`),
};

export default API;
