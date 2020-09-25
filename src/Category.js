import React, { Component } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./Category.css";
import* as moment from 'moment';

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
      columnDefs4: [{ headerName: "Branşlar", field: "bransAdi" }],

      columnDefs3: [
        { headerName: "öğrenci", field: "ogrenciRef.ad" },
        { headerName: "ürün", field: "urunRef.urunAdi" },
        {
          headerName: 'Tarih',
          field: 'tarih',
          minWidth: 150,
          maxWidth: 150,
          valueFormatter: function (params) {
              return moment(params.value).format('DD-MM-YYYY');
          },
      },
      ],
      columnDefs5: [
        { headerName: "Ad", field: "ad" },
        { headerName: "Soyad", field: "soyad" },
        { headerName: "Telefon", field: "tel" },
      ],
      columnDefs6: [
        { headerName: "Şube", field: "sube" },
        { headerName: "Sınıf", field: "sinif" },
        
      ],
      columnDefs7: [
        { headerName: "Ürün Adı", field: "urunAdi" },
        { headerName: "Birim Fiyatı", field: "fiyat" },
        
      ],
      columnDefs8: [
        {
          headerName: 'Gün',
          field: 'gun',
          minWidth: 150,
          maxWidth: 150,
          valueFormatter: function (params) {
              return moment(params.value).format('DD-MM-YYYY');
          },
      },
        { headerName: "Öğretmen Adı", field: "ogretmen_ref1.ad" },
        { headerName: "Öğretmen Soyadı", field: "ogretmen_ref1.soyad" },
        { headerName: "Öğretmen Adı", field: "ogretmen_ref2.ad" },
        { headerName: "Öğretmen Soyadı", field: "ogretmen_ref1.soyad" },
        { headerName: "Öğretmen Adı", field: "ogretmen_ref3.ad" },
        { headerName: "Öğretmen Soyadı", field: "ogretmen_ref1.soyad" },
        { headerName: "Öğretmen Adı", field: "ogretmen_ref4.ad" },
        { headerName: "Öğretmen Soyadı", field: "ogretmen_ref1.soyad" },
        { headerName: "Öğretmen Adı", field: "ogretmen_ref5.ad" },
        { headerName: "Öğretmen Soyadı", field: "ogretmen_ref1.soyad" },
        { headerName: "Öğretmen Adı", field: "ogretmen_ref6.ad" },
        { headerName: "Öğretmen Soyadı", field: "ogretmen_ref1.soyad" },
        
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
  apiCallVeliler = async () => {
    this.setState({ temporary: "isVeliler" });
    try {
      const response = axios({
        method: "get",
        url: "http://localhost:8080/veli/listele",
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
        console.log("False mu? " + this.state.isveliler)
      );
    }
  };
  apiCallSiniflar = async () => {
    this.setState({ temporary: "isSiniflar" });
    try {
      const response = axios({
        method: "get",
        url: "http://localhost:8080/sinif/listele",
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
        console.log("False mu? " + this.state.isSiniflar)
      );
    }
  };
  apiCallUrunler = async () => {
    this.setState({ temporary: "isUrunler" });
    try {
      const response = axios({
        method: "get",
        url: "http://localhost:8080/urunler/listele",
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
        console.log("False mu? " + this.state.isUrunler)
      );
    }
  };
  apiCallDersprogrami = async () => {
    this.setState({ temporary: "isDersprogrami" });
    try {
      const response = axios({
        method: "get",
        url: "http://localhost:8080/dersprogrami/listele",
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
        console.log("False mu? " + this.state.isDersprogrami)
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
  sonuclarVeliler = async () => {
    const sonuc = await this.apiCallVeliler();
    const giderler = sonuc.data.data;
    this.setState({ rowData: giderler });
    console.log(giderler);
  };
  sonuclarSiniflar = async () => {
    const sonuc = await this.apiCallSiniflar();
    const giderler = sonuc.data.data;
    this.setState({ rowData: giderler });
    console.log(giderler);
  };
  sonuclarUrunler = async () => {
    const sonuc = await this.apiCallUrunler();
    const giderler = sonuc.data.data;
    this.setState({ rowData: giderler });
    console.log(giderler);
  };
  sonuclarDersprogrami = async () => {
    const sonuc = await this.apiCallDersprogrami();
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
          <button className="buton" onClick={this.sonuclarVeliler}>
            Veliler
          </button>
          <button className="buton" onClick={this.sonuclarSiniflar}>
            Sınıflar
          </button>
          <button className="buton" onClick={this.sonuclarUrunler}>
            Ürünler
          </button>
          <button className="buton" onClick={this.sonuclarDersprogrami}>
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
              columnDefs={this.state.columnDefs3}
              rowData={this.state.rowData}
            />
          )}
          {this.state.temporary === "isBrans" && (
            <AgGridReact
              columnDefs={this.state.columnDefs4}
              rowData={this.state.rowData}
            />
          )}
          {this.state.temporary === "isVeliler" && (
            <AgGridReact
              columnDefs={this.state.columnDefs5}
              rowData={this.state.rowData}
            />
          )}
          {this.state.temporary === "isSiniflar" && (
            <AgGridReact
              columnDefs={this.state.columnDefs6}
              rowData={this.state.rowData}
            />
          )}
          {this.state.temporary === "isUrunler" && (
            <AgGridReact
              columnDefs={this.state.columnDefs7}
              rowData={this.state.rowData}
            />
          )}
          {this.state.temporary === "isDersprogrami" && (
            <AgGridReact
              columnDefs={this.state.columnDefs8}
              rowData={this.state.rowData}
            />
          )}

        </div>
      </div>
    );
  }
}
