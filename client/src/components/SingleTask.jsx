import { useDeleteTask, useEditTask } from './reactQuery'

const SingleTask = ({ item }) => {
  const { deleteTask, isLoading } = useDeleteTask()
  const { editTask } = useEditTask()

  return (
    <>
      <div className='w-full flex justify-between mt-5'>
        <div className='flex space-x-4 '>
          <input
            type='checkbox'
            checked={item.isDone}
            onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
            className='checkbox checkbox-secondary'
          />
          <p className={`label-text ${item.isDone && 'line-through'}`}>
            {item.title}
          </p>
        </div>

        <button
          onClick={() => deleteTask(item.id)}
          disabled={isLoading}
          className='btn btn-error btn-xs'
        >
          delete
        </button>
      </div>
    </>
  )
}
export default SingleTask
