
import Header from './components/layout/Header'
import Login from './components/pages/Login'
import { Route, Routes } from 'react-router'
import Register from './components/register/Register'
import Home from './components/pages/Home'
import Catalog from './components/pages/Catalog'


function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
      
    </>
  )
}

export default App
