
import * as requestFromServer from "./LoginCRUD";
import { setCookie } from "../../../../Utils/cookieUtils";
import { errorNotification, successNotification } from "../../../../Base/Notification/BasicNotification";

// eslint-disable-next-line
const ACCESS_TOKEN = "TodoAccessToken";

interface Data {
    user: string
    password: string
}

// LOGIN API
export const login = async (data: Data) => {
    const response = await requestFromServer.login(data);
    let message: string = response.data.msg;
        if (response.data.code === 200) {
            localStorage.setItem("userName", response.data.data.user);
            setCookie(ACCESS_TOKEN, response.data.data.token);
            successNotification(message);
        } else {
            errorNotification(message);
        }
};