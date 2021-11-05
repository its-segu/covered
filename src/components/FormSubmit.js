import React, { useState } from "react";
import "../styles/FormSubmit.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [dob, setDOB] = useState("");
  const [interger, setInterger] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push(`/results`);

    // alert(`Submitting Name ${name}`);
  };

  return (
    <form class="form-div" onSubmit={handleSubmit}>
      <h1 class="header-text">We've got you covered!</h1>
      <div class="form-flex">
        <div class="input-flex">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="searchInput"
            style={{
              borderRadius: 0,
              height: 10,
              color: "black",
              padding: 20,
            }}
          />
        </div>
        <div class="input-flex">
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            class=""
            style={{
              borderRadius: 0,
              color: "black",
              padding: 16.5,
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
      <div class="form-flex">
        <div class="input-flex">
          <label>Marital Status</label>
          <select
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
            class=""
            style={{
              borderRadius: 0,
              color: "black",
              padding: 16.5,
              border: "4px solid black",
              backgroundColor: "transparent",
            }}
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>
        <div class="input-flex">
          <label>Date of Birth</label>
          <input
            type="text"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            class="searchInput"
            style={{
              borderRadius: 0,
              height: 10,
              color: "black",
              padding: 20,
            }}
          />
        </div>
      </div>
      <div class="form-flex">
        <div class="last-input">
          <label>Number</label>
          <input
            type="text"
            value={interger}
            onChange={(e) => setInterger(e.target.value)}
            class="searchInput"
            style={{
              borderRadius: 0,
              height: 10,
              color: "black",
              padding: 20,
            }}
          />
        </div>
      </div>
      {/* <Button type="submit" value="Submit"></Button> */}
      <Button
        type="submit"
        value="Submit"
        classes={{
          root: classes.buttonPrime,
        }}
      >
        Submit
      </Button>
    </form>
  );
}
