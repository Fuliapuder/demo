import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ad: "",
      soyad: "",
      tc: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  apply = () => {
    console.log(this.state.tc);
  };

  render() {
    const { ad, soyad, tc } = this.state;

    return (
      <div className="forms">
        <div className="input">
          <TextField
            name="tc"
            id="standard-basic"
            label="TCK"
            value={tc}
            onChange={this.changeHandler}
          />
        </div>
        <div className="input">
          <TextField name="ad" id="standard-basic" label="Adı" value={ad} 
      onChange={this.changeHandler}
          
          />
        </div>
        <div className="input">
          <TextField
            name="soyad"
            id="standard-basic"
            label="Soyadı"
            value={soyad}
            onChange={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}
