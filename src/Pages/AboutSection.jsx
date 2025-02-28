import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database"; // Firebase imports
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/creds"; // Firebase config
import "../components/CSS/AboutSection.css";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const AboutSection = () => {
  const [aboutContent, setAboutContent] = useState("");

  useEffect(() => {
    loadSocialMedia(import.meta.env.VITE_TOKEN); // Load data using the current profile token
  }, []);

  const loadSocialMedia = (uid) => {
    var userRef = ref(database, "social-media/" + uid);
    get(userRef)
      .then((snapshot) => {
        // console.log(snapshot.val());
        if (snapshot.exists()) {
          const data = snapshot.val();
          setAboutContent(data.about || "");
        }
      })
      .catch((error) => {
        console.error("Error fetching about data:", error);
      });
  };

  return (
    <section className="about-container">
      <h2 className="about-title">About</h2>
      <p className="about-text">
        {aboutContent ? (
          <span dangerouslySetInnerHTML={{ __html: aboutContent }} />
        ) : (
          "Loading..."
        )}
      </p>
    </section>
  );
};

export default AboutSection;
