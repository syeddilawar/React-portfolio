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
          <CardTitle
            style={{
              color: "#fff",
              height: "450px",
              background: `url(https://images.unsplash.com/photo-1540189549336-e?ixlib=rb-) center / cover`,
            }}
          ></CardTitle>
          <CardText>
            Search for recipes and the drinks to go alongside your meal with The
            Home Chef.
          </CardText>
          <CardActions border>
            <a href="https://github.com/30" target="_blank">
              <Button colored style={{ marginLeft: "30%" }}>
                Github
              </Button>
            </a>
            <a href="https://huqian301.github." target="_blank">
              <Button colored style={{ marginLeft: "75px" }}>
                Live Demo
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
                Live Demo
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
                Live Demo
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
                "url(htcom/s/files/792/products/Under_Construction_copy_600x600_crop_center.jpg?v=1569104295) center / cover",
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
                Live Demo
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
          <Tab>The Home Chef</Tab>
          <Tab>Movie Info Finder</Tab>
          <Tab>My Note Taker</Tab>
          <Tab>Project 2 Coming Soon</Tab>
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
