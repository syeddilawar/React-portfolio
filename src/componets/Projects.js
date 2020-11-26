import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  IconButton,
  CardText,
  CardMenu,
} from "react-mdl";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ width: "720px", margin: "auto" }}>
          <CardText style={{ textAlign: "center", text: "Bold" }}>
            Day Planner is a app Which help you plane your day
          </CardText>
          <CardTitle
            style={{
              color: "#fff",
              height: "450px",
              background: `url("./image/dayplanner.png") center / cover`,
            }}
          ></CardTitle>

          <CardActions border>
            <a
              href="https://github.com/syeddilawar/day-planner"
              target="_blank"
            >
              <Button colored style={{ marginLeft: "30%" }}>
                Github
              </Button>
            </a>
            <a
              href="https://syeddilawar.github.io/day-planner/"
              target="_blank"
            >
              <Button colored style={{ marginLeft: "75px" }}>
                Try App
              </Button>
            </a>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ width: "720px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "450px",
              background:
                "url(https://northernvirginiamag.com/wp-content/uploads/20) center / cover",
            }}
          ></CardTitle>
          <CardText>
            Movie information at a click of a button using the OMDB API.
          </CardText>
          <CardActions border>
            <a href="https://github.com/BGM6/moviep" target="_blank">
              <Button colored style={{ marginLeft: "30%" }}>
                Github
              </Button>
            </a>
            <a href="https://bgm6.github.io/pp/" target="_blank">
              <Button colored style={{ marginLeft: "75px" }}>
                Try App
              </Button>
            </a>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ width: "720px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "450px",
              background:
                "url(https://blog.connectionsacademy.com/wp-content/uploads/note-taking-1.jpg) center / cover",
            }}
          ></CardTitle>
          <CardText>A simple web app to take your notes.</CardText>
          <CardActions border>
            <a href="https://github.com/ker" target="_blank">
              <Button colored style={{ marginLeft: "30%" }}>
                Github
              </Button>
            </a>
            <a href="https://notetakerexercise.hpp.com/" target="_blank">
              <Button colored style={{ marginLeft: "75px" }}>
                Try App
              </Button>
            </a>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={5} style={{ width: "720px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "450px",
              background:
                "url(htcom/s/files/792/products/Under_Conruct600x600_crop_center.jpg?v=1569104295) center / cover",
            }}
          ></CardTitle>
          <CardText>Coming soon...</CardText>
          <CardActions border>
            <a href="#" target="_blank">
              <Button colored style={{ marginLeft: "30%" }}>
                Github
              </Button>
            </a>
            <a href="#" target="_blank">
              <Button colored style={{ marginLeft: "75px" }}>
                Try App
              </Button>
            </a>
          </CardActions>
        </Card>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Day Planner</Tab>
          <Tab>Code-Quiz</Tab>
          <Tab>weather-Dashboard</Tab>
          <Tab>Employee-summary</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="project-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
