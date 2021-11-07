import React, { useState, useEffect } from "react";
import "../styles/FormSubmit.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import useGlobal from "../store";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  buttonPrime: {
    color: "white",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#262626",
    },
    backgroundColor: "black",
    width: "100%",
    marginTop: 20,
    padding: 16,
    borderRadius: 0,
  },
}));

export default function FormSubmit(props) {
  const history = useHistory();
  const classes = useStyles();
  const [globalState, globalActions] = useGlobal();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [maritalStatus, setMaritalStatus] = useState("Single");
  const [dob, setDOB] = useState("");
  const [interger, setInterger] = useState("");
  let personObject = {
    name: name,
    gender: gender,
    maritalStatus: maritalStatus,
    dob: dob,
    interger: interger,
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onHappened();

    setTimeout(() => {
      globalActions.addToCustomers(personObject);
      history.push(`/results`);
    }, 2000);
  };

  return (
    <form className="form-div" onSubmit={handleSubmit}>
      <h1 className="header-text">We've got you covered!</h1>
      <div data-aos="fade-up" className="form-contain">
        <div className="form-flex">
          <div className="input-flex">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="searchInput"
              style={{
                borderRadius: 0,
                height: 10,
                color: "black",
              }}
            />
          </div>
          <div className="input-flex">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="select-input"
              style={{
                fontSize: 16,
                borderRadius: 0,
                color: "black",
                border: "4px solid black",
                backgroundColor: "transparent",
                
              }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Nonconforming">Nonconforming</option>
            </select>
          </div>
        </div>
        <div className="form-flex">
          <div className="input-flex">
            <label>Marital Status</label>
            <select
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="select-input"
              style={{
                fontSize: 16,
                borderRadius: 0,
                color: "black",
                border: "4px solid black",
                backgroundColor: "transparent",
              }}
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>
          <div className="input-flex">
            <label>Date of Birth</label>
            <input
              type="text"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              className="searchInput"
              style={{
                borderRadius: 0,
                height: 10,
                color: "black",
              }}
            />
          </div>
        </div>
        <div className="form-flex">
          <div className="last-input">
            <label>Number</label>
            <input
              type="text"
              value={interger}
              onChange={(e) => setInterger(e.target.value)}
              className="searchInput"
              style={{
                borderRadius: 0,
                height: 10,
                color: "black",
              }}
            />
          </div>
        </div>
        <Button
          type="submit"
          value="Submit"
          classes={{
            root: classes.buttonPrime,
          }}
          // onClick={props.onHappened}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
