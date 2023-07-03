export interface IValuesSingIn {
  email: string;
  username: string;
  // image: string;
  company: string;
  tel: string;
  about: string;
  id: number;
}

export interface IValuesSingUp extends IValuesSingIn {
  password: string;
  confirmpassword: string;
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
  name: keyof IValuesSingUp;
}

export interface InputsSingUpProps extends inputs {
  name: keyof IValuesSingUp;
}

export interface InputsEditProps extends inputs {
  name: keyof IValuesSingIn;
}

export interface IUser {
  email: string;
  username: string;
  // image: string;
  about: string;
  company: string;
  tel: string;
}
