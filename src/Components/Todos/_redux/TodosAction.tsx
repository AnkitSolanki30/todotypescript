import * as requestFromServer from "./TodosCRUD"
import TodosSlice from "./TodosSlice";
import { errorNotification, successNotification } from "../../../Base/Notification/BasicNotification";
import { useDispatch } from "react-redux";
import Redux from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { State } from "history";

// import {  useAppDispatch } from '../../../Redux/hooks'

const { actions } = TodosSlice;
// const dispatch = useAppDispatch()
// type Dispatch<S> = Redux.Dispatch<S>;


interface Data {
    content: string
    checked: boolean
}

interface Todos {
    todos: []
    totalCount: number
    totalPage: number
}

//CREATE Todo
export const createTodos = async (data :Data) => {
    const response = await requestFromServer.createTodo(data);
    console.log(response);
    let msg = response.data.msg;
    let code = response.data.code;
    if (code === 200) {
        successNotification(msg);
    } else {
        errorNotification(msg);
    }
};

//Get All Todos
export const fetchTodos = (urlData: string) => async (dispatch: ThunkDispatch<State, unknown,  Action>) => {
    // const dispatch = useDispatch()
    const response = await requestFromServer.getTodos(urlData)
    let msg = response.data.msg;
    if (response.data.code === 200) {
        if (response.data.meta.currentPage === 1) {
            successNotification(msg)
            dispatch(actions.setTodos({ todos: response.data.data, totalCount:response.data.meta.totalRecords, totalPage: response.data.meta.totalPages }))
        } else {
            successNotification(msg)
            actions.setOtherTodos({ todos: response.data.data })
        }
    } else {
        errorNotification(msg)
    }
};

//Get Single Todo


//Delete Todo
export const deleteTodos = async (id: number) => {
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
export const editTodos = async (editData: Data, id: number) => {
    console.log("editTodos",editData, id);
        const response = await requestFromServer.editTodo(editData, id)
        console.log("response",response);
        let msg = response.data.msg;
        let code = response.data.code;
        if (code === 200) {
            successNotification(msg);
        } else {
            errorNotification(msg);
        }
};