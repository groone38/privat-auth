import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.scss";
import BaseInput from "../../components/Base/BaseInput/BaseInput";
import { InputsSingIn } from "../../assets/Auth/arr";
import { useForm, SubmitHandler } from "react-hook-form";
import { IValuesSingUp } from "../../models/Auth/types";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IValuesSingUp>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<IValuesSingUp> = async (data) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:8080/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((json) => setMessage(json.message));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className={classes.wrap}>
        {loading ? (
          <Loader />
        ) : (
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            {message && (
              <div className={classes.form__responce}>
                <h2>{message}</h2>
              </div>
            )}
            <h1>Sing in</h1>
            {InputsSingIn.map((item) => (
              <BaseInput
                label={item.label}
                type={item.type}
                text={item.text}
                error={errors[item.name]}
                key={item.name}
                register={{
                  ...register(item.name, {
                    required: item.required,
                    pattern: {
                      value: item.pattern,
                      message: item.patternText,
                    },
                  }),
                }}
              />
            ))}
            <div className={classes.form__btn}>
              <button className={classes.form__btn_sing}>Sing in</button>
              <Link to={"/register"} className={classes.form__btn_register}>
                Sing up
              </Link>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
