import React, { useRef } from "react";
import { Box } from "./components/Box";
import { Matrix } from "./components/Matrix";
import useWindowSize from "./hooks/useWindowSize";
import { useAppStyles } from "./styles";

export default function App() {
  const classes = useAppStyles();
  const boxRef = useRef(null);

  const windowSize = useWindowSize();

  return (
    <div className={classes.app}>
      <Matrix height={windowSize.height} top text="FILIP ANDREI MURESAN" />
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
