"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setpickedImage] = useState();
  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) {
      setpickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setpickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>no image found</p>}
          {pickedImage && <Image src={pickedImage} alt="image" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png,image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImage}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
