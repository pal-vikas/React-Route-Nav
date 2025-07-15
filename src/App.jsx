import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Navbar from './component/Navbar'
import './App.css'
import {Routes, Route} from "react-router-dom"

function App() {


  return (
    <>
          <Navbar/>
          {/* <h1 className='text-green-500'>Vikas Pal !</h1> */}

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
    </>
  )
}

export default App
