import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      title: "Multiple Templates",
      description:
        "Choose from Europass and Classic professional templates designed for success.",
    },
    {
      title: "Full Customization",
      description:
        "Customize colors, fonts, and layouts to match your personal brand perfectly.",
    },
    {
      title: "Export to PDF",
      description:
        "Download your resume as a high-quality PDF ready to send to employers.",
    },
    {
      title: "AI-Powered",
      description:
        "Get intelligent suggestions to enhance your resume content and stand out.",
    },
    {
      title: "Secure & Private",
      description:
        "Your data is encrypted and stored securely. We never share your information.",
    },
    {
      title: "Shareable Links",
      description:
        "Create public preview links to share your resume online effortlessly.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">
          Everything You Need to Build a Perfect Resume
        </h2>
        <p className="features-subtitle">
          Powerful features designed to help you create professional resumes
          that get you hired
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
