
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navber from './Components/pages/Navber/Navber';
import Footer from './Components/pages/Footer/Footer';
import Home from './Components/pages/Home/Home';
import Login from './Components/pages/Login/Login';
import Register from './Components/pages/Register/Register';
import Map from './Components/pages/Map/Map';
import Requireauth from './Components/pages/Requireauth/Requireauth';




function App() {

  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/map" element={<Map />}></Route> */}
        <Route path="/map" element={<Requireauth><Map /></Requireauth>} />

        {/* <Route path="/map" element={<Map />} /> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
