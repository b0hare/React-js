import './App.css'
import Card from './Card'
import Navbar from './Navbar'

function App(){
  return (
    <><Navbar/>
    <div className='content'><Card /><Card /><Card /><Card /></div>
    </>
    
  )
}

export default App