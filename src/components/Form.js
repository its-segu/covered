import React from "react";
import "../styles/Form.css";
import FormSubmit from "../components/FormSubmit";
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
        <header class="button-container">
              <div class="faq-button">
              <FormSubmit/>

                {/* <button class="gift-button">GIFT CARD</button>
                <button class="gift-button">FAQ</button> */}
              </div>
              <div class="check-your-balance-button">
                <button class="balance-button">CHECK</button>
                <button class="balance-button">YOUR BALANCE</button>
              </div>
          </header>
    </div>
  );
}
