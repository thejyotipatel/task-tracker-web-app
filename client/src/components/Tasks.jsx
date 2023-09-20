import SingleTask from './SingleTask'

const Tasks = ({ items }) => {
  return (
    <>
      <div className='w-full'>
        {items.map((item) => {
          return <SingleTask key={item.id} item={item} />
        })}
      </div>
    </>
  )
}
export default Tasks
