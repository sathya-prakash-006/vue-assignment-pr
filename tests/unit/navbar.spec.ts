import { shallowMount, mount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Navbar.vue", () => {
  xit("renders props.name when passed", () => {
    const name = "text";
    const wrapper = shallowMount(Navbar, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });

  xit("should render text Micro Bank", () => {
    const wrapper = mount(Navbar);
    const navtitle = wrapper.get('[data-test="nav-title"]');

    expect(navtitle.text()).toBe("Micro Bank");
  });
});

// arrange - declare a variable

// act - click a button or fill some text

// assert - check expectations
