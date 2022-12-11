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
      <h3>Creada Por: Nicolas Marcelo Mojavik</h3>
    </div>
  )
}

export default App
