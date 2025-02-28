import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database"; // Firebase imports
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/creds"; // Firebase config
import { BookOpen, Search, Send, Volume2 } from "lucide-react"; // Lucide icons
import "../components/CSS/InsightsSection.css";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const InsightsSection = () => {
  const [activeTab, setActiveTab] = useState("Publications");
  const [currentPages, setCurrentPages] = useState({
    Publications: 1,
    "Working Papers": 1,
    Talks: 1,
  });

  const [papersData, setPapersData] = useState({
    Publications: [],
    "Working Papers": [],
    Talks: [],
  });

  useEffect(() => {
    loadPapers(import.meta.env.VITE_TOKEN); // Fetch papers from Firebase
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

          // Categorize papers and format data correctly
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

          // Sorting latest first (Descending order by year)
          const sortByYear = (a, b) => {
            const yearA = parseInt(a.PublishingYear) || 0;
            const yearB = parseInt(b.PublishingYear) || 0;
            return yearB - yearA; // Latest first
          };

          publications.sort(sortByYear);
          workingPapers.sort(sortByYear);
          talks.sort(sortByYear);

          setPapersData({
            Publications: publications,
            "Working Papers": workingPapers,
            Talks: talks,
          });
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
    const currentPage = currentPages[activeTab];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = (data) => Math.ceil(data.length / itemsPerPage);

  const renderPagination = (data) => {
    const totalPageCount = totalPages(data);
    const currentPage = currentPages[activeTab];
    const pageNumbers = [];

    if (totalPageCount <= 5) {
      for (let i = 1; i <= totalPageCount; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPageCount - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPageCount - 2) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPageCount);
    }

    return (
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;
        </button>

        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              className={currentPage === page ? "active" : ""}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="pagination-ellipsis">
              ...
            </span>
          )
        )}

        <button
          disabled={currentPage === totalPageCount}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    );
  };

  const searchPaper = (e) => {
    var searchTerm = e.target.value; // Get the value from the input field

    searchTerm = searchTerm.toLowerCase(); // Convert the search term to lowercase

    setState({ s_query: searchTerm, currentPage: 0 }); // Update the search query state
    console.log(searchTerm);
  };

  const renderContent = () => {
    const data = papersData[activeTab] || [];

    return (
      <>
        {getPaginatedData(data).map((item, index) => (
          <div key={index} className="insight-item">
            {/* Publications Format */}
            {activeTab === "Publications" && (
              <>
                <p className="insight-author">{item.Authors}</p>
                <p className="insight-title">
                  {item.PaperLink ? (
                    <a
                      href={item.PaperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.Title}
                    </a>
                  ) : (
                    item.Title
                  )}
                </p>
                <p className="insight-journal">
                  {item.Journal}, {item.PublishingYear}
                </p>
              </>
            )}

            {/* Working Papers Format (With Links) */}
            {activeTab === "Working Papers" && (
              <>
                <p className="insight-author">{item.Authors}</p>
                <p className="insight-title">
                  {item.PaperLink ? (
                    <a
                      href={item.PaperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.Title}
                    </a>
                  ) : (
                    item.Title
                  )}
                </p>
                <p className="insight-journal">{item.PublishingYear}</p>
              </>
            )}

            {/* Talks Format (With Links) */}
            {activeTab === "Talks" && (
              <>
                <p className="insight-title">
                  {item.PaperLink ? (
                    <a
                      href={item.PaperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.Title}
                    </a>
                  ) : (
                    item.Title
                  )}
                </p>
                <p className="insight-journal">
                  {item.Journal}, {item.PublishingYear}
                </p>
              </>
            )}
          </div>
        ))}
        {renderPagination(data)}
      </>
    );
  };

  return (
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
          <input
            className="search"
            placeholder="Search"
            type="text"
            onChange={searchPaper}
          />
        </div>
      </div>
      <div className="insights-content">{renderContent()}</div>
    </section>
  );
};

export default InsightsSection;
