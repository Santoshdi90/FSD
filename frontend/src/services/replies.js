import axios from "axios";

const API_URL = "http://localhost:5001/api/replies";

export const getReplies = async (postId) => {
  const res = await axios.get(`${API_URL}/${postId}`);
  return res.data;
};

export const createReply = async (postId, data, token) => {
  const res = await axios.post(`${API_URL}/${postId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
