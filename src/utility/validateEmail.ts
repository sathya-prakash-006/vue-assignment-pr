export const validEmail = function (email: string): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validInputs = function (
  errors: Array<string>,
  email: string,
  password: string
): Array<string> {
  if (!email) {
    errors.push("Email required");
  } else if (!validEmail(email)) {
    errors.push("valid email required");
  }
  if (password === "") {
    errors.push("password can't be empty");
  }
  return errors;
};

export const validateRegisterInputs = function (
  errors: Array<string>,
  name: string,
  email: string,
  password: string,
  confirmpassword: string
): Array<string> {
  if (!name) {
    errors.push("Name required");
  }
  if (!email) {
    errors.push("Email required");
  } else if (!validEmail(email)) {
    errors.push("Enter valid Email Id");
  }
  if (password !== confirmpassword) {
    errors.push("Entered password is not matching");
  }
  return errors;
};

export const updateProfile = function (
  errors: Array<string>,

  email: string,
  name: string
): Array<string> {
  if (!email) {
    errors.push("Email required");
  } else if (!validEmail(email)) {
    errors.push("valid email required");
  }
  if (!name) {
    errors.push("Name required");
  }
  return errors;
};
