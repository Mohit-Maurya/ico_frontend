import './App.css';
import Login from './component/Login/login';
import RegistrationDeveloper from './component/Registration/registrationDeveloper';
import RegistrationInvestor from './component/Registration/registrationInvestor';
import DevMain from './component/developer/main';
import DevProfile from './component/developer/profile';
import DevICO from './component/developer/listcoin';
import Coinslist from './component/Investor/coinslist';
import CoinDetail from './component/Investor/coinDetail';
import Profile from './component/Investor/profile';
import InvestorMain from './component/Investor/main';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home/home';
import RegistrationOption from './component/Registration/registrationOption';

function App() {
  return (
    <div className='app'>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/investor/coinlist" element={<Coinslist />} />
        <Route path="/investor/main" element={<InvestorMain />} />
        <Route path='/investor/coindetails' element={<CoinDetail/>}/>
        <Route path='/investor/profile' element={<Profile />}/>

        <Route path="/registrationOption" element={<RegistrationOption />} />
        <Route path="/registrationDeveloper" element={<RegistrationDeveloper />} />
        <Route path="/registrationInvestor" element={<RegistrationInvestor />} />


        <Route path="/developer" element={<DevMain />} />
        <Route path="/developer/profile" element={<DevProfile />} />
        <Route path="/developer/listcoin" element={<DevICO />} />

      </Routes>
       
    </div>
  );
}

export default App;