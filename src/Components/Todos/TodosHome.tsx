import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

import * as action from './_redux/TodosAction'
import { clearCookie } from '../../Utils/cookieUtils';
import '../../App.scss'
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import { Todo } from '../../module/model';
import { useDispatch } from "react-redux";



const TodosHome = () => {

  const navigation = useNavigate();
  const dispatch = useDispatch()

  const todosData = useSelector(state => state.todosListInformation.todos)
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>(todosData)

  const ACCESS_TOKEN = "TodoAccessToken";

  console.log("TodosHome", todos);

  useEffect(() => {
    getList()
    return () => { };
  }, [])

  useEffect(() => {
    setTodos(todosData);
    return () => { };
  }, [todosData])

  // useEffect(() => {
  //   console.log("useEffect and handleAddTodo");

  //   return () => { };
  // }, [])

  const getList = () => {
    let url = "";
    dispatch(action.fetchTodos(url));
  }

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { _id: Date.now(), content: todo, checked: false }])
      setTodo("")
    }
  }

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
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodosHome