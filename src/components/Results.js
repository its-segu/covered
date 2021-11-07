import React from "react";
import { useEffect } from "react";
import "../styles/Results.css";
import { makeStyles } from "@material-ui/core/styles";
import useGlobal from "../store";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: 100,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  buttonRoot: {
    backgroundColor: "#55d1c5",
    padding: "10px 20px",
    color: "white",
    "&:hover": {
      backgroundColor: "#47d5dc",
    },
  },
  buttonSecond: {
    backgroundColor: "#55d1c5",
    color: "white",
    marginRight: 3,
    "&:hover": {
      backgroundColor: "#a9a9a9",
    },
  },
}));

export default function Results() {
  const classes = useStyles();
  const [customers] = useGlobal((state) => state.customers);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className={classes.root}>
      <div data-aos="fade-down" className="header-labels">
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
          <div className={classes.buttonDiv}>
            <Button
              classes={{
                root: classes.buttonRoot,
              }}
            >
              {customer.interger}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
