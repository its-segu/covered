import * as React from "react";
import { useState, useEffect, useCallback, updateState} from "react";

import "../styles/Loading.css";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import useGlobal from "../store";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Loading(props) {
    const [open, setOpen] = React.useState(false);

//   const [globalState, globalActions] = useGlobal();
//   const [open, setOpen]  = useGlobal((state) => state.showDialog);

//   useEffect(() => {
//       console.log(open)
//     // Update the document title using the browser API
//   }, [open]);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            maxWidth: "65%",
            boxShadow: "none",
          },
        }}
      >
        <div class="load-wrapp">
          <div class="load-3">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
