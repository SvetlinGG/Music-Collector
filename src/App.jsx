
import Header from './components/layout/Header'
import Login from './components/pages/Login'
import { Route, Routes } from 'react-router'
import Register from './components/register/Register'


function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      
    </>
  )
}

export default App
