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
              src="src/image/b97c90df-cefe-4d62-bc9d-b827b7eb5fd7.jpeg"
              alt="Myimage"
              className="img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <h3>
                Hello I am Syed Dilawar, Living in California Bay-area My name
                is syed i am pursuing my dream come true bootcamp as a software
                developer in UC-Berkely, California
              </h3>
              <hr />
              <p>
                HTML/CSS | Bootstrap | jQuery | JavaScript | React/Redux |
                NodeJS | Express | MySQL | MongoDB
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
