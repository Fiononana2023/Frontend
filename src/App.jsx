
import './App.css'
import Body from './Components/Body'
import Footers from './Components/Footers'
import Header from './Components/Header'

function App() {
  
  return (
    <div className='bg-gradient-to-b from-purple-100 shadow-2xl min-h-screen flex flex-col justify-between rounded-xl'>
      <Header />
      <Body />
      <Footers />
    </div>
  )
}

export default App
