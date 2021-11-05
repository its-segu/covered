import React from 'react';
import { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:"black"
  },
  navBarColor: {
    backgroundColor: "white",

  },
}));


export default function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navBarColor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            PetDesk Appointments
          </Typography>
          {props.load ?
          <Button color="inherit" onClick={props.confirmedView}>Appointments</Button>
          :<Button color="inherit" onClick={props.confirmedView}>Confirmed Appointments</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
