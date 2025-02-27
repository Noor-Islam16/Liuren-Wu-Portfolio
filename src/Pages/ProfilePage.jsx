import React, { useState } from "react";
import "../components/CSS/ProfilePage.css";
import profileImage from "../assets/pro2.png";
import Pattern from "../assets/designer.png";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("about");

  const profileData = {
    name: "Liuren Wu",
    title: {
      highlighted: "Wollman Distinguished",
      regular: "Professor of Finance",
    },
    articleCount: "50+",
    tabs: ["About", "Publications", "Classes", "Contact"],
  };

  const handleTabClick = (tab) => {
    const tabId = tab.toLowerCase();
    setActiveTab(tabId);

    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="profile-container min-h-screen"
      style={{
        backgroundImage: `url(${Pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="profile-content">
        <div className="left-nav">
          <div className="nav-links">
            {profileData.tabs.map((tab) => (
              <button
                key={tab}
                className={`nav-link ${
                  tab.toLowerCase() === "contact" ? "contact-button" : ""
                } ${activeTab === tab.toLowerCase() ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{profileData.name}</h1>
            <p className="profile-title">
              <span className="highlighted-title">
                {profileData.title.highlighted}
              </span>{" "}
              <span className="regular-title">{profileData.title.regular}</span>
            </p>
          </div>
        </div>
        <div className="profile-info-container">
          <div className="profile-image-container">
            <div className="profile-image">
              <img src={profileImage} alt="Liuren Wu" className="profile-img" />
            </div>

            {/* <div className="article-badge">
              <span className="count">{profileData.articleCount}</span>
              <span className="label">Articles</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
