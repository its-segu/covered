import React from "react";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import myIcon from "../images/covered-logomark.svg";
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
    color: "black",
  },
  navBarColor: {
    backgroundColor: "white",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  let history = useHistory();
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const homeView = () => {
    history.push(`/covered`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navBarColor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={myIcon} alt="icon" width="130px" />
          </Typography>

          <Button onClick={homeView}>Back To Form</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
