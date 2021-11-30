import { shallowMount, mount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Navbar.vue", () => {
  it("it should have navbar page on mount'", () => {
    const wrapper = mount(Navbar);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("#navbar").exists()).toBe(true);
  });
  it("renders props.name when passed", () => {
    const name = "text";
    const wrapper = shallowMount(Navbar, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });

  it("should render text Micro Bank", () => {
    const wrapper = mount(Navbar);
    const navtitle = wrapper.get('[data-test="nav-title"]');

    expect(navtitle.text()).toBe("Micro Bank");
  });
  it("should have .profile, .left-section, .title1, .title2 classes", () => {
    const wrapper = mount(Navbar);

    expect(wrapper.find(".profile").exists()).toBe(true);
    expect(wrapper.find(".left-section").exists()).toBe(true);
    expect(wrapper.find(".title1").exists()).toBe(true);
    expect(wrapper.find(".title2").exists()).toBe(true);
  });
});
