import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as action from './_redux/TodosAction'
import { clearCookie } from '../../Utils/cookieUtils';
import '../../App.scss'
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { Todo } from '../../module/model';
import { useAppSelector, useAppDispatch } from '../../Redux/hooks'

const TodosHome = () => {

  const navigation = useNavigate();

  // The `state` arg is correctly typed as `RootState` already
  const todosData = useAppSelector(state => state.todosListInformation.todos)
  // const todosTotalCount = useAppSelector(state => state.todosListInformation.totalCount)
  const todosTotalPage = useAppSelector(state => state.todosListInformation.totalPage)
  const todosSingleEntity = useAppSelector(state => state.todosListInformation.singleEntity)
  const dispatch = useAppDispatch()

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>(todosData)
  const [pageCount, setPageCount] = useState<number>(1)

  const ACCESS_TOKEN = "TodoAccessToken";

  //useEffect for API call
  useEffect(() => {
    getList()
    return () => { };
  }, [pageCount])

  useEffect(() => {
    setTodos(todosData);
    return () => { };
  }, [todosData])

  useEffect(() => {
    if (todosSingleEntity !== null) {
      let dg = [...todos, todosSingleEntity]
      setTodos(dg)
    }
    return () => { };
  }, [todosSingleEntity])

  //API cal
  const getList = async () => {
    let url = `?&page=${pageCount}&limit=1`;
    await dispatch(action.fetchTodos(url));
  }

  //Add New Todo
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      let content = todo;
      let checked = false;
      let data = { content, checked };
      await dispatch(action.createTodos(data));
      setTodo("")
    }
  }

  //LogOut
  const handleLogout = () => {
    localStorage.removeItem("userName");
    clearCookie(ACCESS_TOKEN);
    navigation("/login")
  }

  return (
    <div className='App'>
      <button onClick={handleLogout}>LogOut</button>
      <span className='heading'>todo app</span>
      <CreateTodo todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} pageCount={pageCount} setPageCount={setPageCount} todosTotalPage={todosTotalPage} />
    </div>
  );
}

export default TodosHome