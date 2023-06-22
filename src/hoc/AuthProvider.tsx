import React, { createContext, useState } from "react";

type Props = {
  children: any;
};

export const AuthContext: any = createContext(null);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);

  const singin = (user: any, cb: any) => {
    setUser(user);
    cb();
  };

  const singout = (cb: any) => {
    setUser(null);
    cb();
  };

  const value = { user, singin, singout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
