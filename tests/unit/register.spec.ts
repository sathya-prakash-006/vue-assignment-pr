import { mount } from "@vue/test-utils";
import Register from "../../src/views/Register.vue";

describe("Register.vue", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(Register);
  });

  it("it should have Register page on mount'", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("#register").exists()).toBe(true);
  });
  it("it should contain title 'Mocro Bank'", () => {
    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toBe("Micro Bank");
  });

  it("it should contain form title 'Create an Account'", () => {
    const createaccount = wrapper.get('[data-test="create-account"]');

    expect(createaccount.text()).toBe("Create an Account");
  });

  it("it should not render a error block", () => {
    const wrapper = mount(Register, {
      data() {
        return {
          errors: [],
        };
      },
    });

    const errorLink = wrapper.find("error");
    expect(errorLink.exists()).toBe(false);
  });

  it("input name'", async () => {
    const input = wrapper.get('[data-test="name"]');
    await input.setValue("sathya");

    expect(input.element.value).toBe("sathya");
  });
  it("input email", async () => {
    const input = wrapper.get('[data-test="email"]');
    await input.setValue("sathya@gmail.com");

    expect(input.element.value).toBe("sathya@gmail.com");
  });

  it("input password", async () => {
    const input = wrapper.get('[data-test="password"]');
    await input.setValue("123");

    expect(input.element.value).toBe("123");
  });

  it("on submitting form event should trigger", async () => {
    const name = "sathya";
    const email = "sathya@gmail.com";
    const date = "";
    const password = "123";
    const confirmpassword = "123";

    await wrapper.get('[data-test="name"]').setValue(name);
    await wrapper.get('[data-test="email"]').setValue(email);
    await wrapper.find('input[type="date"]').setValue(date);
    await wrapper.get('[data-test="password"]').setValue(password);
    await wrapper
      .get('[data-test="confirmpassword"]')
      .setValue(confirmpassword);

    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted("submit")[0][0]).toStrictEqual({
      name,
      email,
      date,
      password,
      confirmpassword,
    });
  });
});
