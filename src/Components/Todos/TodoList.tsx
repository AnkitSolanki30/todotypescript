import React from 'react'
import { Todo } from '../../module/model'
import SingleTodo from './SingleTodo';
import "./style.scss"

interface Props {
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos}: Props) => {

// console.log("TodoList",todos);


  return (
    <div className='todos'>
      {todos?.map((t) =>
      <SingleTodo todo={t} key={t._id} todos={todos} setTodos={setTodos}/>)}
      </div>
  )
}

export default TodoList