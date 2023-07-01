import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";
import BaseInput from "../../components/Base/BaseInput/BaseInput";
import { InputsSingIn } from "../../assets/Auth/arr";
import { useForm, SubmitHandler } from "react-hook-form";
import { IValuesSingUp } from "../../models/Auth/types";
import Loader from "../../components/Loader/Loader";
import axios from "../../core/interseption";

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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<IValuesSingUp> = async (data) => {
    setLoading(true);
    try {
      await axios.post("/auth/login", data).then((res) => {
        localStorage.setItem("token", res.data.token);
        setMessage("");
        navigate("/");
      });
    } catch (error) {
      setMessage(error.response.data.message);
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
                {...item}
                error={errors[item.name]}
                key={item.name}
                register={register}
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
