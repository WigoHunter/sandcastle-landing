import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const footer = useRef(null);
  const [email, setEmail] = useState("");

  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div className="App">
      <header className="App-header">
        <div className="titles">
          <h2>A New Kind of Business Card</h2>
          <p>
            Enabled by NFC Technology - <br />
            just like Apple Cards
          </p>
          <button onClick={() => scrollToRef(footer)}>Join Waitlist</button>
        </div>
        <div className="header-pic" />
      </header>

      <div className="info">
        <div className="title-wrapper">
          <h3>No Waste,</h3>
          <h3>No Waits,</h3>
          <h3 className="big-color-title">Instant Connection.</h3>
          <p className="description">
            We remove the awkwardness from networking, <br />
            so you can spend more time cultivating your relationships.
          </p>
        </div>
      </div>

      <div className="footer" id="footer" ref={footer}>
        <div className="words">
          <h3>Launching Soon!</h3>
          <p>Subscribe now to access the launch-day deal of 50% off.</p>
        </div>
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us4.list-manage.com/subscribe/post?u=28dfefda59d885f2b409f916a&amp;id=c05b220e77"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <input
                type="email"
                value={email}
                name="EMAIL"
                onChange={e => setEmail(e.target.value)}
                class="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
              <input
                type="submit"
                value="Join Waitlist"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button btn-submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
