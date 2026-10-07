
import Header from './components/layout/Header'
import Login from './components/pages/Login'
import { Route, Routes } from 'react-router'


function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </>
  )
}

export default App
