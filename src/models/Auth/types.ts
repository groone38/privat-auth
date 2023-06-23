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

export interface InputsSingInProps {
  label: string;
  text: string;
  type: string;
  name: keyof IValues;
}
