import React from "react";
import classes from "./BaseTextArea.module.scss";

interface BaseTextAreaProps {
  label: string;
  text: string;
  register: any;
}

const BaseTextArea = ({ label, text, register }: BaseTextAreaProps) => {
  return (
    <div className={classes.textarea}>
      <label htmlFor={label}>{text}</label>
      <textarea id={label} {...register(label)}></textarea>
    </div>
  );
};

export default BaseTextArea;
