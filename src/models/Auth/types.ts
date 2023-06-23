export interface IUsers {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  tel: number;
}

export interface IValues {
  email: string;
  password: string;
}

export interface IValuesSingUp extends IValues {
  confirmpassword: string;
  username: string;
}

interface inputs {
  label: string;
  text: string;
  type: string;
}

export interface InputsSingInProps extends inputs {
  name: keyof IValues;
}

export interface InputsSingUpProps extends inputs {
  name: keyof IValuesSingUp;
}
