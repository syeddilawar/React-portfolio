import React, { Component } from "react";
import "../style/App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./Main";

class NavBar extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="SYED DILAWAR" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">Resuma</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="S-D Portfolio">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">Resuma</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default NavBar;
