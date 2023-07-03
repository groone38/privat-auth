import React, { useState } from "react";
import classes from "./Register.module.scss";
import { InputsSingUp } from "../../assets/Auth/arr";
import BaseInput from "../../components/Base/BaseInput/BaseInput";
import { IValuesSingUp } from "../../models/Auth/types";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Loader from "../../components/Loader/Loader";
import BaseTextArea from "../../components/Base/BaseTextarea/BaseTextArea";
import axios from "../../core/interseption";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IValuesSingUp>({
    mode: "all",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<IValuesSingUp> = async (data) => {
    // const formData = new FormData();
    // formData.append("email", data.email);
    // formData.append("password", data.password);
    // formData.append("confirmpassword", data.confirmpassword);
    // formData.append("username", data.username);
    // formData.append("image", data.image[0]);
    // formData.append("company", data.company);
    // formData.append("tel", data.tel);
    // formData.append("about", data.about);
    setLoading(true);
    try {
      await axios.post("/auth/register", data).then((res) => {
        setMessage("");
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <div className={classes.wrap}>
      {loading ? (
        <Loader />
      ) : (
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          {message && (
            <div className={classes.form__responce}>
              <h2>{message}</h2>
            </div>
          )}
          <h1>Sing up</h1>
          {InputsSingUp.map((item) => (
            <BaseInput
              {...item}
              error={errors[item.name]}
              key={item.name}
              register={register}
            />
          ))}
          {/* <input type="file" id="image" {...register("image")} /> */}
          <BaseTextArea label={"about"} register={register} text={"About"} />
          <div className={classes.form__btn}>
            <button className={classes.form__btn_sing}>Sing up</button>
            <Link to={"/login"} className={classes.form__btn_register}>
              Sing in
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
