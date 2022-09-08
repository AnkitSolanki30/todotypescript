import React, { useRef, useState, useEffect } from 'react'
import { Todo } from '../../module/model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md"
import { useDispatch } from "react-redux";
import * as action from './_redux/TodosAction'


interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const dispatch = useDispatch()
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.content)


    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo._id === id ? { ...todo, checked: !todo.checked } : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo._id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        console.log(id);
        let content = editTodo;
            let checked = todo.checked;
            let data = { content, checked };
            dispatch(action.editTodos(data, id));
        e.preventDefault();
        // setTodos(todos.map((todo) => (todo._id === id? {...todo, todo: editTodo} : todo)))
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      inputRef.current?.focus();
    }, [edit])
    

    return (
        <form className='todos_single' onSubmit={(e) => handleEdit(e, todo._id)}>
            {
                edit ? (
                    <input value={editTodo} ref={inputRef} onChange={(e) => setEditTodo(e.target.value)} className="todos_single_text" />
                ) : (
                    todo.checked ? (
                        <s className='todos_single_text text-break'>{todo.content}</s>
                    ) : (
                        <span className='todos_single_text text-break'>{todo.content}</span>
                    )
                )
            }
            <div>
                <span className='icon' onClick={() => {
                    if (!edit && !todo.checked) {
                        setEdit(!edit)
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className='icon' onClick={() => handleDelete(todo._id)}>
                    <AiFillDelete />
                </span>
                <span className='icon' onClick={() => handleDone(todo._id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo