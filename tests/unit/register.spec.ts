import { mount } from "@vue/test-utils";
import Register from "../../src/views/Register.vue";

describe("Register.vue", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(Register);
  });
  xit("it should contain title 'Mocro Bank'", () => {
    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toBe("Micro Bank");
  });

  xit("it should contain form title 'Create an Account'", () => {
    const createaccount = wrapper.get('[data-test="create-account"]');

    expect(createaccount.text()).toBe("Create an Account");
  });

  xit("it should not render a error block", () => {
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
});
