import React from 'react'
import Pagination1 from '../../Base/Pagination/Pagination1';
import { Todo } from '../../module/model'
import SingleTodo from './SingleTodo';
import "./style.scss"

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  pageCount: number;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  todosTotalPage: number;
}

const TodoList = ({ todos, setTodos, pageCount, setPageCount, todosTotalPage }: Props) => {
  return (
    <>
      <div className='todos'>
        {todos?.map((t) =>
          <SingleTodo todo={t} key={t._id} todos={todos} setTodos={setTodos} />)}
      </div>
      <div>
        <Pagination1 pageCount={pageCount} setPageCount={setPageCount} todosTotalPage={todosTotalPage} />
      </div>
    </>
  )
}

export default TodoList