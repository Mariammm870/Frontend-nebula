import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import FeaturesSection from "./components/FeaturesSection";
import CtaSection from "./components/CtaSection";
import TemplatesPage from "./Pages/TemplatesPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Builder from "./Pages/Builder";
import { ResumeProvider } from "./contexts/ResumeContext";
import { CVsProvider } from "./contexts/CVsContext";

function App() {
  console.log("App component is rendering!");
  const toRenderNav = ["/", "/templates", "/signin", "/signup"];
  const location = useLocation();
  const showNav = toRenderNav.includes(location.pathname);
  return (
    <div className="App">
      {/* NavBar shown on all pages */}
      <ResumeProvider>
        <CVsProvider>
          {showNav && <NavBar />}

          <Routes>
            {/* Home route with all sections */}
            <Route
              path="/"
              element={
                <>
                  <Homepage />
                  <FeaturesSection />
                  <CtaSection />
                </>
              }
            />

            {/* Auth routes - just the form components */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/templates" element={<TemplatesPage />} />
            {/* Allow nested/template-specific routes like /builder/classic */}
            <Route path="/builder" element={<Builder />} />
          </Routes>
        </CVsProvider>
      </ResumeProvider>
    </div>
  );
}

export default App;
