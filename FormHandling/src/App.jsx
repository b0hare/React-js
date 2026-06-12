import './App.css'

function App() {
  return(
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('Form submitted');
        
      }}>
        <input type="text" name="" id="" placeholder='Enter name'/>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default App