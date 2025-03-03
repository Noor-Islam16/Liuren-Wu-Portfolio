import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/creds";
import { BookOpen, Search, Send, Volume2 } from "lucide-react";
import "../components/CSS/InsightsSection.css";
import { getPublishDate } from "../helper/getPublishDate";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const InsightsSection = () => {
  const [activeTab, setActiveTab] = useState("Publications");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPages, setCurrentPages] = useState({});
  const [papersData, setPapersData] = useState({
    Publications: [],
    "Working Papers": [],
    Talks: [],
  });

  useEffect(() => {
    loadPapers(import.meta.env.VITE_TOKEN);
  }, []);

  const loadPapers = (uid) => {
    var userRef = ref(database, "papers/" + uid);
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          let publications = [];
          let workingPapers = [];
          let talks = [];

          Object.keys(data).forEach((key) => {
            const paper = data[key];
            const formattedPaper = {
              key,
              Authors: paper.Authors || "",
              Title: paper.Title || "",
              PaperLink: paper["Paper Link"] || "",
              Journal: paper.Journal || "",
              PublishingYear: paper["Publishing Year"] || "",
            };

            if (paper["Paper Type"] === "Publications") {
              publications.push(formattedPaper);
            } else if (paper["Paper Type"] === "Working Papers") {
              workingPapers.push(formattedPaper);
            } else if (paper["Paper Type"] === "Talks") {
              talks.push(formattedPaper);
            }
          });

          // Sort latest first (Descending order by year)
          const sortByYear = (a, b) => {
            const yearA = parseInt(a.PublishingYear) || 0;
            const yearB = parseInt(b.PublishingYear) || 0;
            return yearB - yearA;
          };

          publications.sort(sortByYear);
          workingPapers.sort(sortByYear);
          talks.sort(sortByYear);

          const newPapersData = {
            Publications: publications,
            "Working Papers": workingPapers,
            Talks: talks,
          };

          setPapersData(newPapersData);

          // Set pages to the last page (so it starts from the last)
          const newCurrentPages = {};
          Object.keys(newPapersData).forEach((category) => {
            newCurrentPages[category] = Math.max(1, Math.ceil(newPapersData[category].length / itemsPerPage));
          });

          // Ensure active tab starts at its last page
          setCurrentPages(1);

        }
      })
      .catch((error) => {
        console.error("Error fetching papers:", error);
      });
  };

  const itemsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPages((prevPages) => ({
      ...prevPages,
      [activeTab]: page,
    }));
  };

  const getPaginatedData = (data) => {
    const currentPage = currentPages[activeTab] || 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = (data) => Math.max(1, Math.ceil(data.length / itemsPerPage));

  const renderPagination = (data) => {
    const totalPageCount = totalPages(data);
    const currentPage = currentPages[activeTab] || 1;

    if (totalPageCount === 0) return null;

    return (
      <div className="pagination-container">
        <button
          className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        <span className="pagination-info">
          {currentPage} of {totalPageCount}
        </span>

        <button
          className={`pagination-btn ${currentPage === totalPageCount ? "disabled" : ""}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPageCount}
        >
          &gt;
        </button>
      </div>
    );
  };

  const searchPaper = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPages((prevPages) => ({
      ...prevPages,
      [activeTab]: 1, // Reset to first page on search
    }));
  };

  const renderContent = () => {
    const data = papersData[activeTab] || [];
    const filteredData = data.filter(
      (item) =>
        item.Title.toLowerCase().includes(searchQuery) ||
        item.Authors.toLowerCase().includes(searchQuery) ||
        (item.Journal && item.Journal.toLowerCase().includes(searchQuery)) ||
        (item.PublishingYear && item.PublishingYear.toString().includes(searchQuery))
    );

    return (
      <>
        {getPaginatedData(filteredData).map((item, index) => (
          <div key={index} className="insight-item">
            <p className="insight-author">{item.Authors}</p>
            <p className="insight-title">
              {item.PaperLink ? (
                <a href={item.PaperLink} target="_blank" rel="noopener noreferrer">
                  {item.Title}
                </a>
              ) : (
                item.Title
              )}
            </p>
            <p className="insight-journal">{getPublishDate(item.PublishingYear)}</p>
          </div>
        ))}
        {renderPagination(filteredData)}
      </>
    );
  };

  return (
    <>
      <section className="insights-container">
        <div className="insights-box">
          <h2 className="insights-title">Insights</h2>
          <div className="sidebar">
            {["Publications", "Working Papers", "Talks"].map((tab) => (
              <button
                key={tab}
                className={`sidebar-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="icon-text-container">
                  {tab === "Publications" ? <BookOpen size={20} /> : null}
                  {tab === "Working Papers" ? <Send size={20} /> : null}
                  {tab === "Talks" ? <Volume2 size={20} /> : null}
                  <span className="tab-text">{tab}</span>
                </span>
              </button>
            ))}

            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input
                className="search"
                placeholder="Search"
                type="text"
                onChange={searchPaper}
              />
            </div>
          </div>
        </div>
        <div className="insights-content">{renderContent()}</div>
      </section>
    </>
  );
};

export default InsightsSection;
