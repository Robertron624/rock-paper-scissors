import './App.css'
import Header from './components/Header'
import FirstStep from './components/FirstStep'
import SecondStep from './components/SecondStep'

function App() {

  return (
    <>
      <Header />
      <div className="playground my-28">
        <FirstStep />
        <SecondStep />
      </div>
      <button className='mt-10 rounded-md px-8 py-1 text-white border-2 border-white'>
        RULES
      </button>
    </>
  )
}

export default App
