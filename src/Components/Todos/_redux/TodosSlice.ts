import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../Redux/store"

interface Todos {
    [x: string]: any;
    todos: []
    totalCount: number
    totalPage: number
}

const initialTodoState: Todos = {
    todos: [],
    totalCount: 0,
    totalPage: 0,
    singleEntity: null
};

const TodosSlice = createSlice({
    name: "TodosName",
    initialState: initialTodoState,
    reducers: {
        //all Todos 
        setTodos: (state, actions: PayloadAction<Todos>) => {
            const { todos, totalCount, totalPage } = actions.payload;
            state.todos = todos;
            state.totalCount = totalCount;
            state.totalPage = totalPage;
        },

        //all Todos Other Page
        setOtherTodos: (state, actions: PayloadAction<Todos>) => {
            const { todos } = actions.payload;
            state.todos = todos;
        },

        //created todo response
        createdResponse:(state, actions: PayloadAction<Todos>) => {
            const { singleEntity } = actions.payload;
            state.singleEntity = singleEntity;
        },
    }
})

export const { setTodos, setOtherTodos, createdResponse } = TodosSlice.actions

export const selectTodos = (state: RootState) => state.todosListInformation.value

export default TodosSlice;