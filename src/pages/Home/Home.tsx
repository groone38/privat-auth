import axios from "../../core/interseption";
import React, { useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { ValueContext } from "../../components/context/UserContext";
import classes from "./Home.module.scss";
import User from "../../components/User/User";

const Home = () => {
  const user = useContext(ValueContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  // const [edit, setEdit] = useState(false);

  useEffect(() => {
    const responce = async () => {
      setLoading(true);
      try {
        await axios.get(`/user`).then((res) => {
          user.setValue(res.data);
        });
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.message);
      }
      setLoading(false);
    };
    responce();
  }, [user.edit]);

  return (
    <div className={classes.block}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {message && <h1>{message}</h1>}
          <User user={user} />
        </>
      )}
    </div>
  );
};

export default Home;
