import React from "react";
import { useState, useEffect } from "react";
import "../styles/Results.css";
import { makeStyles } from "@material-ui/core/styles";
import useGlobal from "../store";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: 100,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  customer: {
    height: 50,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    justifyContent: "space-between",
    color: "black",
    marginBottom: 10,
    color: "#636161",
    width: "95%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  buttonDiv: {
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  buttonRoot: {
    backgroundColor: "#47d5dc",
    color: "white",
    "&:hover": {
      backgroundColor: "#47d5dc",
    },
  },
  buttonSecond: {
    backgroundColor: "#a9a9a9",
    color: "white",
    marginRight: 3,
    "&:hover": {
      backgroundColor: "#a9a9a9",
    },
  },
}));

export default function Results() {
  const classes = useStyles();
  const [sortedAppointments, setSortedAppointments] = useState([]);
  const [customers] = useGlobal((state) => state.customers);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className={classes.root}>
      <div data-aos="fade-down" className="header">
        <h6>Name</h6>
        <h6>Gender</h6>
        <h6>Marital Status</h6>
        <h6>DOB</h6>
        <h6>Interger</h6>
      </div>
      {customers.map((customer, i) => (
        <div data-aos="fade-up" key={i} className="customer">
          <h4>{customer.name}</h4>
          <h4>{customer.gender}</h4>
          <h4>{customer.maritalStatus}</h4>
          <h4>{customer.dob}</h4>
          <h4>{customer.interger}</h4>
          {/* <div className={classes.buttonDiv}>
      <Button classes={{
        root: classes.buttonSecond,
      }}>Confirm</Button>
      <Button classes={{
        root: classes.buttonRoot,
      }}>Reschedule</Button>
      </div> */}
        </div>
      ))}
    </div>
  );
}
