import './App.css'
import Header from './Components/header/header'
import NoteSection from './Components/noteSection/NoteSection';

function App() {
  return(
    <div className="mainPage bg-[#000] w-screen h-full overflow-hidden">

      <Header/>      
      <NoteSection/>
      
    </div>
  )
}

export default App