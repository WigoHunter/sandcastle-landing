import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div className="landing" />
        <div className="titles">
          <h2>A New Kind of Business Card</h2>
          <p>Enabled by NFC Technology - just like Apple Cards</p>

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
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button btn-submit"
                />
              </div>
            </form>
          </div>
        </div>
      </header>

      <div className="info">
        <h3>Instant Connection.</h3>
        <p>
          without requiring people to take out their phones, and have
          conversation being interrupted.
        </p>
      </div>

      <div className="footer">
        <p>Made by a group of master students from Cornell Tech.</p>
      </div>
    </div>
  );
}

export default App;
