import { createUseStyles } from "react-jss";

export const useAppStyles = createUseStyles({
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
