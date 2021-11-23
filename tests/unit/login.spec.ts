import { mount } from "@vue/test-utils";
import Login from "../../src/views/Login.vue";

describe("Login.vue", () => {
  xit("it should contain title 'Mocro Bank'", () => {
    const wrapper = mount(Login);
    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toBe("Micro Bank");
  });

  xit("it should contain  title 'Login'", () => {
    const wrapper = mount(Login);
    const login = wrapper.get('[data-test="login"]');

    expect(login.text()).toBe("Login");
  });
});
