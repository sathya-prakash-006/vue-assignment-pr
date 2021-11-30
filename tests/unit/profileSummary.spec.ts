import { shallowMount, mount, Wrapper } from "@vue/test-utils";
import ProfileSummary from "@/components/Summary.vue";

describe("Navbar.vue", () => {
  let wrapper: Wrapper<
    ProfileSummary & {
      [key: string]: any;
    }
  >;

  beforeEach(() => {
    wrapper = mount(ProfileSummary);
  });

  it("it should have profileSummary page on mount'", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("#profile").exists()).toBe(true);
  });
  it("it should have title Account Number ", () => {
    const name = "Account Number";
    const account = wrapper.get('[data-test="title"]');
    expect(account.text()).toBe(name);
  });

  it("it should have account  Number ", () => {
    const name = "278132856379";
    const wrapper = shallowMount(ProfileSummary, {});
    const account = wrapper.get('[data-test="account"]');
    expect(account.text()).toBe(name);
  });

  it("it should have title income", () => {
    const name = "Income";
    const income = wrapper.get('[data-test="income"]');
    expect(income.text()).toBe(name);
  });

  it("it should have account  Number ", () => {
    const name = "$2478";
    const income = wrapper.get('[data-test="incomeblc"]');
    expect(income.text()).toBe(name);
  });

  it("it should have title spends", () => {
    const name = "Spends";
    const spends = wrapper.get('[data-test="spends"]');
    expect(spends.text()).toBe(name);
  });

  it("it should have spends balance ", () => {
    const name = "4275";
    const spends = wrapper.get('[data-test="spendsblnc"]');
    expect(spends.text()).toBe(name);
  });

  it("should have summary-cont class", () => {
    expect(wrapper.find(".summary-cont").exists()).toBe(true);
  });
  it("should have #profile id", () => {
    expect(wrapper.find("#profile").exists()).toBe(true);
  });
});
