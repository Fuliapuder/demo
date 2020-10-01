import React, { Component } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./GuncelleButton.css";


export default class Button extends Component {
  render() {
    return (
      <button className="guncellebutton" onClick={() => this.console.log("guncelle")}>
        Güncelle
      </button>
    );
  }
}
