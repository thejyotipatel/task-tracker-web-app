import { useState } from 'react'

const InputBox = () => {
  const [newTask, setNewTask] = useState('')

  const hundleSubmit = (e) => {
    e.preventDefault()
    console.log(newTask)
  }

  return (
    <form className='join mt-3' onSubmit={hundleSubmit}>
      <input
        className='input input-bordered join-item input-secondary'
        placeholder='Type here'
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className='btn join-item rounded-r-full btn-secondary'>
        add task
      </button>
    </form>
  )
}
export default InputBox
