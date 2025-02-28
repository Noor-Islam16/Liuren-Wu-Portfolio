import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database"; // Firebase imports
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/creds"; // Firebase config
import "../components/CSS/ContactMe.css";
import { splitString } from "../assets/helper/splitString";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function ContactMe({ isOpen, onClose }) {
  const [profileData, setProfileData] = useState({
    name: "",
    title: {
      highlighted: "",
      regular: "",
    },
    university: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (isOpen) {
      loadProfileData(import.meta.env.VITE_TOKEN); // Load data using the current profile token
    }
  }, [isOpen]);

  const loadProfileData = (uid) => {
    var userRef = ref(database, "profile/" + uid);
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const split = splitString(data.designation);
          document.title = data.firstName + " " + data.lastName;
          setProfileData({
            name: `${data.firstName} ${data.lastName}`,
            title: {
              highlighted: split.firstPart,
              regular: split.secondPart,
            },
            university: data.university,
            email: data.email,
            phone: data.phone,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{profileData.name}</h2>
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <p>
            {profileData.title.highlighted} {profileData.title.regular}
          </p>

          <p>{profileData.university}</p>
        </div>
        <div className="modal-uni">
          <p style={{ marginBottom: "5px" }}>E-mail: {profileData.email}</p>
          {profileData.phone && <p>Tel: {profileData.phone}</p>}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
