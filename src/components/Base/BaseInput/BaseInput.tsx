import React from "react";

type Props = {};

function BaseInput({ label, type, text, value, onChangeValues, onBlure }: any) {
  return (
    <>
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
    </>
  );
}

export default BaseInput;
