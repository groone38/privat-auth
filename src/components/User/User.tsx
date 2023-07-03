import React, { useContext } from "react";
import classes from "./User.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { IValuesSingIn } from "../../models/Auth/types";
import { EditProfile } from "../../assets/Auth/arr";
import BaseInput from "../Base/BaseInput/BaseInput";
import axios from "../../core/interseption";
import { ValueContext } from "../context/UserContext";
import BaseTextArea from "../Base/BaseTextarea/BaseTextArea";

function User() {
  const user = useContext(ValueContext);
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
    // const formData = new FormData();
    // formData.append("email", data.email);
    // formData.append("username", data.username);
    // formData.append("image", data.image[0]);
    // formData.append("company", data.company);
    // formData.append("tel", data.tel);
    // formData.append("about", data.about);
    try {
      await axios.put("/user", data).then(() => user.setEdit(!user.edit));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={classes.user} onSubmit={handleSubmit(onSubmit)}>
      {/* <div className={classes.user_img}>
        <img
          src={`https://auth-server-livid.vercel.app/${user.value?.image}`}
          alt="img"
        />
        {user.edit && (
          <>
            <input type="file" {...register("image")} />
            {errors.image && <p>Choice image!</p>}
          </>
        )}
      </div> */}
      <div className={classes.user_info}>
        {EditProfile.map((item) => (
          <div className={classes.user_text} key={item.name}>
            {user.edit ? (
              <BaseInput
                {...item}
                error={errors[item.name]}
                key={item.name}
                register={register}
              />
            ) : (
              <span>
                <strong>{item.text}: </strong>{" "}
                {user.value && user.value[item.name]}
              </span>
            )}
          </div>
        ))}
        {user.edit ? (
          <BaseTextArea label={"about"} register={register} text={"About"} />
        ) : (
          <span>
            <strong>About:</strong> {user.value?.about}
          </span>
        )}
        {user.edit && <button type="submit">Send edit</button>}
      </div>
    </form>
  );
}

export default User;
