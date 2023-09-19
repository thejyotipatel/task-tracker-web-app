const Plane = () => {
  return (
    <>
      <div className='w-full flex justify-between mt-5'>
        <div className='flex space-x-4 '>
          <input
            type='checkbox'
            checked='checked'
            className='checkbox checkbox-secondary'
          />
          <p className=' label-text'>Remember me</p>
        </div>

        <button className='btn btn-error btn-xs'>delete</button>
      </div>
    </>
  )
}
export default Plane
