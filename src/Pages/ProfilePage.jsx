import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database"; // Firebase imports
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/creds"; // Firebase config
import "../components/CSS/ProfilePage.css";
import profileImage from "../assets/pro2.png";
import Pattern from "../assets/designer.png";
import { splitString } from "../assets/helper/splitString";
import ContactMe from "./ContactMe";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [profileData, setProfileData] = useState({
    name: "",
    title: {
      highlighted: "",
      regular: "",
    },
    articleCount: "50+",
    tabs: ["About", "Publications", "Classes", "Contact"],
    profileImage: "",
    resume: "",
  });

  useEffect(() => {
    loadProfileData(import.meta.env.VITE_TOKEN); // Load data using the current profile token
  }, []);

  const loadProfileData = (uid) => {
    var userRef = ref(database, "profile/" + uid);
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const split = splitString(data.designation);
          document.title = data.firstName + " " + data.lastName;
          setProfileData((prevData) => ({
            ...prevData,
            name: `${data.firstName} ${data.lastName}`,
            title: {
              highlighted: split.firstPart,
              regular: split.secondPart,
            },
            profileImage: import.meta.env.VITE_API + "images/" + data.logo,
            resume: data.resume || "",
          }));
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
      className="profile-container"
      style={{
        backgroundImage: `url(${Pattern})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="profile-content">
        <div className="left-nav">
          <div className="nav-links">
            {profileData.tabs.map((tab) => (
              <React.Fragment key={tab}>
                <button
                  // className={`nav-link ${
                  //   activeTab === tab.toLowerCase() ? "active" : ""
                  // }`}
                  className="nav-link"
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>

                {tab.toLowerCase() === "classes" && profileData.resume && (
                  <button
                    className="nav-link"
                    onClick={() => window.open(profileData.resume, "_blank")}
                  >
                    CV
                  </button>
                )}
              </React.Fragment>
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
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactMe
        isOpen={activeTab === "contact"}
        onClose={() => setActiveTab("")}
      />
    </div>
  );
};

export default ProfilePage;
