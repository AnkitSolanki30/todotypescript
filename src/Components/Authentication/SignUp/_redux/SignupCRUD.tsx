import instance from "../../../../APICalls";

export const Signup_URL = "/api/user/signup";

interface Data {
    user: string
    password: string
}

//SIGNUP
export function signup(data: Data) {
    return instance.post(window.$BASE_URL + Signup_URL, data);
  }
