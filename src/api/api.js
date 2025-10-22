import axios from "axios";

export const fetchPosts = async (page = 1) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
  return res.data;
};
