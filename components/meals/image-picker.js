"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function clickHandler() {
    console.log("clicked");
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button className={classes.button} type="button" onClick={clickHandler}>
          Pick An image
        </button>
      </div>
    </div>
  );
}
