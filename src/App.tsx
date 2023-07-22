import './App.css'
import Header from './components/Header'
import FirstStep from './components/FirstStep'
import SecondStep from './components/SecondStep'
import ThirdStep from './components/ThirdStep'
import FourthStep from './components/FourthStep'

function App() {

  return (
    <>
      <Header />
      <div className="playground my-28">
        <FirstStep />
        <SecondStep />
        <ThirdStep />
        <FourthStep />
      </div>
      <button className='rounded-md px-8 py-1 text-white border-2 border-white'>
        RULES
      </button>
    </>
  )
}

export default App
