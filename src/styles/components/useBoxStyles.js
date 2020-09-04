import { createUseStyles } from "react-jss";

export const useBoxStyles = createUseStyles({
  root: {
    padding: [10, 25],
    background: "#000",
    position: "absolute",
    //width: "40vw",
    right: 0,
    top: "50%",
    transform: "translateY(-50%) translateX(100%)"
  },
  band: {
    width: "100%",
    background: "#000",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%) translateX(100%)"
  },
  rootVisible: {
    transition: "transform .5s linear",
    transform: "translateY(-50%)"
  },
  bandVisible: {
    transition: "transform 2s linear",
    transform: "translateY(-50%)"
  },
  title: {
    color: "#fff",
    fontSize: 30,
    padding: 0,
    marginBottom: 0
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
    padding: 0,
    marginTop: 0
  },
  divisor: {
    maxWidth: "80vw",
    width: 400,
    display: "block",
    height: 1,
    background: "#fff"
  },
  left: {
    //float: "left",
    color: "#fff"
  },
  right: {
    float: "right",
    color: "#fff"
  }
});
