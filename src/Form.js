import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./Form.css";

export default function Form() {
  

  return (
    <form className='forms' noValidate autoComplete="off">
      <TextField id="standard-basic" label="TCK" />
      <TextField id="standard-basic" label="Adı" />
      <TextField id="standard-basic" label="Soyadı" />
     
    </form>
  );
}