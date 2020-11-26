import React, { Component } from "react";
import "../style/LandingPage.css";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
              alt="Avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | jQuery | JavaScript | React | NodeJS |
                Express | MySQL | MongoDB | Python
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/bryan-guilas-9a00891ab/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/BGM6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
                {/* Freecodecamp */}
                <a
                  href="https://www.freecodecamp.org/fccccb51e63-1c0a-4caa-bcff-a1f314e4ea96"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-free-code-camp" aria-hidden="true" />
                </a>
                {/* Udemy */}
                <a
                  href="https://www.udemy.com/user/bryan-guilas/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-chalkboard-teacher" aria-hidden="true" />
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
