// src/components/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* Header */}
      <header className="home-header">
        <h1>MediMate</h1>
        <nav>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="home-hero">
        <h2>Your Health Companion, Online!</h2>
        <p>Connect with doctors, post health queries, and get guidance instantly.</p>
        <button className="hero-btn" onClick={() => navigate("/register")}>
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="feature-card">
          <h3>Ask Questions</h3>
          <p>Post your health issues and get answers from verified doctors.</p>
        </div>
        <div className="feature-card">
          <h3>Feedback</h3>
          <p>Share your experience and help others make informed decisions.</p>
        </div>
        <div className="feature-card">
          <h3>24/7 Support</h3>
          <p>Our platform ensures you always have access to medical guidance.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2025 MediMate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
