function App() {
  return (
    <main className="page">
      <div className="grain" aria-hidden="true" />
      <div className="halo halo-a" aria-hidden="true" />
      <div className="halo halo-b" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#top" aria-label="The Deployment Company">
          <span className="brand-dot" aria-hidden="true" />
          <span>The Deployment Company</span>
        </a>
        <a className="nav-link" href="https://aphelion.in">
          aphelion.in
          <span aria-hidden="true">→</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-text">
          <p className="kicker">An Aphelion Labs studio</p>
          <h1>
            AI deployment, <em>at scale</em>.
          </h1>
          <p className="lede">
            We deploy frontier AI into the workflows that already run your
            company.
          </p>
          <a className="cta" href="https://aphelion.in">
            <span>Start with Aphelion</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <aside
          className="console"
          role="complementary"
          aria-label="Deployment status"
        >
          <div className="console-head">
            <span className="status-dot" aria-hidden="true" />
            <span className="console-id">Deployment.001</span>
            <span className="console-meta">Live</span>
          </div>

          <dl className="console-body">
            <div>
              <dt>Status</dt>
              <dd>Operational</dd>
            </div>
            <div>
              <dt>Posture</dt>
              <dd>Forward</dd>
            </div>
            <div>
              <dt>Workloads</dt>
              <dd>12 Live</dd>
            </div>
            <div>
              <dt>Humans</dt>
              <dd>In the loop</dd>
            </div>
          </dl>

          <div className="console-foot">
            <span>Forward deployed</span>
            <span>Aphelion Labs</span>
          </div>
        </aside>
      </section>

      <section className="quote" aria-label="Thesis">
        <p>
          <em>Less theater.</em> More deployed.
        </p>
      </section>

      <section className="rail" aria-label="Capabilities">
        <ol>
          <li>
            <span>01</span>Integrate
          </li>
          <li>
            <span>02</span>Evaluate
          </li>
          <li>
            <span>03</span>Operate
          </li>
          <li>
            <span>04</span>Scale
          </li>
        </ol>
        <p className="rail-note">
          Hermes <span aria-hidden="true">·</span> OpenClaw{" "}
          <span aria-hidden="true">·</span> Enterprise rollouts
        </p>
      </section>

      <footer className="foot">
        <div>
          <p className="kicker">Deploy</p>
          <h2>
            Ready when <em>you</em> are.
          </h2>
        </div>
        <a className="cta light" href="https://aphelion.in">
          <span>aphelion.in</span>
          <span aria-hidden="true">→</span>
        </a>
      </footer>

      <div className="foot-meta">
        <span>© {new Date().getFullYear()} Aphelion Labs</span>
        <span className="sep" aria-hidden="true">·</span>
        <a href="./privacy.html">Privacy</a>
        <span className="sep" aria-hidden="true">·</span>
        <a href="./terms.html">Terms</a>
      </div>
    </main>
  );
}

export default App;
