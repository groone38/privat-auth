export interface IValues {
  email: string;
  password: string;
}

export interface IValuesSingUp extends IValues {
  confirmpassword: string;
  username: string;
  image: any;
  company: string;
  tel: string;
  about: string;
}

interface inputs {
  label: string;
  text: string;
  type: string;
  required: string;
  pattern: RegExp;
  patternText: string;
}

export interface InputsSingInProps extends inputs {
  name: keyof IValues;
}

export interface InputsSingUpProps extends inputs {
  name: keyof IValuesSingUp;
}

export interface IUser {
  email: string;
  username: string;
  image: string;
  about: string;
  company: string;
  tel: string;
}
