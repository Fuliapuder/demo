import React, { Component } from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./EkleButton.css";

export default class EkleButton extends Component {
  render() {
    return (
      <div className="eklebutton">
        <p className="eklearti" onClick={() => this.console.log("ekle")}>+</p>
      </div>
    );
  }
}
