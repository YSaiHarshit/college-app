import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MultilevelDropdown from './components/MultilevelDrop'
import Navbar from './components/Navbar'
import LoginForm from './components/Login'
import Ece from './components/ECE'
import EEE from './components/EEE'
import Civil from './components/civil'
import Hs from './components/H&S'
import IT from './components/IT'
import EIE from './components/EIE'
import Mech from './components/Mech'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Signup from './components/SignUp'
import CSE from './components/CSE'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />

      
      <Navbar MultilevelDropdown={< MultilevelDropdown />} />
      <Footer />

    

     <Routes>
      <Route path='/homepage' element={< HomePage />}></Route>
      <Route path='/cse' element={< CSE />}></Route>
      <Route path='/ece' element={< Ece />}></Route>
      <Route path='/eee' element={< EEE />}></Route>
      <Route path='/eie' element={< EIE />}></Route>
      <Route path='/it' element={< IT />}></Route>
      <Route path='/civil' element={< Civil />}></Route>
      <Route path='/h&s' element={< Hs />}></Route>
      <Route path='/mech' element={< Mech />}></Route>
      
      <Route path='/signup' element={< Signup/>}></Route>
      <Route path='/navbar' element={< Navbar/>}></Route>
            
     <Route path='/login' element={< LoginForm />}></Route>

     </Routes>
    </>
  )
}



export default App
