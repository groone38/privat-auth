import React, { useState } from "react";
import classes from "./Register.module.scss";
import { InputsSingUp } from "../../assets/Auth/arr";
import BaseInput from "../../components/Base/BaseInput/BaseInput";
import {
  ValidationConfirmPassword,
  ValidationEmail,
  ValidationError,
  ValidationPassword,
  ValidationUserName,
} from "../../components/validation/Validation";
import { IValuesSingUp } from "../../models/Auth/types";
import { Link } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState<IValuesSingUp>({
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
  });
  const [errors, setErrors] = useState<ValidationError>({
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
  });
  const [message, setMessage] = useState("");
  const caseErrors = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setErrors({
          ...errors,
          [e.target.name]: ValidationEmail(values.email),
        });
        break;
      case "password":
        setErrors({
          ...errors,
          [e.target.name]: ValidationPassword(values.password),
        });
        break;
      case "confirmpassword":
        setErrors({
          ...errors,
          [e.target.name]: ValidationConfirmPassword(values.confirmpassword),
        });
        break;
      case "username":
        setErrors({
          ...errors,
          [e.target.name]: ValidationUserName(values.username),
        });
        break;
    }
  };
  const onChangeValues = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // caseErrors(e);
    // setErrors({
    //   ...errors,
    //   [e.target.name]:
    //     e.target.name === "email"
    //       ? ValidationEmail(e.target.value)
    //       : ValidationPassword(e.target.value),
    // });
  };
  const onBlure = (e: React.ChangeEvent<HTMLInputElement>): void => {
    caseErrors(e);
    // switch (e.target.name) {
    //   case "email":
    //     setErrors({
    //       ...errors,
    //       [e.target.name]: ValidationEmail(values.email),
    //     });
    //     break;
    //   case "password":
    //     setErrors({
    //       ...errors,
    //       [e.target.name]: ValidationPassword(values.password),
    //     });
    //     break;
    //   case "confirmpassword":
    //     setErrors({
    //       ...errors,
    //       [e.target.name]: ValidationConfirmPassword(values.confirmpassword),
    //     });
    //     break;
    //   case "username":
    //     setErrors({
    //       ...errors,
    //       [e.target.name]: ValidationUserName(values.username),
    //     });
    //     break;
    // }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      values.email !== "" &&
      values.password !== "" &&
      errors.email === "" &&
      errors.password === ""
    ) {
      await fetch(`http://localhost:8080/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((json) => setMessage(json.message));
    }
  };
  return (
    <div className={classes.wrap}>
      <form className={classes.form} onSubmit={onSubmit}>
        {message && (
          <div className={classes.form__responce}>
            <h2>{message}</h2>
          </div>
        )}
        <h1>Sing in</h1>
        {InputsSingUp.map((item) => (
          <BaseInput
            label={item.label}
            type={item.type}
            text={item.text}
            value={values[item.name]}
            onChangeValues={onChangeValues}
            onBlure={onBlure}
            error={errors[item.name]}
            key={item.name}
          />
        ))}
        <div className={classes.form__btn}>
          <button type="submit" className={classes.form__btn_sing}>
            Sing in
          </button>
          <button className={classes.form__btn_register}>
            <Link to={"/login"}>Sing in</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
