import React from "react";
import classes from "./BaseInput.module.scss";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface BaseInputProps {
  label: string;
  type: string;
  text: string;
  value?: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<Error>> | undefined;
  // register: UseFormRegister<IValuesSingUp> | UseFormRegister<IValuesSingIn>;
  register: any;
  name: string;
  required: string;
  pattern: RegExp;
  patternText: string;
}

function BaseInput({
  label,
  type,
  text,
  error,
  register,
  name,
  required,
  pattern,
  patternText,
}: BaseInputProps) {
  return (
    <div className={classes.input}>
      <label htmlFor={label}>{text}</label>
      <input
        type={type}
        id={label}
        name={label}
        placeholder={`Enter your ${text}`}
        {...register(name, {
          required: required,
          pattern: {
            value: pattern,
            message: patternText,
          },
        })}
      />
      {error && <span>{error.message?.toString()}</span>}
    </div>
  );
}

export default BaseInput;
