import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import FeaturesSection from "./components/FeaturesSection";
import CtaSection from "./components/CtaSection";

function App() {
  console.log("App component is rendering!");
  return (
    <>
      <NavBar />
      <Homepage />
      <FeaturesSection />
      <CtaSection />
    </>
  );
}

export default App;
