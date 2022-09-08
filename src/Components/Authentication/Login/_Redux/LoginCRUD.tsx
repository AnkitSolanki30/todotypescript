import instance from "../../../../APICalls";

export const Login_URL = "/api/user/login";

// LOGIN

interface Data {
    user: string
    password: string
}

export function login(data: Data) {
  return instance.post(window.$BASE_URL + Login_URL, data);
}
