import { mount } from "@vue/test-utils";
import NotFound from "../../src/views/NotFound.vue";

describe("NotFound.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(NotFound);
  });

  it("it should have NotFound page on mount'", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("#notFound").exists()).toBe(true);
  });
  it("it should contain title 'Page Not Found'", () => {
    const wrapper = mount(NotFound);
    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toBe("Page Not Found");
  });
});
