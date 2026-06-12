import './App.css'
import Header from './header/header'
import NoteSection from './noteSection/NoteSection';

function App() {
  return(
    <div className="mainPage bg-[#000] w-screen h-full">

      <Header/>      
      <NoteSection/>
      
    </div>
  )
}

export default App