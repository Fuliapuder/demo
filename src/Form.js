import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./Form.css";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
        ad: "",
      soyad: "",
      tc: "",
      sinifRef: "",
    
    };
    
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  apply = async () => {
    try {
      
      const response = axios({
        method: "post",
        url: "http://localhost:8080/ogrenci/ekle",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        data: this.state,
      });
      return response;
    } catch (error) {
      console.log(error);
      this.setState({ isTeacher: false }, () =>
        console.log("False mu? " + this.state.isTeacher)
      );
    }

    console.log(this.state.tc);
  };

  render() {
    const { ad, soyad, tc, sinifRef } = this.state;
    

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
          <TextField
            name="ad"
            id="standard-basic"
            label="Adı"
            value={ad}
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
        <div className="input">
          <TextField
            name="sinifRef"
            id="standard-basic"
            label="Sınıf"
            value={sinifRef}
            onChange={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}
