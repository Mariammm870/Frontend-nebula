const Homepage = () => {
  return (
    <main className="homepage">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Welcome to Nebula</h1>
          <p className="hero-sub">
            A minimal, fast React starter built with Vite — ready for your
            ideas.
          </p>
          <div className="hero-cta">
            <button className="btn primary">Get started</button>
            <a href="#features" className="btn ghost">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>What you'll get</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Blazing fast dev</h3>
            <p>Hot Module Replacement and instant reloads with Vite.</p>
          </div>
          <div className="feature-card">
            <h3>Modern React</h3>
            <p>
              Function components, hooks, and a clean structure to grow from.
            </p>
          </div>
          <div className="feature-card">
            <h3>Easy to extend</h3>
            <p>Simple components and styles so you can customize quickly.</p>
          </div>
        </div>
      </section>

      <footer className="homepage-footer">
        <p>Made with ♥ using Vite + React</p>
      </footer>
    </main>
  );
};

export default Homepage;
