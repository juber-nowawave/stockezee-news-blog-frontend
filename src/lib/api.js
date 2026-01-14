
import axios from "axios";
// const base_url = 'https://g79l1s80-5000.inc1.devtunnels.ms/api/news';
const base_url = 'https://portal.stockezee.com/api/news';
export const getNews = async () => {
  const response = await axios.get(`${base_url}/${'all'}`);
  return response.data.data;
};

export const getNewsById = async (id) => {
  const response = await axios.get(`${base_url}/${'details'}`,{
    params: { id }
  });
  return response.data.data;
};
