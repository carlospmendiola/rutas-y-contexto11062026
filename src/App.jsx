import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage, LoginPage, ProductsPage, ServicesPage } from './pages/index'
import { NavBar } from './components/NavBar'
import { UserProvider } from './context/UserProvider'


function App() {


  return (

    <>
    <header><p>Rutas y Contextos</p></header>
    <NavBar/>
    <h1>Rutas y Contextos</h1>

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/servicios' element={<ServicesPage/>}></Route>
        <Route path='/productos' element={<ProductsPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
      </Routes>

    <footer><p>footer</p></footer>
    </>

  )
}

export default App
