import React, { Component } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./Category.css";

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kantinGiderleri: [],
      columnDefs: [
        { headerName: "T.C. Kimlik Numarası", field: "tc" },
        { headerName: "Adı", field: "ad" },
        { headerName: "Soyadı", field: "soyad" },
      ],
      columnDefs2: [
        { headerName: "Unvan", field: "unvan" },
        { headerName: "Adı", field: "ad" },
        { headerName: "Soyadı", field: "soyad" },
      ],
      columnDefs3: [{ headerName: "Branşlar", field: "bransAdi" }],

      columnDefs4: [
        { headerName: "öğrenci", field: "ogrenciRef" },
        { headerName: "ürün", field: "urunRef" },
        { headerName: "tarih", field: "tarih" },
      ],

      rowData: [],
      temporary: "",
    };
  }

  apiCall = async () => {
    this.setState({ temporary: "isStudent" });
    try {
      const response = axios({
        method: "get",
        url: "http://localhost:8080/ogrenci/listele",
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

  apiCallOgretmen = async () => {
    this.setState({ temporary: "isTeacher" });
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
      this.setState({ isTeacher: false }, () =>
        console.log("False mu? " + this.state.isTeacher)
      );
    }
  };
  apiCallBrans = async () => {
    this.setState({ temporary: "isBrans" });
    try {
      const response = axios({
        method: "get",
        url: "http://localhost:8080/brans/listele",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        data: null,
      });
      return response;
    } catch (error) {
      console.log(error);
      this.setState({ isBrans: false }, () =>
        console.log("False mu? " + this.state.isBrans)
      );
    }
  };
  apiCallKantinGideri = async () => {
    this.setState({ temporary: "isKantingideri" });
    try {
      const response = axios({
        method: "get",
        url: "http://localhost:8080/kantingideri/listele",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        data: null,
      });
      return response;
    } catch (error) {
      console.log(error);
      this.setState({ isBrans: false }, () =>
        console.log("False mu? " + this.state.isBrans)
      );
    }
  };


  sonuclarOgrenci = async () => {
    const sonuc = await this.apiCall();
    const giderler = sonuc.data.data;
    this.setState({ rowData: giderler });
    console.log(giderler);
  };

  sonuclarOgretmen = async () => {
    const sonuc = await this.apiCallOgretmen();
    const giderler = sonuc.data.data;
    this.setState({ rowData: giderler });
    console.log(giderler);
  };
  sonuclarBrans = async () => {
    const sonuc = await this.apiCallBrans();
    const giderler = sonuc.data.data;
    this.setState({ rowData: giderler });
    console.log(giderler);
  };
  sonuclarKantingideri = async () => {
    const sonuc = await this.apiCallKantinGideri();
    const giderler = sonuc.data.data;
    this.setState({ rowData: giderler });
    console.log(giderler);
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="butonlar">
          <button className="buton" onClick={this.sonuclarOgrenci}>
            Öğrenciler
          </button>
          <button className="buton" onClick={this.sonuclarOgretmen}>
            Öğretmenler
          </button>
          <button className="buton" onClick={this.sonuclarKantingideri}>
            Kantin Giderleri
          </button>
          <button className="buton" onClick={this.sonuclarBrans}>
            Branşlar
          </button>
          <button className="buton" onClick={this.sonuclar}>
            Veliler
          </button>
          <button className="buton" onClick={this.sonuclar}>
            Sınıflar
          </button>
          <button className="buton" onClick={this.sonuclar}>
            Ürünler
          </button>
          <button className="buton" onClick={this.sonuclar}>
            Ders Programları
          </button>
        </div>
        <div
          className="ag-theme-alpine"
          style={{ height: "600px", width: "85%" }}
        >
          {this.state.temporary === "isStudent" && (
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
            />
          )}

          {this.state.temporary === "isTeacher" && (
            <AgGridReact
              columnDefs={this.state.columnDefs2}
              rowData={this.state.rowData}
            />
          )}
          {this.state.temporary === "isKantingideri" && (
            <AgGridReact
              columnDefs={this.state.columnDefs4}
              rowData={this.state.rowData}
            />
          )}
          {this.state.temporary === "isBrans" && (
            <AgGridReact
              columnDefs={this.state.columnDefs3}
              rowData={this.state.rowData}
            />
          )}

        </div>
      </div>
    );
  }
}
