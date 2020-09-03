import React, { useRef, useState, useEffect } from "react";
import { Box } from "./components/Box";
import { Matrix } from "./components/Matrix";
import { createUseStyles } from "react-jss";
import useWindowSize from "./hooks/useWindowSize";

const useStyles = createUseStyles({
  "@global": {
    app: {
      fontFamily: "sans-serif",
      textAlign: "center"
    },
    body: {
      overflowX: "hidden",
      margin: 0,
      padding: 0
    },
    a: {
      color: "unset",
      textDecoration: "unset",
      "&:visited": {
        color: "unset",
        textDecoration: "unset"
      }
    }
  }
});

export default function App() {
  const classes = useStyles();
  const boxRef = useRef(null);

  const windowSize = useWindowSize();

  return (
    <div className={classes.app}>
      <Matrix height={windowSize.height} top />
      <Box
        ref={boxRef}
        title={"Filip Andrei Muresan"}
        subtitle={"Full stack developer"}
        web={"pilif.eu"}
        email={"info@pilif.eu"}
      />
    </div>
  );
}
