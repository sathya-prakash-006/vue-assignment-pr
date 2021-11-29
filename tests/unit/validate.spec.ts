import {
  validInputs,
  validEmail,
  validateRegisterInputs,
  updateProfile,
} from "../../src/utility/validateEmail";

// validate Login Inputs
describe("validInputs.vue", () => {
  const errors: Array<string> = [];

  test("it will give error if no password", () => {
    const email = "sathya@gmail.com";
    const password = "";
    expect(validInputs(errors, email, password)).toEqual([
      "password can't be empty",
    ]);
  });

  test("it will give error if  email is empty", () => {
    const error: Array<string> = [];
    const email = "";
    const password = "123345";
    expect(validInputs(error, email, password)).toEqual(["Email required"]);
  });

  test("it will give error if  email and password is empty", () => {
    const error: Array<string> = [];
    const email = "";
    const password = "";
    expect(validInputs(error, email, password)).toEqual([
      "Email required",
      "password can't be empty",
    ]);
  });

  test("it will give error if  email is not valid", () => {
    const error: Array<string> = [];
    const email = "sathyagmaiol.com";
    const password = "123";
    expect(validInputs(error, email, password)).toEqual([
      "valid email required",
    ]);
  });
});
/******************************************************************************************************** */

// validate Register Inputs

describe("validInputs.vue", () => {
  const errors: Array<string> = [];

  test("it will give error if no name", () => {
    const name = "";
    const email = "sathya@gmail.com";
    const password = "12345";
    const confirmpassword = "12345";

    expect(
      validateRegisterInputs(errors, name, email, password, confirmpassword)
    ).toEqual(["Name required"]);
  });

  test("it will give error if no email", () => {
    const error: Array<string> = [];
    const name = "sathya";
    const email = "";
    const password = "12345";
    const confirmpassword = "12345";
    const result = validateRegisterInputs(
      error,
      name,
      email,
      password,
      confirmpassword
    );

    expect(result).toEqual(["Email required"]);
  });

  test("it will give error if  email is not valid", () => {
    const error: Array<string> = [];
    const name = "sathya";
    const email = "sathya";
    const password = "12345";
    const confirmpassword = "12345";

    const result = validateRegisterInputs(
      error,
      name,
      email,
      password,
      confirmpassword
    );

    expect(result).toEqual(["Enter valid Email Id"]);
  });

  test("it will give error if password not match", () => {
    const error: Array<string> = [];
    const name = "sathya";
    const email = "sathya@gmail.com";
    const password = "12345";
    const confirmpassword = "1234547437";

    const result = validateRegisterInputs(
      error,
      name,
      email,
      password,
      confirmpassword
    );

    expect(result).toEqual(["Entered password is not matching"]);
  });
});

/******************************************************************************************************** */

// validate update Profile

describe("updateProfile.ts", () => {
  test("if email is empty throw error message", () => {
    const errors: Array<string> = [];
    const name = "sathya";
    const email = "";
    const result = updateProfile(errors, email, name);

    expect(result).toEqual(["Email required"]);
  });

  test("if name is empty throw error message", () => {
    const error: Array<string> = [];
    const name = "";
    const email = "sathya@gmail.com";
    const result = updateProfile(error, email, name);

    expect(result).toEqual(["Name required"]);
  });

  test("if email not valid throw error", () => {
    const error: Array<string> = [];
    const name = "sathya";
    const email = "sathyagmail.com";
    const result = updateProfile(error, email, name);

    expect(result).toEqual(["valid email required"]);
  });

  test("if email and name empty throw error", () => {
    const error: Array<string> = [];
    const name = "";
    const email = "";
    const result = updateProfile(error, email, name);

    expect(result).toEqual(["Email required", "Name required"]);
  });
});

/******************************************************************************************************** */
// validate Email
describe("validEmail.vue", () => {
  test("If email is valid then it will return true", () => {
    expect(validEmail("sathya@gmail.com")).toBe(true);
  });

  test("If email is not valid then it will return false", () => {
    expect(validEmail("sathyamail.com")).toBe(false);
  });
});
