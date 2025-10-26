// src/services/posts.js
import axios from "axios";

const API_URL = "http://localhost:5001/api/posts"; // your backend URL

export const getPosts = async () => {
  const res = await axios.get(`${API_URL}`);
  return res.data;
};

export const createPost = async (postData) => {
  const res = await axios.post(`${API_URL}`, postData);
  return res.data;
};

// ✅ Add this
export const addReply = async (postId, reply) => {
  const res = await axios.post(`${API_URL}/${postId}/reply`, { reply });
  return res.data;
};
