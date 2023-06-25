import React, { useEffect, useState } from "react";
import classes from "./Register.module.scss";
import { InputsSingUp } from "../../assets/Auth/arr";
import BaseInput from "../../components/Base/BaseInput/BaseInput";
import { IValuesSingUp } from "../../models/Auth/types";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

const Register = () => {
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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("qwe");
  });
  const onSubmit: SubmitHandler<IValuesSingUp> = async (data) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:8080/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((json) => {
          setMessage(json.message);
          navigate("/login");
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className={classes.wrap}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {message && (
          <div className={classes.form__responce}>
            <h2>{message}</h2>
          </div>
        )}
        <h1>Sing up</h1>
        {InputsSingUp.map((item) => (
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
          <button className={classes.form__btn_sing}>Sing up</button>
          <Link to={"/login"} className={classes.form__btn_register}>
            Sing in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
