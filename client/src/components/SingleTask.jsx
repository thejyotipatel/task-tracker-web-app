const SingleTask = ({ item }) => {
  return (
    <>
      <div className='w-full flex justify-between mt-5'>
        <div className='flex space-x-4 '>
          <input
            type='checkbox'
            checked={item.isDone}
            onChange={() => console.log('edit task')}
            className='checkbox checkbox-secondary'
          />
          <p className={`label-text ${item.isDone && 'line-through'}`}>
            {item.title}
          </p>
        </div>

        <button
          onClick={() => console.log('delete task')}
          className='btn btn-error btn-xs'
        >
          delete
        </button>
      </div>
    </>
  )
}
export default SingleTask
