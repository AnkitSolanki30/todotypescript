
import * as requestFromServer from "./SignupCRUD";
import { errorNotification, successNotification } from "../../../../Base/Notification/BasicNotification";

// eslint-disable-next-line
const ACCESS_TOKEN = "TodoAccessToken";

interface Data {
    user: string
    password: string
}

// SIGNUP API
export const signup = async (data: Data) => {
    const response = await requestFromServer.signup(data);
    console.log(response);
    let message = response.data.msg;
        
        if (response.data.code === 200) {
            console.log("message:",message);
            successNotification(message);
        } else {
            console.log("message:",message);
            errorNotification(message);
        }
};