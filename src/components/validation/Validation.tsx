interface ValuesProps {
  email: string;
  password: string;
}

export interface ValidationError {
  email?: string;
  password?: string;
  confirmpassword?: string;
  username?: string;
}

export function ValidationEmail(email: string) {
  let error: string = "";

  const email_pattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email === "") {
    error = "Email is Required";
  } else if (!email_pattern.test(email)) {
    error = "Email don't match";
  }

  return error;
}

export function ValidationPassword(password: string) {
  let error: string = "";
  const password_pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

  if (password === "") {
    error = "Password is Required";
  } else if (!password_pattern.test(password)) {
    error = "Password don't match";
  }

  return error;
}
