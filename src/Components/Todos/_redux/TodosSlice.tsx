import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStore } from "../../../Redux/store"

interface Todos {
    todos: []
    totalCount: number
    totalPage: number
}

const initialTodoState: Todos = {
    todos: [],
    totalCount: 0,
    totalPage:0
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
        setOtherTodos: (state, actions) => {
            const { todos }: Todos = actions.payload;
            state.todos = todos;
        },

        // //created todo response
        // createdResponse:(state, actions) => {
        //     const { createdTodos } = actions.payload;
        //     state.singleEntity = createdTodos;
        // }
    }
})

// export const selectCount = (state: RootStore) => state.TodosName.value

export default TodosSlice;