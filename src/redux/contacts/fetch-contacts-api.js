import axios from "axios";

const contactsList = axios.create({
  baseURL: "https://635b9d458aa87edd914c8097.mockapi.io/contacts",
  params: {
    _limit: 12,
  },
});

export const getContacts = async () => {
  const { data } = await contactsList.get("/");
  return data;
};
export const addContacts = async (data) => {
  const { data: result } = await contactsList.post("/", data);
  return result;
};
export const removeContacts = async (id) => {
  const { data } = await contactsList.delete(`/${id}`);
  return data;
};
