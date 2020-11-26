import React, { Component } from "react";
import { Card, CardTitle, CardText } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <Card
          shadow={0}
          style={{ width: "720px", margin: "auto", marginTop: "20px" }}
        >
          <CardTitle
            style={{
              color: "#fff",
              height: "450px",
              background: 'url("/portrait.jpg") center / cover',
              borderRadius: "5px",
            }}
          >
            Bryan Guilas
          </CardTitle>
          <CardText>
            {/* Hi there! my name is Bryan Guilas am currently enrolled at the UC
            Berkeley Extension Coding Boot Camp. I will be graduating in January
            of 2021 and I hope to use my new skills to become a Web Developer. I
            consider himself a "forever student" and I am eager to build my
            academic foundations in computer programming and stay in tune with
            the fast pace evolution of the tech industry. I enjoy reading
            anything that keeps me curious, a good cup of coffee, I am an avid
            cyclist and of course I love to code! I thrive in a team environment
            and I have a team-oriented personality. I am fueled by my passion
            and I am extremply inspired to be the best I can be. */}
          </CardText>
        </Card>
      </div>
    );
  }
}

export default AboutMe;
