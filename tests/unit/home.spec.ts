import Home from "../../src/views/Home.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import { VueConstructor } from "vue";

let localVue: VueConstructor<Vue>;

describe("Home.vue", () => {
  let actions: any;
  let store: Store<any>;

  localVue = createLocalVue();
  localVue.use(Vuex);

  beforeEach(() => {
    actions = {
      update: jest.fn(),
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
  it("it should have Home page on mount'", () => {
    const wrapper = mount(Home, { store, localVue });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("#home").exists()).toBe(true);
  });
  it('it shoud have title "PROFILE DETAILS" ', async () => {
    const wrapper = mount(Home, { store, localVue });

    const title = wrapper.find("#title");

    expect(title.text()).toBe("PROFILE DETAILS");
  });

  it("it should redirect to login page", async () => {
    const mockRouter = {
      replace: jest.fn(),
      push: jest.fn(),
    };

    const wrapper = mount(Home, {
      store,
      localVue,
      mocks: {
        $router: mockRouter,
      },
    });

    await wrapper.find("#exitLog").trigger("click");

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith("/login");
  });

  it("it should redirect to register page", async () => {
    const mockRouter = {
      replace: jest.fn(),
      push: jest.fn(),
    };

    const wrapper = mount(Home, {
      store,
      localVue,
      mocks: {
        $router: mockRouter,
      },
    });

    await wrapper.find("#exitReg").trigger("click");

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith("/register");
  });

  it("it should toggle the button ", async () => {
    const wrapper = mount(Home, {
      store,
      localVue,
    });

    await wrapper.find("#togglebtn").trigger("click");
    expect(wrapper.find("#toggle").exists()).toBe(true);
    await wrapper.find("#togglebtn").trigger("click");
    expect(wrapper.find("#toggle").exists()).toBe(false);
  });

    it("it should toggle", async () => {
      const wrapper = mount(Home, {
        store,
        localVue,
      });
      await wrapper.setData({
        toggle: false,
      });

      await wrapper.find("#toggle").trigger("click");
      expect(wrapper.vm.toggle).toBe(true);
    });
  });

  // it("it should not call action ", async () => {
  //   const toggleSpy = jest.fn();
  //   const wrapper = mount(Home, {
  //     store,
  //     localVue,
  //     propsData: {
  //       toggle: false,
  //       errors: [],
  //     },
  //     methods: {
  //       toggleUpdate: toggleSpy,
  //     },
  //   });

  //   await wrapper.find("#togglebtn").trigger("click");
});
