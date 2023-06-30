import React, { Dispatch, SetStateAction, useState } from "react";
import { IValuesSingIn } from "../../models/Auth/types";

interface Props {
  children: React.ReactNode;
}

interface AppContextInterface {
  value: IValuesSingIn | undefined;
  setValue: Dispatch<SetStateAction<IValuesSingIn | undefined>>;
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
}

export const cartContextDefaultValue: AppContextInterface = {
  value: {
    email: "",
    username: "",
    image: "",
    tel: "",
    company: "",
    about: "",
  },
  setValue: () => {},
  edit: false,
  setEdit: () => {},
};

export const ValueContext = React.createContext<AppContextInterface>(
  cartContextDefaultValue
);

export const ValueProvider = ({ children }: Props) => {
  const [value, setValue] = useState<IValuesSingIn>();
  const [edit, setEdit] = useState(false);

  return (
    <ValueContext.Provider
      value={{
        value,
        setValue,
        edit,
        setEdit,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
