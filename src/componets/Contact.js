import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={10}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton, sans-serif",
                    }}
                  >
                    <i className="fa fa-phone-square aria-hidden=true" />
                    +1-830-203-2509
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton, sans-serif",
                    }}
                  >
                    <i className="fa fa-envelope aria-hidden=true" />
                    Wasimdilawer@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
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

export default Contact;
