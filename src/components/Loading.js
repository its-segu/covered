import * as React from "react";
import "../styles/Loading.css";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Loading(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            maxWidth: "65%",
            boxShadow: "none",
          },
        }}
      >
        <div className="load-wrapp">
          <div className="load-3">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
