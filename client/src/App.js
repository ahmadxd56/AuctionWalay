import './App.css';
import LandingPage from './pages/LandingPage';
import SellNow from './pages/SellNow';
import Auctions from './pages/Auctions';
// import SingleProduct from './pages/SingleProduct';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Forgot from './pages/ForgotPassword';
import Reset from './pages/ResetPassowrd';
import Update from './pages/Update';
import Confirm from './pages/Confirmation';

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
      </Route>

      <Route path="/sell-now" element={<SellNow />}>
      </Route>

      {/* <Route path="/singleproduct/:id" element={<SingleProduct />}>
      </Route> */}

      <Route path="/auctions" element={<Auctions />}>
      </Route>

      <Route path="/sign-up" element={<SignUp />}>
      </Route>

      <Route path="/sign-in" element={<SignIn />}>
      </Route>
      
      <Route path="/forgot-password" element={<Forgot />}>
      </Route>

      <Route path="/reset" element={<Reset />}>
      </Route>

      <Route path="/update" element={<Update />}>
      </Route>

      <Route path="/confirm" element={<Confirm />}>
      </Route>

    </Routes >
  );
}

export default App;
