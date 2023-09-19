import Footer from './components/Footer'
import InputBox from './components/InputBox'
import Plane from './components/plane'

function App() {
  return (
    <>
      <div className='container flex justify-center pt-10'>
        <div className='card w-{900px} bg-base-100 shadow-xl'>
          <div className='card-body   items-center  '>
            <h2 className='card-title'>Task Tracker</h2>

            <InputBox />

            <Plane />
            <Plane />
            <Plane />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
