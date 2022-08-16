import './App.css';
// import Articles from './component/Articles';
import Footer from './component/Footer';

import Login from './component/Login/login';
import RegistrationDeveloper from './component/Registration/registrationDeveloper';
import RegistrationInvestor from './component/Registration/registrationInvestor';


import { Routes, Route } from "react-router-dom"
import Home from './component/Home/home';

// import Login from './component/Login/login';


function App() {
  return (
    <div className='app'>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/registrationDeveloper" element={<RegistrationDeveloper />} />
        <Route path="/registrationInvestor" element={<RegistrationInvestor />} />

      </Routes>
        <Footer />
    </div>
  );
}

export default App;