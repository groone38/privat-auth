import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.scss";
import {
  ValidationEmail,
  ValidationError,
  ValidationPassword,
} from "../../components/validation/Validation";
import BaseInput from "../../components/Base/BaseInput/BaseInput";
import { InputsSingIn } from "../../assets/Auth/arr";
import { IUsers, IValues } from "../../models/Auth/types";

const Login = () => {
  const [values, setValues] = useState<IValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ValidationError>({
    email: "",
    password: "",
  });

  const onChangeValues = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({
      ...errors,
      [e.target.name]:
        e.target.name === "email"
          ? ValidationEmail(e.target.value)
          : ValidationPassword(e.target.value),
    });
  };
  const onBlure = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      values.email !== "" &&
      values.password !== "" &&
      errors.email === "" &&
      errors.password === ""
    ) {
      const responce: IUsers[] = await fetch(
        `https://649377e50da866a953667096.mockapi.io/auth/users`
      ).then((res) => res.json());
    }
  };

  return (
    <div className={classes.wrap}>
      <form className={classes.form} onSubmit={onSubmit}>
        <h1>Sing in</h1>
        {InputsSingIn.map((item) => (
          <BaseInput
            label={item.label}
            type={item.type}
            text="Email "
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
            <Link to={"/register"}>Register</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
