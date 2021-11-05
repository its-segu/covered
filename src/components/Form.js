import React from "react";
import "../styles/Form.css";
import FormSubmit from "../components/FormSubmit";
import Loading from "./Loading";
// import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navBarColor: {
    backgroundColor: "#2C2C2C",
  },
}));

export default function FormPage(props) {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
        <Loading/>
      <header class="button-container">
        <div class="faq-button">
          <FormSubmit />
        </div>
        <div class="check-your-balance-button">
          <h1>We've got you covered!</h1>
        </div>
      </header>
    </div>
  );
}
