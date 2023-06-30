import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import classes from "./Layout.module.scss";
import { ValueContext } from "./context/UserContext";
import axios from "../core/interseption";

const Layout = () => {
  const navigate = useNavigate();
  const user = useContext(ValueContext);

  const onExit = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const onDelete = async () => {
    await axios.delete("/user").then(() => {
      localStorage.removeItem("token");
      navigate("/login");
    });
  };
  return (
    <>
      <div className={classes.bacground}>
        <div className={classes.wrapper}>
          <header className={classes.header}>
            <h1>{user.value?.username}</h1>
            <div>
              <button onClick={onDelete}>Delete Profile</button>
              <button onClick={() => user.setEdit(!user.edit)}>
                {user.edit ? "Close edit" : "Edit"}
              </button>
              <button onClick={onExit}>Exit</button>
            </div>
          </header>
        </div>
      </div>
      <div className={classes.wrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
