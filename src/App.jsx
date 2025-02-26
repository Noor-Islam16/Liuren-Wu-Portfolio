import ProfilePage from "./Pages/ProfilePage";
import AboutSection from "./Pages/AboutSection";
import InsightsSection from "./Pages/InsightsSection";
import ClassesSection from "./Pages/ClassesSection";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
      <ProfilePage />
      <div id="about">
        <AboutSection />
      </div>
      <div id="publications">
        <InsightsSection />
      </div>
      {/* <div id="classes">
        <ClassesSection />
      </div> */}
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
