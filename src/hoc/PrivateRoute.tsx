import React from "react";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";

type Props = {
  children: any;
};

const PrivateRoute = () => {
  const location = useLocation();
  const auth = false;

  if (!auth) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
