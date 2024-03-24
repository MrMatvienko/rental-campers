import axios from "axios";

axios.defaults.baseURL = "https://65f9bb983909a9a65b193a03.mockapi.io";

export const getAdvertList = async () => {
  const { data } = await axios.get("advert");
  return data;
};

export const getAdvertItem = async (_id) => {
  const { data } = await axios.get(`/advert/${_id}`);
  return data;
};
