import axios from "../core/interseption";
import React, { useEffect, useState } from "react";
import { IUser } from "../models/Auth/types";
import Loader from "../components/Loader/Loader";

const Home = () => {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const responce = async () => {
      setLoading(true);
      try {
        await axios.get(`/user`).then((res) => {
          setUser(res.data);
          // setAvatar(res.data.image.path);
          // console.log(res.data.image);
        });
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.message);
      }
      setLoading(false);
    };
    responce();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <span>{user?.email}</span>
            <span>{user?.username}</span>

            <img src={`http://localhost:8080/${user?.image}`} alt="img" />
            <span>{user?.company}</span>
            <span>{user?.tel}</span>
            <span>{user?.about}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
