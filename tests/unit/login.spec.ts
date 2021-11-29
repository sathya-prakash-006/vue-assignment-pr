import { mount, createLocalVue } from "@vue/test-utils";
import Login from "../../src/views/Login.vue";
import Vuex from "vuex";
import { VueConstructor } from "vue";

let localVue: VueConstructor<Vue>;

describe("Login.vue", () => {
  let actions: any;
  let store: any;
  let wrapper: any;

  const mockRouter = {
    $route: {
      name: "Login",
    },
    $router: {
      push: jest.fn(),
    },
  };

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    actions = {
      login: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        Counter2: {
          actions,
          namespaced: true,
        },
      },
    });
  });

  // wrapper = mount(Login);
  wrapper = mount(Login, {
    store,
    localVue,
    mocks: mockRouter,
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

    expect(wrapper.emitted("submit")[0][0]).toStrictEqual({
      email,
      password,
    });
  });

  xit("on submitting redirect to dashbord", async () => {
    mockRouter.$route.name = "Login";
    const email = "sathya@gmail.com";
    const password = "123";

    await wrapper.find('input[type="email"]').setValue(email);
    await wrapper.find('input[type="password"]').setValue(password);
    await wrapper.find("form").trigger("submit.prevent");

    const routerSpy = jest.spyOn(wrapper.vm.$router, "push");
    expect(routerSpy).toHaveBeenCalledWith({
      name: "Home",
    });
  });
});
