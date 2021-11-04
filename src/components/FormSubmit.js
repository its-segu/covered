import React, { useState } from "react";
import "../styles/FormSubmit.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 20,
    margin: 3,
    "&:hover": {
      backgroundColor: "#47d5dc",
    },
  },
  buttonPrime: {
    color: "white",
    "&:hover": {
      backgroundColor: "#262626",
    },
    backgroundColor: "black",
    width: "100%",
    marginTop: 20,
    padding: 10,
  },
  buttonSecond: {
    color: "black",
    "&:hover": {},
  },
}));

export default function FormSubmit(props) {
  const classes = useStyles();

  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };

  return (
    <form class="form-div" onSubmit={handleSubmit}>
      <div class="form-flex">
        <div class="input-flex">
          <label>hello</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="searchInput"
            style={{
              borderRadius: 0,
              width: 250,
              height: 10,
              color: "black",
              padding: 20,
            }}
          />
        </div>
        <div class="input-flex">
          <label>hello</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="searchInput"
            style={{
              borderRadius: 0,
              width: 250,
              height: 10,
              color: "black",
              padding: 20,
            }}
          />
        </div>
      </div>
      <div class="form-flex">
        <div class="input-flex">
          <label>hello</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="searchInput"
            style={{
              borderRadius: 0,
              width: 250,
              height: 10,
              color: "black",
              padding: 20,
            }}
          />
        </div>
        <div class="input-flex">
          <label>hello</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="searchInput"
            style={{
              borderRadius: 0,
              width: 250,
              height: 10,
              color: "black",
              padding: 20,
            }}
          />
        </div>
      </div>
      <div class="form-flex">
        <div class="input-flex">
          <label>hello</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="searchInput"
            style={{
              borderRadius: 0,
              width: 250,
              height: 10,
              color: "black",
              padding: 20,
            }}
          />
        </div>
        <div class="input-flex">
          <label>hello</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="searchInput"
            style={{
              borderRadius: 0,
              width: 250,
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
        Reschedule
      </Button>
    </form>
  );
}
