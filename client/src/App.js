import './App.css';
import LandingPage from './pages/LandingPage';
import SellNow from './pages/SellNow';
import BuyNow from './pages/BuyNow';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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

      <Route path="/buy-now" element={<BuyNow />}>
      </Route>

      <Route path="/sign-up" element={<SignUp />}>
      </Route>

      <Route path="/sign-in" element={<SignIn />}>
      </Route>

      {/* <Route exact path="/sell-now">
        <SellNow />
      </Route>

      <Route exact path="/buy-now">
        <BuyNow />
      </Route>

      <Route exact path="/sign-in">
        <SignIn />
      </Route>
      <Route exact path="/sign-up">
        <SignUp />
      </Route> */}
    </Routes >
  );
}

export default App;
