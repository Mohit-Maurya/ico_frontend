import './App.css';
// import Articles from './component/Articles';
import Footer from './component/Footer';

import Login from './component/Login/login';
import DevMain from './component/developer/main';
import DevProfile from './component/developer/profile';
import DevICO from './component/developer/listcoin';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home/home';

function App() {
  return (
    <div className='app'>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/developer" element={<DevMain />} />
        <Route path="/developer/profile" element={<DevProfile />} />
        <Route path="/developer/listcoin" element={<DevICO />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
