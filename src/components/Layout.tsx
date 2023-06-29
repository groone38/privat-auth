import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import classes from "./Layout.module.scss";
import { ValueContext } from "./context/UserContext";

const Layout = () => {
  const navigate = useNavigate();
  const user = useContext(ValueContext);

  const onExit = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className={classes.bacground}>
        <div className={classes.wrapper}>
          <header className={classes.header}>
            <h1>{user.value?.username}</h1>
            <div>
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
      {/* <div className={classes.bacground}>
        <div className={classes.wrapper}>
          <footer>Footer</footer>
        </div>
      </div> */}
    </>
  );
};

export default Layout;
