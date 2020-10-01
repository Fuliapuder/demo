import React, { Component } from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./DeleteButton.css";

export default class Button extends Component {
  render() {
    return (
      <button className="deletebutton" onClick={() => this.console.log("sil")}>
        SİL
      </button>
    );
  }
}
