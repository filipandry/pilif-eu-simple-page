import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles({
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
    maxWidth: "100%",
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

export const Box = forwardRef(({ title, subtitle, web, email }, ref) => {
  const classes = useStyles();
  const boxRef = useRef(null);
  const [showBox, setShowBox] = useState(false);
  const [height, setHeight] = useState(0);

  useImperativeHandle(ref, () => ({
    height
  }));

  useEffect(() => {
    setTimeout(() => {
      setShowBox(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      setHeight(boxRef.current.clientHeight);
    }
  }, [boxRef]);
  const getLink = (link) => {
    if (!link.startsWith("http")) {
      link = `https://${link}`;
    }
    return link;
  };
  return (
    <>
      <div
        className={classNames(classes.band, { [classes.bandVisible]: showBox })}
        style={{ height }}
      />
      <div
        ref={boxRef}
        className={classNames(classes.root, { [classes.rootVisible]: showBox })}
      >
        <p className={classes.title}>{title}</p>
        <p className={classes.subtitle}>{subtitle}</p>
        <span className={classes.divisor} />
        <p>
          <span className={classes.left}>
            <a href={getLink(web)}>{web}</a>
          </span>
          <span className={classes.right}>
            <a href={`mailto:${email}`}>{email}</a>
          </span>
        </p>
      </div>
    </>
  );
});
