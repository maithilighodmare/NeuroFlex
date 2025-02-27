import React from "react";
import "./Home.css";

const AboutUs = () => {
  return (
    <div id="about" className="about-container">
      {/* Left Section: Text Content */}
      <div className="about-text">
        <h4 className="about-subtitle">How It Started</h4>
        <h2 className="about-title">
          Our Dream is <br /> Global Therapy <br /> Transformation
        </h2>
        <p className="about-description">
          Kawruh was founded by Robert Anderson, a passionate lifelong learner,
          and Maria Sanchez, a visionary educator. Their shared dream was to
          create a digital haven of knowledge accessible to all. United by
          their belief in the transformational power of education, they
          embarked on a journey to build `Kawruh` With relentless dedication,
          they gathered a team of experts and launched this innovative
          platform, creating a global community of eager learners, all
          connected by the desire to explore, learn, and grow.
        </p>
      </div>

      {/* Right Section: Image and Stats */}
      <div className="about-right">
        <div className="about-image">
          <img
            src="https://media-hosting.imagekit.io//f1d265587b7d458d/logo.png?Expires=1834755043&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=F9yuGPcd3L~MuTvrRAHt~lYz5Zj6qSlhYQ-wNjBJUDyvgOsD4ilk14vpE2fBSroCRVZKHZcLQ4m0~~7kBRqDJsUDjO2Fb4W8WWsRwbG1Z~Y5~lr7IrDqOUfZrmHyBrOXOTJzszGbGI88ipj2RltcUvUNqKiB~O7qQJcL-5hrIIGuPIvtZrIbSvguJak2bRy1LYzMcVZZ44iYr6a6TK35f9pLlxThPym6n8j~CL20F7O-D8M6uabQcmTBpSwOBEtUxnQtcBAh72UyhkKctfZg00VPnw2Pk7-D4ZJCdor6jWEmcqzLpEvgLNTGHIkUqKjqOHMMm45VK3Ef1ugWkcW~lA__"
            alt="Team Collaboration"
          />
        </div>

        {/* Stats Cards */}
        <div className="about-stats">
          <div className="stat-box">
            <h3>3.5</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <h3>23</h3>
            <p>Project Challenge</p>
          </div>
          <div className="stat-box">
            <h3>830+</h3>
            <p>Positive Reviews</p>
          </div>
          <div className="stat-box">
            <h3>100K</h3>
            <p>Trusted Students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
