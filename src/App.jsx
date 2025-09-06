import AOS from "aos";
import "aos/dist/aos.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { useEffect } from "react";
import HomeScreen from "./pages";
import TermsOfServiceScreen from "./pages/terms";
import PrivacyPolicyScreen from "./pages/privacy";
import { Footer, Navbar } from "./components";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyScreen />} />
              <Route path="/terms-of-service" element={<TermsOfServiceScreen />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
