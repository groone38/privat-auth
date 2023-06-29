import {
  InputsEditProps,
  InputsSingInProps,
  InputsSingUpProps,
} from "../../models/Auth/types";

export const InputsSingIn: InputsSingInProps[] = [
  {
    label: "email",
    text: "Email ",
    type: "text",
    name: "email",
    required: "Email is Required",
    pattern:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    patternText: "Email don't match",
  },
  {
    label: "password",
    text: "Password ",
    type: "password",
    name: "password",
    required: "Password is Required",
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
    patternText: "Password don't match",
  },
];

export const InputsSingUp: InputsSingUpProps[] = [
  {
    label: "email",
    text: "Email ",
    type: "text",
    name: "email",
    required: "Email is Required",
    pattern:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    patternText: "Email don't match",
  },
  {
    label: "password",
    text: "Password ",
    type: "password",
    name: "password",
    required: "Password is Required",
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
    patternText: "Password don't match",
  },
  {
    label: "confirm password",
    text: "Confirm Password ",
    type: "password",
    name: "confirmpassword",
    required: "Confirm password is Required",
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
    patternText: "Password don't match",
  },
  {
    label: "username",
    text: "Username ",
    type: "text",
    name: "username",
    required: "Username is Required",
    pattern: /^[a-z]{2,30}$/i,
    patternText: "Username don't match",
  },
  {
    label: "company",
    text: "Company ",
    type: "text",
    name: "company",
    required: "company is Required",
    pattern: /^[a-z]{2,30}$/i,
    patternText: "Company don't match",
  },
  {
    label: "tel",
    text: "Tel ",
    type: "tel",
    name: "tel",
    required: "tel is Required",
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    patternText: "tel don't match",
  },
];

export const EditProfile: InputsEditProps[] = [
  {
    label: "email",
    text: "Email ",
    type: "text",
    name: "email",
    required: "Email is Required",
    pattern:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    patternText: "Email don't match",
  },
  {
    label: "username",
    text: "Username ",
    type: "text",
    name: "username",
    required: "Username is Required",
    pattern: /^[a-z]{2,30}$/i,
    patternText: "Username don't match",
  },
  {
    label: "company",
    text: "Company ",
    type: "text",
    name: "company",
    required: "company is Required",
    pattern: /^[a-z]{2,30}$/i,
    patternText: "Company don't match",
  },
  {
    label: "tel",
    text: "Tel ",
    type: "tel",
    name: "tel",
    required: "tel is Required",
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    patternText: "tel don't match",
  },
];
