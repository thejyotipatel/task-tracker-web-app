function App() {
  return (
    <>
      <div className='container flex justify-center pt-10'>
        <div className='card w-{900px} bg-base-100 shadow-xl'>
          <div className='card-body   items-center  '>
            <h2 className='card-title'>Daily Planner</h2>

            <div className='join mt-3'>
              <input
                className='input input-bordered join-item input-secondary'
                placeholder='Type here'
                type='text'
              />
              <button className='btn join-item rounded-r-full btn-secondary'>
                add plane
              </button>
            </div>

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
          </div>
        </div>
      </div>
    </>
  )
}

export default App
