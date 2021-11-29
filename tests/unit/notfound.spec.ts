import { mount } from "@vue/test-utils";
import NotFound from "../../src/views/NotFound.vue";

describe("NotFound.vue", () => {
  it("it should contain title 'Page Not Found'", () => {
    const wrapper = mount(NotFound);
    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toBe("Page Not Found");
  });
});
