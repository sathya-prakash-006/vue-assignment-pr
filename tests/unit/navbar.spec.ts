import { shallowMount, mount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Navbar.vue", () => {
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
});
