import React, { useState, useEffect } from "react";
import "../styles/Form.css";
import FormSubmit from "./FormSubmit";
import Loading from "./Loading";
import { makeStyles } from "@material-ui/core/styles";

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

  const thisHappened = () => {
    console.log("clicking");
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Loading open={open} />
      <header className="button-container">
        <div className="faq-button">
          <FormSubmit onHappened={thisHappened} />
        </div>
        <div className="check-your-balance-button">
          <h1>We've got you covered!</h1>
        </div>
      </header>
    </div>
  );
}
