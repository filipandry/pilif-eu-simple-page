import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { useMatrixStyles } from "../styles";

export const Matrix = (props) => {
  const classes = useMatrixStyles(props);
  const windowSize = useWindowSize();
  const canvasRef = useRef();
  const intervalRef = useRef(undefined);
  const [letters, setLetters] = useState(["0", "1"]);

  useEffect(() => {
    if (props.text) {
      setLetters(props.text.split("").filter((item) => item !== " "));
    }
  }, [props.text]);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    let canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    // set the width and height of the canvas
    const w = (canvas.width = windowSize.width);
    const h = (canvas.height = windowSize.height);

    // draw a black rectangle of width and height same as that of the canvas
    //ctx.fillStyle = "#000";
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, w, h);
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    let matrix = () => {
      //ctx.fillStyle = "#0001";
      ctx.fillStyle = "#fff1";
      ctx.fillRect(0, 0, w, h);

      //ctx.fillStyle = "#0f0";
      ctx.fillStyle = "#000";
      ctx.font = "15pt monospace";

      ypos.forEach((y, ind) => {
        //const text = String.fromCharCode(Math.random() * 128);
        //const text = Math.round(Math.random() * 1).toString(); // 0 or 1
        const text = letters[Math.round(Math.random() * (letters.length - 1))];
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    };

    intervalRef.current = setInterval(matrix, 50);
  }, [windowSize, letters]);

  return <canvas className={classes.root} ref={canvasRef}></canvas>;
};
