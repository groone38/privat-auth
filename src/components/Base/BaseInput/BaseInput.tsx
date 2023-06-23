import React from "react";
import classes from "./BaseInput.module.scss";

interface BaseInputProps {
  label: string;
  type: string;
  text: string;
  value: string;
  error: string | undefined;
  onChangeValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlure: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default React.memo(function BaseInput({
  label,
  type,
  text,
  value,
  error,
  onChangeValues,
  onBlure,
}: BaseInputProps) {
  console.log("input", label);
  return (
    <div className={classes.input}>
      <label htmlFor={label}>{text}</label>
      <input
        type={type}
        id={label}
        name={label}
        placeholder={`Enter your ${text}`}
        value={value}
        onChange={onChangeValues}
        onBlur={onBlure}
      />
      {error && <span>{error}</span>}
    </div>
  );
});

// export default BaseInput;
