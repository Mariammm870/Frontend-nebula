import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import FeaturesSection from "./components/FeaturesSection";
import CtaSection from "./components/CtaSection";
import TemplatesPage from "./Pages/TemplatesPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  console.log("App component is rendering!");
  return (
    <div className="App">
      {/* NavBar shown on all pages */}
      <NavBar />

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
      </Routes>
    </div>
  );
}

export default App;
