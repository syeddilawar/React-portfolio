import React, { Component } from "react";
import "../style/FrontPage.css";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="/src/image/b97c90df-cefe-4d62-bc9d-b827b7eb5fd7.jpeg"
              alt="Myimage"
              className="img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | jQuery | JavaScript | React/Redux |
                NodeJS | Express | MySQL | MongoDB
              </p>
              <div className="social-links">
                <a
                  href="http://www.linkedin.com/in/wasim-dilawer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>

                <a
                  href="https://github.com/syeddilawar?tab=repositories"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
