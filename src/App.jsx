import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Navbar from './component/Navbar'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Fruits from './pages/Fruits'
import FruitsDetails from './pages/FruitsDetails'

function App() {


  return (
    <>
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/fruitType' element={<Fruits/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/:name' element={<FruitsDetails/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
    </>
  )
}

export default App
