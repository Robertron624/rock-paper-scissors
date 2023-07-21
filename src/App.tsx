import './App.css'
import Header from './components/Header'
import FirstStep from './components/FirstStep'

function App() {

  return (
    <>
      <Header />
      <div className="playground my-28">
        <FirstStep />
      </div>
      <button className='mt-10 rounded-md px-8 py-1 text-white border-2 border-white'>
        RULES
      </button>
    </>
  )
}

export default App
