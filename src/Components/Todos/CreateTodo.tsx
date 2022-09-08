import React, { useRef } from 'react'
import "./style.scss"

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const CreateTodo = ({ todo, setTodo, handleAddTodo }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);


  return (
      <form className='input' onSubmit={(e) => {
        handleAddTodo(e)
        inputRef.current?.blur()}}>
        <input type="text"
        ref={inputRef} 
        value={todo}
        onChange={(e) => setTodo(e.target.value)} 
        placeholder="Enter task here" 
        className='input_box' />
        <button type='submit' className='input_submit'>GO</button>
      </form>
  )
}

export default CreateTodo