import { combineReducers } from "redux";
import TodosSlice from "../Components/Todos/_redux/TodosSlice"
const rootReducer = combineReducers({
    todosListInformation: TodosSlice.reducer,
});

export default rootReducer;
