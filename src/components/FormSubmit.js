import React, { useState, useEffect } from "react";
import "../styles/FormSubmit.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import useGlobal from "../store";
import { useForm } from "react-hook-form";
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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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

  const formSubmit = (evt) => {
    props.thisSubmitted();

    if (interger % 15 === 0) personObject.interger = "FizzBuzz";
    else if (interger % 3 === 0) personObject.interger = "Fizz";
    else if (interger % 5 === 0) personObject.interger = "Buzz";
    else personObject.interger = "Not Divisible";

    setTimeout(() => {
      globalActions.addToCustomers(personObject);
      history.push(`/results`);
    }, 2000);
  };

  return (
    <form className="form-div" onSubmit={handleSubmit(formSubmit)}>
      <h1 className="header-text">We've got you covered!</h1>
      <div data-aos="fade-up" className="form-contain">
        <div className="form-flex">
          <div className="input-flex">
            <label>Name</label>
            <input
              name="name"
              {...register("fullName", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
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
            {errors?.fullName?.type === "required" && (
              <p>This field is required</p>
            )}
            {errors.fullName?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
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
              {...register("birthDate", {
                required: true,
                pattern: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
              })}
              onChange={(e) => setDOB(e.target.value)}
              className="searchInput"
              style={{
                borderRadius: 0,
                height: 10,
                color: "black",
              }}
            />
            {errors?.birthDate?.type === "required" && (
              <p>This field is required</p>
            )}
            {errors.birthDate?.type === "pattern" && (
              <p>Use following format YYYY-MM-DD</p>
            )}
          </div>
        </div>
        <div className="form-flex">
          <div className="last-input">
            <label>Number</label>
            <input
              type="text"
              value={interger}
              {...register("interger", {
                required: true,
                pattern: /^[1-9]\d*(\.\d+)?$/,
              })}
              onChange={(e) => setInterger(e.target.value)}
              className="searchInput"
              style={{
                borderRadius: 0,
                height: 10,
                color: "black",
              }}
            />
            {errors?.interger?.type === "required" && (
              <p>This field is required</p>
            )}
            {errors.interger?.type === "pattern" && (
              <p>Numerical characters only</p>
            )}
          </div>
        </div>
        <Button
          type="submit"
          value="Submit"
          classes={{
            root: classes.buttonPrime,
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
