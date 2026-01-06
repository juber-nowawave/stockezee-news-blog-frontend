
import axios from "axios";
const base_url = 'https://g79l1s80-5000.inc1.devtunnels.ms/api/news';
// const base_url = 'http://localhost:5000/api/news';
export const getNews = async () => {
  const response = await axios.get(base_url);
  return response.data;
};

export const getNewsById = async (id) => {
  const response = await axios.get(`${base_url}/${id}`);
  return response.data;
};
