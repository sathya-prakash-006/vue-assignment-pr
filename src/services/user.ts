// login
// register
// update profie

import axios from "axios";

const API_URL = "http://localhost:3000/";
const API_URL_L = "http://localhost:3000/user/";

class UserService {
  register(name: string, email: string, date: string, password: string) {
    return axios.post(API_URL + "user", {
      name,
      email,
      date,
      password,
    });
  }
  login(email: string, password: string) {
    return axios
      .get(API_URL_L + `?email=${email}&password=${password}`)
      .then((res) => {
        console.log(res.data[0]);
        return res.data[0];
      });
  }
  update(name: string, email: string, id: number) {
    return axios
      .patch(API_URL_L + `${id}`, {
        name,
        email,
      })
      .then((res) => {
        console.log(res);
        return res.data;
      });
  }
}

export default new UserService();
