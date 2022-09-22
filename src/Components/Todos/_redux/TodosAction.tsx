import * as requestFromServer from "./TodosCRUD"
import TodosSlice from "./TodosSlice";
import { errorNotification, successNotification } from "../../../Base/Notification/BasicNotification";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { State } from "history";

const { actions } = TodosSlice;

interface Data {
    content: string
    checked: boolean
}

//CREATE Todo
export const createTodos = (data :Data) => async (dispatch : ThunkDispatch<State, unknown,  Action>) => {
    const response = await requestFromServer.createTodo(data);
    console.log(response);
    let msg = response.data.msg;
    let code = response.data.code;
    if (code === 200) {
        dispatch(actions.createdResponse({
            singleEntity: response.data.data,
            todos: [],
            totalCount: 0,
            totalPage: 0
        }))
        successNotification(msg);
    } else {
        errorNotification(msg);
    }
};

//Get All Todos
export const fetchTodos = (urlData: string) => async (dispatch : ThunkDispatch<State, unknown,  Action>) => {
    const response = await requestFromServer.getTodos(urlData)
    let msg = response.data.msg;
    if (response.data.code === 200) {
        if (response.data.meta.currentPage === 1) {
            dispatch(actions.setTodos({ todos: response.data.data, totalCount:response.data.meta.totalRecords, totalPage: response.data.meta.totalPages }))
        } else {
            dispatch(actions.setOtherTodos({
                todos: response.data.data,
                totalCount: 0,
                totalPage: 0
            }))
        }
    } else {
        errorNotification(msg)
    }
};

//Get Single Todo


//Delete Todo
export const deleteTodos = (id: number) => async (_dispatch : ThunkDispatch<State, unknown,  Action>) => {
    return requestFromServer.deleteTodo(id).then((response) => {
        console.log(response);
        let msg = response.data.msg;
        let code = response.data.code;
        if (code === 200) {
            successNotification(msg);
        } else {
            errorNotification(msg);
        }
    })
}

//Edit Todo
export const editTodos = (editData: Data, id: number) => async (_dispatch : ThunkDispatch<State, unknown,  Action>) => {
        const response = await requestFromServer.editTodo(editData, id)
        let msg = response.data.msg;
        let code = response.data.code;
        if (code === 200) {
            successNotification(msg);
        } else {
            errorNotification(msg);
        }
};