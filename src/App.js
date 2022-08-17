import './App.css';
// import Articles from './component/Articles';
import Footer from './component/Footer';
import Login from './component/Login/login';
import RegistrationDeveloper from './component/Registration/registrationDeveloper';
import RegistrationInvestor from './component/Registration/registrationInvestor';
import DevMain from './component/developer/main';
import DevProfile from './component/developer/profile';
import DevICO from './component/developer/listcoin';
import Coinslist from './component/Investor/coinslist';
import InvestorMain from './component/Investor/main';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home/home';

function App() {
  return (
    <div className='app'>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/investor/coinlist" element={<Coinslist />} />
        <Route path="/investor/main" element={<InvestorMain />} />
        <Route path="/" element={<Home />} />

        <Route path="/registrationDeveloper" element={<RegistrationDeveloper />} />
        <Route path="/registrationInvestor" element={<RegistrationInvestor />} />


        <Route path="/developer" element={<DevMain />} />
        <Route path="/developer/profile" element={<DevProfile />} />
        <Route path="/developer/listcoin" element={<DevICO />} />

      </Routes>
        <Footer />
    </div>
  );
}

export default App;