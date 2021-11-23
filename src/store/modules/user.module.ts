import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import UserService from "../../services/user";
import { ProfileUser } from "../../utility/types";

@Module({ namespaced: true })
class User extends VuexModule {
  public user: Array<ProfileUser> = [];
  public error = false;

  @Mutation
  public createRegister(): void {
    // console.log(user);
    this.error = false;
  }

  @Mutation
  public loginFailure(): void {
    this.error = true;
  }

  @Mutation
  public loginSuccess(user: any): void {
    this.error = false;
    this.user = user;
    //console.log(user);
  }

  @Mutation
  public updateSuccess(user: any): void {
    this.user = user;
  }

  // register

  @Action({ rawError: true })
  register(data: any): Promise<any> {
    return UserService.register(
      data.name,
      data.email,
      data.date,
      data.password
    ).then(
      (response) => {
        this.context.commit("createRegister");
        // console.log(response);
        return Promise.resolve(response.data);
      },
      (error) => {
        const message = error.message || error.response;
        return Promise.reject(message);
      }
    );
  }

  // login

  @Action({ rawError: true })
  login(data: ProfileUser): Promise<any> {
    return UserService.login(data.email, data.password).then(
      (user) => {
        this.context.commit("loginSuccess", user);
        return Promise.resolve(user);
      },
      (error) => {
        this.context.commit("loginFailure");
        const message = error.message || error.response;
        return Promise.reject(message);
      }
    );
  }

  // update

  @Action({ rawError: true })
  update(data: any): Promise<any> {
    return UserService.update(data.name, data.email, data.id).then(
      (response) => {
        this.context.commit("updateSuccess", response);
        console.log(response);
        return Promise.resolve(response.data);
      },
      (error) => {
        const message = error.message || error.response;
        return Promise.reject(message);
      }
    );
  }

  get userDetails() {
    return this.user;
  }
}

export default User;
