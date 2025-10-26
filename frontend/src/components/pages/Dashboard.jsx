// src/components/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { getPosts, addReply } from "../../services/posts";
import "./Dashboard.css";
import doctorImg from "../../assets/doctor.png"; // <-- put image in src/assets/

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleComment = async (postId) => {
    try {
      await addReply(postId, comment);
      setComment("");
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        {/* Doctor Image */}
        <div className="doctor-image">
          <img src={doctorImg} alt="Doctor" />
        </div>
        <h2>MediMate Dashboard</h2>
        <button onClick={() => localStorage.clear()}>Logout</button>
      </header>

      <section className="posts-section">
        {posts.map((post) => (
          <div className="post-card" key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="comment-section">
              <input
                type="text"
                placeholder="Add a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button onClick={() => handleComment(post._id)}>Comment</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
