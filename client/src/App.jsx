import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Footer from './components/Footer'
import InputBox from './components/InputBox'
import Tasks from './components/Tasks'

function App() {
  return (
    <>
      <div className='container flex justify-center pt-10'>
        <ToastContainer position='top-center' autoClose={2000} />

        <div className='card w-{900px} bg-base-100 shadow-xl'>
          <div className='card-body   items-center  '>
            <h2 className='card-title'>Task Tracker</h2>
            <InputBox />
            <Tasks />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
