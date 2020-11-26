import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Bryan Guilas</h2>
            <img
              src="/contact.jpg"
              alt="contact-image"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Cell>
          <Cell col={6}>
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
                    Wasimdilawer@@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
