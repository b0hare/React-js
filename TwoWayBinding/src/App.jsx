import './App.css'
import {useState} from 'react'

function App() {
  const [name, setName] = useState('');

  return(
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('Form submitted');
          setName('');
      }}>
        <input onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value)
        }} type="text" name="" value={name} placeholder='Enter name'/>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default App