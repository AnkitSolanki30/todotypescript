import React, { useRef, useState, useEffect } from 'react'
import { Todo } from '../../module/model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md"
import * as action from './_redux/TodosAction'
import { useAppDispatch } from '../../Redux/hooks'

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const dispatch = useAppDispatch()
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.content)
    const [checkedStatus, setCheckedStatus] = useState<boolean>(todo.checked)


    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo._id === id ? { ...todo, checked: !checkedStatus } : todo))
        let content = editTodo;
        if (checkedStatus) {
            let checked = false;
            let data  = { content, checked };
            dispatch(action.editTodos(data, id));
            setCheckedStatus(!checkedStatus);
        } else {
            let checked = true;
            let data = { content, checked };
            dispatch(action.editTodos(data, id));
            setCheckedStatus(!checkedStatus);
        }
    }

    const handleDelete = async (id: number) => {
        setTodos(todos.filter((todo) => todo._id !== id))
        await dispatch(action.deleteTodos(id));
    }

    const handleEdit = async (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (todo._id === id? {...todo, content: editTodo} : todo)))
        let content = editTodo;
        let checked = checkedStatus;
        let data = { content, checked };
        await dispatch(action.editTodos(data, id));
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