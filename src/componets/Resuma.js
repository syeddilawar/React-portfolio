import React, { Component } from "react";
import { Card, CardTitle } from "react-mdl";

class Resuma extends Component {
  render() {
    return (
      <div className="Resuma">
        <h1 style={{ textAlign: "center", text: "Bold" }}>RESUMA</h1>
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
          ></CardTitle>
        </Card>
      </div>
    );
  }
}

export default Resuma;
