import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import { useBoxStyles } from "../styles/";
import classNames from "classnames";

export const Box = forwardRef(({ title, subtitle, web, email }, ref) => {
  const classes = useBoxStyles();
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
