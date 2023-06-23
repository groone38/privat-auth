import { InputsSingInProps, InputsSingUpProps } from "../../models/Auth/types";

export const InputsSingIn: InputsSingInProps[] = [
  {
    label: "email",
    text: "Email ",
    type: "text",
    name: "email",
  },
  {
    label: "password",
    text: "Password ",
    type: "password",
    name: "password",
  },
];

export const InputsSingUp: InputsSingUpProps[] = [
  {
    label: "email",
    text: "Email ",
    type: "text",
    name: "email",
  },
  {
    label: "password",
    text: "Password ",
    type: "password",
    name: "password",
  },
  {
    label: "confirm password",
    text: "Confirm Password ",
    type: "password",
    name: "confirmpassword",
  },
  {
    label: "username",
    text: "Username ",
    type: "text",
    name: "username",
  },
];
