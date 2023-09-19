const InputBox = () => {
  return (
    <div className='join mt-3'>
      <input
        className='input input-bordered join-item input-secondary'
        placeholder='Type here'
        type='text'
      />
      <button className='btn join-item rounded-r-full btn-secondary'>
        add task
      </button>
    </div>
  )
}
export default InputBox
