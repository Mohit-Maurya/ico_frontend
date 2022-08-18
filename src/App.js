import './App.css';
import HomeCoinslist from './component/Home/HomeCoinList';
import Login from './component/Login/login';
import RegistrationDeveloper from './component/Registration/registrationDeveloper';
import RegistrationInvestor from './component/Registration/registrationInvestor';
import DevMain from './component/developer/main';
import DevProfile from './component/developer/profile';
import DevICO from './component/developer/listcoin';
import Devcoinslist from './component/developer/devcoinlist';
import Allocate from './component/developer/allocate';
import Coinslist from './component/Investor/coinslist';
import CoinDetail from './component/Investor/coinDetail';
import Profile from './component/Investor/profile';
import InvestorMain from './component/Investor/main';
import InvestorHistory from './component/Investor/history';
import Header from "./component/Header/Header"
import { Routes, Route } from "react-router-dom"
import Home from './component/Home/home';
import RegistrationOption from './component/Registration/registrationOption';
import Footer from './component/Footer';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/coinslisthome" element={<HomeCoinslist />} />

        <Route path="/investor/coinslist" element={<Coinslist />} />
        <Route path="/investor" element={<InvestorMain />} />
        <Route path='/investor/coindetails' element={<CoinDetail/>}/>
        <Route path='/investor/profile' element={<Profile />}/>
        <Route path='/investor/history' element={<InvestorHistory />}/>

        <Route path="/registrationOption" element={<RegistrationOption />} />
        <Route path="/registrationDeveloper" element={<RegistrationDeveloper />} />
        <Route path="/registrationInvestor" element={<RegistrationInvestor />} />


        <Route path="/developer" element={<DevMain />} />
        <Route path="/developer/profile" element={<DevProfile />} />
        <Route path="/developer/listcoin" element={<DevICO />} />
        <Route path="/developer/coinslist" element={<Devcoinslist />} />
        <Route path="/developer/allocate" element={<Allocate />} />

      </Routes>
      <Footer />
       
    </div>
  );
}

export default App;