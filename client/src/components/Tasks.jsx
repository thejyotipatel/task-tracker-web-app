import SingleTask from './SingleTask'
import { useGetAllTask } from './reactQuery'

const Tasks = () => {
  const { isLoading, data, error } = useGetAllTask()

  if (isLoading) {
    return <span className='loading loading-spinner text-secondary'></span>
  }

  if (error) {
    return <p className='label-text'>{error.response.data}</p>
  }

  return (
    <>
      <div className='w-full'>
        {data.taskList.map((item) => {
          return <SingleTask key={item.id} item={item} />
        })}
      </div>
    </>
  )
}
export default Tasks
