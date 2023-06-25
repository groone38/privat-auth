import React from "react";
import classes from "./BaseInput.module.scss";
import { FieldErrors } from "react-hook-form";
interface BaseInputProps {
  label: string;
  type: string;
  text: string;
  value?: string;
  error: string | undefined | any;
  register: any;
}

function BaseInput({ label, type, text, error, register }: BaseInputProps) {
  return (
    <div className={classes.input}>
      <label htmlFor={label}>{text}</label>
      <input
        type={type}
        id={label}
        name={label}
        placeholder={`Enter your ${text}`}
        {...register}
      />
      {error && <span>{error.message}</span>}
    </div>
  );
}

export default BaseInput;
