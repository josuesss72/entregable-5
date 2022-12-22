import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import './pages/home/Home.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './pages/pokedex/Pokedex'
import './pages/pokedex/Pokedex.css'
import PokedexInfo from './pages/pokedexInfo/PokedexInfo'
import './pages/pokedexInfo/PokedexInfo.css'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/*rutas protegisdas*/}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={ <PokedexInfo/> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
