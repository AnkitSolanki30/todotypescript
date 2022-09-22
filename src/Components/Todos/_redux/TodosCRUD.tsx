import instance from '../../../APICalls'

export const todos_URL = "/api/todo";

interface Data {
    content: string
    checked: boolean
}

//CREATE Todo
export function createTodo(data: Data) {
    return instance.post(window.$BASE_URL + todos_URL, data);
}

//Get All Todos
export function getTodos(url: string) {
    if (url) {
        return instance.get(`${window.$BASE_URL}${todos_URL}${url}`);
    } else {
        return instance.get(`${window.$BASE_URL}${todos_URL}`);
    }
}

//Get Single Todo by ID
export function getTodobyID(id: number) {
    return instance.get(`${window.$BASE_URL}${todos_URL}/${id}`);
}

//Delete Todo
export function deleteTodo(id: number) {
    return instance.delete(`${window.$BASE_URL}${todos_URL}/${id}`);
}

//Edit Todo
export function editTodo(editData: Data, id: number) {
    return instance.put(`${window.$BASE_URL}${todos_URL}/${id}`, editData);
}