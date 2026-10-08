
import Header from './components/layout/Header'
import Login from './components/pages/Login'
import { Route, Routes } from 'react-router'
import Register from './components/register/Register'
import Home from './components/pages/Home'


function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      
    </>
  )
}

export default App
