import React, { useState } from "react";
import "../components/CSS/ClassesSection.css";

const classesData = [
  {
    id: 1,
    title: "FIN9797: Options Markets",
    details: `Section UWA, Fall 2024. \n\n\nTime: Wednesdays, 6:05-9:00pm\n\n\nOffice Hours: Wednesdays, 5:00-6:00 pm. Or by appointment. liuren.wu@baruch.cuny.edu.\n\nOverview\nThe class provides students with a basic understanding of the derivatives market, with a focus on options. The class will highlight the fundamental differences between derivatives and primary securities in both valuation and investment. The class will introduce the concepts of replication, hedging, relative valuation, and arbitrage trading.`
  },
  {
    id: 2,
    title: "FIN4750: Options Markets",
    details: "This course covers advanced topics in options trading, including strategies for risk management and market analysis."
  },
  {
    id: 3,
    title: "FIN890: Options Markets",
    details: "An introduction to the mathematical models used for option pricing, including Black-Scholes and binomial tree models."
  }
];

const ClassesSection = () => {
  const [expandedClass, setExpandedClass] = useState(classesData[0].id);

  const toggleClass = (id) => {
    setExpandedClass(expandedClass === id ? null : id);
  };

  return (
    <section className="classes-container">
      <h2 className="classes-title">Classes</h2>
      <div className="classes-list">
        {classesData.map((course) => (
          <div key={course.id} className="class-item">
            <button
              className={`class-header ${expandedClass === course.id ? "active" : ""}`}
              onClick={() => toggleClass(course.id)}
            >
              {course.title}
              <span className="toggle-icon">{expandedClass === course.id ? "−" : "+"}</span>
            </button>
            {expandedClass === course.id && (
              <div className="class-details">
                <p>{course.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassesSection;
