import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";
import {
  ValidationEmail,
  ValidationError,
  ValidationPassword,
} from "../../components/validation/Validation";
import BaseInput from "../../components/Base/BaseInput/BaseInput";

interface IUsers {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  tel: number;
}

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
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

  const onBlure = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const responce: IUsers = await fetch(
        `https://649377e50da866a953667096.mockapi.io/auth/users`
      ).then((res) => res.json());

      console.log(responce);
    }
  };

  return (
    <div className={classes.wrap}>
      <form className={classes.form} onSubmit={onSubmit}>
        <h1>Sing in</h1>
        <div className={classes.form__input}>
          <BaseInput
            label="email"
            type="text"
            text="Email "
            value={values.email}
            onChangeValues={onChangeValues}
            onBlure={onBlure}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className={classes.form__input}>
          <BaseInput
            label="password"
            type="password"
            text="Password "
            value={values.password}
            onChangeValues={onChangeValues}
            onBlure={onBlure}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
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
