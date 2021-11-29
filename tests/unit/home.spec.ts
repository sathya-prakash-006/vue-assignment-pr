import Home from "../../src/views/Home.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { VueConstructor } from "vue";

let localVue: VueConstructor<Vue>;

describe("Home.vue", () => {
  let actions: any;
  let store: any;

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

  it('it shoud have title "PROFILE DETAILS" ', async () => {
    const wrapper = mount(Home, { store, localVue });

    const title = wrapper.find("#title");

    expect(title.text()).toBe("PROFILE DETAILS");
  });

  it("when button clicked it should redirect to home", async () => {
    const mockRouter = {
      push: jest.fn(),
    };

    const wrapper = mount(Home, {
      store,
      localVue,
      mocks: {
        $router: mockRouter,
      },
    });

    await wrapper.find("#exit").trigger("click");

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith("/login");
  });
});

// it('calls store action "moduleActionClick" when button is clicked', async () => {
//   const name = "sathya";
//   const email = "sathya@gmail.com";
//   const wrapper = mount(Home, {
//     store,
//     localVue,
//     propsData: {
//       toggle: false,
//     },
//   });

//   await wrapper.find("#btn1").trigger("click");
//   await wrapper.find("#input1").setValue(name);
//   await wrapper.find("#input2").setValue(email);
//   await wrapper.find("#btn2").trigger("click");

//   expect(actions.update).toHaveBeenCalled();
// });
