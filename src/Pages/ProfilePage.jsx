import React, { useState } from 'react';
import '../components/CSS/ProfilePage.css';
import profileImage from '../assets/LiurenWu.png';
import Pattern from '../assets/background.png';
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const profileData = {
    name: "Liuren Wu",
    title: "Wollman Distinguished Professor of Finance",
    articleCount: "50+",
    tabs: ["About", "Publications", "Classes", "Contact"],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab.toLowerCase());
  };

  return (
    <div className="profile-container" 
    style={{
        backgroundImage: `url(${Pattern})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
 
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-links">
          {profileData.tabs.map((tab) => (
            <button
              key={tab}
              className={`nav-link ${tab.toLowerCase() === 'contact' ? 'contact-button' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main profile section */}
      <div className="profile-content">
        <div className="profile-info">
          <h1 className="profile-name">{profileData.name}</h1>
          <p className="profile-title">{profileData.title}</p>
        </div>
        
        <div className="profile-image-container">
          <div className="profile-image">
            {/* Using public folder approach */}
            <img src={profileImage} alt="Liuren Wu" className="profile-img" />
          </div>
          
          <div className="article-badge">
            <span className="count">{profileData.articleCount}</span>
            <span className="label">Articles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;