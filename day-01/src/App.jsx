
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Gridcol from './components/Gridcol'
import GridRow from './components/GridRow'
import Cards from './components/Cards'
import About from './components/About'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='gridcols' element={<Gridcol></Gridcol>}></Route>
        <Route path='gridrows' element={<GridRow></GridRow>}></Route>
        <Route path='gridrows' element={<GridRow></GridRow>}></Route>
        <Route path='cards' element={<Cards></Cards>}></Route>
        <Route path='about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
