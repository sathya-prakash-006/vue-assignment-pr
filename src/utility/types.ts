export interface ProfileUser {
  id?: number;
  name: string;
  email: string;
  date: Date;
  password: string;
  confirmpassword: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface UpdateUser {
  email: string;
  name: string;
}
