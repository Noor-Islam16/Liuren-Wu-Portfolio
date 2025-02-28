import ProfilePage from "./Pages/ProfilePage";
import AboutSection from "./Pages/AboutSection";
import InsightsSection from "./Pages/InsightsSection";
import ClassesSection from "./Pages/ClassesSection";
import Footer from "./Pages/Footer";
import ContactMe from "./Pages/ContactMe";

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
      <Footer />
    </>
  );
}

export default App;
