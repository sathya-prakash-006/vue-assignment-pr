import { mount } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";

xit("it should not render a update form block", () => {
  const wrapper = mount(Home, {
    data() {
      return {
        toggle: false,
      };
    },
  });

  const updateProfile = wrapper.find("toggle");
  expect(updateProfile.exists()).toBe(false);
});
