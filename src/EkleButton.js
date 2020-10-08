import React, { Component } from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./EkleButton.css";
import Form from "./Form";

export default class EkleButton extends Component {
  

  render() {
    return (
      <div className="addContainer">
        <div className="eklebutton">
          <p className="eklearti" onClick={() => this.child.apply()}>
            +
          </p>
        </div>
        <div style={{ marginLeft: "100px" }}>
          <Form
            ref={(instance) => {
              this.child = instance;
            }}
          />
        </div>
      </div>
    );
  }
}
