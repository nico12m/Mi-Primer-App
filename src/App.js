import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards.jsx'
import characters from './data.js'

function App () {
  return (
    <div className='App'>
      <div>
        <Nav/>
      </div>
      <div>
        <Cards
          characters={characters} />
      </div>
      <h2>Creada Por:<br/> Nicolas Marcelo Mojavik</h2>
    </div>
  )
}

export default App
