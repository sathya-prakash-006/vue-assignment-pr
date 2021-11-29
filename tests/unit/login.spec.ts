import { mount, createLocalVue } from "@vue/test-utils";
import Login from "../../src/views/Login.vue";
import Vuex from "vuex";
import { VueConstructor } from "vue";

let localVue: VueConstructor<Vue>;

describe("Login.vue", () => {
  let actions: any;
  let store: any;
  let wrapper: any;
  const errors: Array<string> = [];

  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    actions = {
      login: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        User: {
          actions,
          namespaced: true,
        },
      },
    });
  });

  wrapper = mount(Login, {
    store,
    localVue,
    propsData: {
      errors: errors,
    },
    mocks: {
      $router: mockRouter,
    },
  });

  it("it should have Login page on mount'", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("#login").exists()).toBe(true);
    expect(wrapper.find("form").exists()).toBe(true);
  });

  it("form should contain input fields", () => {
    expect(wrapper.get("input").exists()).toBe(true);
  });
  it("it should contain title 'Micro Bank'", () => {
    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toBe("Micro Bank");
  });

  it("it should contain  title 'Login'", () => {
    const login = wrapper.get('[data-test="login"]');

    expect(login.text()).toBe("Login");
  });

  it("expect type of input is text'", async () => {
    const input = wrapper.find('input[type="email"]');
    await input.setValue("some@gmail.com");

    expect(wrapper.find('input[type="email"]').element.value).toBe(
      "some@gmail.com"
    );
  });

  it("expect type of input is password'", async () => {
    const input = wrapper.find('input[type="password"]');
    await input.setValue("password");

    expect(wrapper.find('input[type="password"]').element.value).toBe(
      "password"
    );
  });

  it("expect text ' Don't have an account ? Create an Account ", async () => {
    const input = wrapper.get('[data-test="route"]');

    expect(input.text()).toBe("Don't have an account ? Create an Account");
  });
  it("on submitting form event should trigger", async () => {
    const email = "sathya@gmail.com";
    const password = "123";

    await wrapper.find('input[type="email"]').setValue(email);
    await wrapper.find('input[type="password"]').setValue(password);
    await wrapper.find("form").trigger("submit.prevent");

    //expect(actions.login).toHaveBeenCalled();
    expect(wrapper.emitted("submit")[0][0]).toStrictEqual({
      email,
      password,
    });
  });

  xit("on submitting redirect to dashbord", async () => {
    const email = "sathya@gmail.com";
    const password = "123";

    await wrapper.find('input[type="email"]').setValue(email);
    await wrapper.find('input[type="password"]').setValue(password);
    await wrapper.find("form").trigger("submit.prevent");

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith("/home");
  });
});
