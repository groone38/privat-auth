import React, { useContext } from "react";
import classes from "./User.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { IValuesSingIn } from "../../models/Auth/types";
import { EditProfile } from "../../assets/Auth/arr";
import BaseInput from "../Base/BaseInput/BaseInput";
import axios from "../../core/interseption";
import { ValueContext } from "../context/UserContext";

function User({ user }: any) {
  const edit = useContext(ValueContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IValuesSingIn>({
    mode: "all",
    defaultValues: {
      email: user.value?.email,
      username: user.value?.username,
      company: user.value?.company,
      tel: user.value?.tel,
      about: user.value?.about,
    },
  });

  const onSubmit: SubmitHandler<IValuesSingIn> = async (data) => {
    console.log(data.image);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("image", data.image[0]);
    formData.append("company", data.company);
    formData.append("tel", data.tel);
    formData.append("about", data.about);
    try {
      await axios.put("/user", formData).then(() => edit.setEdit(!edit.edit));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={classes.user} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.user_img}>
        <img src={`http://localhost:8080/${user.value?.image}`} alt="img" />
        {edit.edit && (
          <>
            <input type="file" {...register("image")} />
            {/* {errors.image && <p>Choice image!</p>} */}
          </>
        )}
      </div>
      <div className={classes.user_info}>
        {EditProfile.map((item) => (
          <div className={classes.user_text} key={item.name}>
            {edit.edit ? (
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
            ) : (
              <span>
                <strong>{item.text}: </strong>{" "}
                {user.value && user.value[item.name]}
              </span>
            )}
          </div>
        ))}
        <div className={classes.user__textarea}>
          {edit.edit ? (
            <>
              <label htmlFor="about">About</label>
              <textarea id="about" {...register("about")}></textarea>
            </>
          ) : (
            <span>
              <strong>About:</strong> {user.value?.about}
            </span>
          )}
        </div>
        {edit.edit && <button type="submit">Send edit</button>}
      </div>
    </form>
  );
}

export default User;
