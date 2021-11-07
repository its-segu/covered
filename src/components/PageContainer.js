import React, { useState, useEffect } from "react";
import "../styles/Form.css";
import FormSubmit from "./FormSubmit";
import Loading from "./Loading";
import { makeStyles } from "@material-ui/core/styles";
import myIcon from "../images/covered-logomark-2.svg";

import AOS from "aos";
import "aos/dist/aos.css";

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

export default function PageContainer(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  const thisHappened = () => {
    console.log("clicking");
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Loading open={open} />
      <header className="covered-container">
        <div className="form-section">
          <FormSubmit onHappened={thisHappened} />
        </div>
        <div className="covered-section">
          <h1 data-aos="fade-down">We've got you </h1>
          <svg
          data-aos="zoom-out"
            id="preloader"
            width="240px"
            height="120px"
            viewBox="0 0 240 120"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              id="loop-normal"
              class="st1"
              d="M120.5,60.5L146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5
L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0z"
            >
              <animate
                attributeName="stroke-dasharray"
                from="500, 50"
                to="450 50"
                begin="0s"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                from="-40"
                to="-540"
                begin="0s"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>

            <path
              id="loop-offset"
              d="M146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0L120.5,60.5L146.48,87.02z"
            ></path>

            <path
              id="socket"
              d="M7.5,0c0,8.28-6.72,15-15,15l0-30C0.78-15,7.5-8.28,7.5,0z"
            >
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                rotate="auto"
                keyTimes="0;1"
                keySplines="0.42, 0.0, 0.58, 1.0"
              >
                <mpath xlinkHref="#loop-offset" />
              </animateMotion>
            </path>

            <path
              id="plug"
              d="M0,9l15,0l0-5H0v-8.5l15,0l0-5H0V-15c-8.29,0-15,6.71-15,15c0,8.28,6.71,15,15,15V9z"
            >
              <animateMotion
                dur="2s"
                rotate="auto"
                repeatCount="indefinite"
                keyTimes="0;1"
                keySplines="0.42, 0, 0.58, 1"
              >
                <mpath xlinkHref="#loop-normal" />
              </animateMotion>
            </path>
          </svg>

          {/* <h1 data-aos="fade-up" className="covered">Covered</h1> */}
          <img
            data-aos="fade-up"
            src={myIcon}
            alt="icon"
            width="350"
            height="150"
          />
        </div>
      </header>
    </div>
  );
}
