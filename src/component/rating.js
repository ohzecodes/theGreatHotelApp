import React, { useState } from "react";

export default function Rating(props) {
  const [starSelect, setstarSelect] = useState(-1);

  const [hover, sethover] = useState(-1);
  let HandleSubmit = (i) => {
    if (i !== -1) {
      let rating = i;
      props.getr(rating);
    }
  };
  const Tstars = props.stars;
  let btnarray = [];
  const W = props.style.width || 300;
  for (let i = 1; i <= Tstars; i++) {
    let s1 = {
      cursor: "pointer",
      width: W / Tstars + "px",
      fill: "white",
      stroke: "black",
    };
    if (i <= hover) {
      s1 = { ...s1, fill: props.hoverColor };
    }
    if (i <= starSelect) {
      s1 = { ...s1, fill: props.clickColor };
    }

    btnarray.push(
      <svg
        key={i - 1}
        id={i}
        style={{ ...s1, height: "10em", width: "10em" }}
        onMouseOver={() => {
          if (starSelect === -1) sethover(i);
        }}
        onMouseLeave={() => sethover(-1)}
        onMouseDown={() => {
          if (starSelect === -1) {
            sethover(-1);
            setstarSelect(i);
            HandleSubmit(i);
          }
        }}
        viewBox="0 0 1024 1024"
      >
        <path d="M512.5 190.4l-94.4 191.3-211.2 30.7 152.8 149-36.1 210.3 188.9-99.3 188.9 99.2-36.1-210.3 152.8-148.9-211.2-30.7z"></path>
        <path
          style={{ fill: "black" }}
          d="M908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM665.3 561.3l36.1 210.3-188.9-99.2-188.9 99.3 36.1-210.3-152.8-149 211.2-30.7 94.4-191.3 94.4 191.3 211.2 30.7-152.8 148.9z"
        ></path>
      </svg>
    );
  }
  return <div style={props.style}>{btnarray}</div>;
}