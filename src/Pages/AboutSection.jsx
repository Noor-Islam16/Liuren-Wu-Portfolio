import React from "react";
import "../components/CSS/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">About</h2>
      <p className="about-text">
        <span className="first-letter">L</span>iuren Wu is the Wollman Distinguished Professor of Finance at Zicklin
        School of Business, Baruch College, City University of New York.
        Professor Wu's research interests include option pricing, credit risk
        and term structure modeling, market microstructure, and general asset
        pricing. Professor Wu has published over 50 articles, many of them in
        top finance journals such as the Journal of Finance, the Journal of
        Financial Economics, Review of Financial Studies, the Journal of
        Financial and Quantitative Analysis, Management Science, and Journal of
        Monetary Economics. Mr. Wu has worked extensively as consultants in the
        finance industry, including data vendors, investment banks, and several
        fixed income, equity, and equity options hedge funds and market making
        firms. He has developed statistical arbitrage strategies, risk
        management procedures, optimal trade execution and market making
        strategies, and quantitative models for pricing fixed income and equity
        derivative securities.
      </p>
    </section>
  );
};

export default AboutSection;
