import { combineReducers } from "redux";
// import loginSlice from "../Components/Authentication/Login/_Redux/LoginSlice";
import TodosSlice from "../Components/Todos/_redux/TodosSlice"
const rootReducer = combineReducers({
    // loginCredentials: loginSlice.reducer,
    todosListInformation: TodosSlice.reducer,
});

export default rootReducer;
