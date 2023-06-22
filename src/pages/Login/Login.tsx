import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./Login.module.scss";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <form className={style.form}>
      <h1>Login Page</h1>
      <input type="text" />
      <input type="text" />
    </form>
  );
};

export default Login;
