import React from 'react';
import { useState, useEffect, useCallback, updateState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import useGlobal from "../store";


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop:100,
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  appointment: {
    backgroundColor: "#efefef",
    borderRadius: 8,
    height: 50,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    color: "black",
    marginBottom: 5,
    color: "#636161",
    width: "95%"
  },
  buttonDiv: {
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: 'row',
    padding: 5
  },
  buttonRoot: {
    backgroundColor: "#47d5dc",
    color: "white",
    "&:hover": {
      backgroundColor: "#47d5dc",
    }
  },
  buttonSecond: {
    backgroundColor: "#a9a9a9",
    color: "white",
    marginRight: 3,
    "&:hover": {
      backgroundColor: "#a9a9a9",
    }
  }
}));


export default function Results() {
  const classes = useStyles();
  const [sortedAppointments, setSortedAppointments] = useState([])
  const [customers] = useGlobal((state) => state.customers);
  // name: name,
  // gender: gender,
  // maritalStatus: maritalStatus,
  // dob: dob,
  // interger: interger,

  return (
    <div className={classes.root}>
      {customers.map((customer, i) => (
      <div key={i} className={classes.appointment}>
      <h6>{customer.name}</h6>
      <h6>{customer.gender}</h6>
      <h6>{customer.maritalStatus}</h6>
      <h6>{customer.dob}</h6>
      <h6>{customer.interger}</h6>
      <div className={classes.buttonDiv}>
      <Button classes={{
        root: classes.buttonSecond,
      }}>Confirm</Button>
      <Button classes={{
        root: classes.buttonRoot,
      }}>Reschedule</Button>
      </div>
      </div>
      ))}
    </div>
  )
}
