import React, { Component } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./Category.css";

export default class Ogretmen extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          ogretmenler: [],
          columnDefs: [
            { headerName: "Adı", field: "ad" },
            { headerName: "Soyadı", field: "soyad" },
            { headerName: "Unvanı", field: "unvan" },
          ],
          rowData: [],
        };
      }
      
    
      apiCall = async () => {
        try {
          const response = axios({
            method: "get",
            url: "http://localhost:8080/ogretmen/listele",
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
            },
            data: null,
          });
          return response;
        } catch (error) {
          console.log(error);
        }
      };
    
      sonuclar = async () => {
        const sonuc = await this.apiCall();
        const ogretmenler = sonuc.data.data;
        this.setState({ rowData: ogretmenler });
        console.log(ogretmenler);
      };
   
    }