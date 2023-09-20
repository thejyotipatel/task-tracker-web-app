import Footer from './components/Footer'
import InputBox from './components/InputBox'
import Tasks from './components/Tasks'
import { nanoid } from 'nanoid'

const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
]
function App() {
  return (
    <>
      <div className='container flex justify-center pt-10'>
        <div className='card w-{900px} bg-base-100 shadow-xl'>
          <div className='card-body   items-center  '>
            <h2 className='card-title'>Task Tracker</h2>

            <InputBox />

            <Tasks items={defaultItems} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
