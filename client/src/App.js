import './App.css';
import LandingPage from './pages/LandingPage';
import SellNow from './pages/SellNow';
import Auctions from './pages/Auctions';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Forgot from './pages/ForgotPassword';
import Reset from './pages/ResetPassowrd';
import Update from './pages/Update';
import Confirm from './pages/Confirmation';


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie"
import { loadUser } from './auth/auth.thunk';
import UserProfile from './pages/UserProfile';
import ProductDetail from './pages/product/ProductDetail';
import ProtectedRoute from './components/ProtectedRoute';
import BidsDetails from './pages/product/BidsDetails';


function App() {
  const dispatch = useDispatch();


  const { user } = useSelector((state) => state.auth)
  console.log(user)

  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const savedToken = cookies.token;

    if (savedToken && !user) {
      dispatch(loadUser());
      console.log(savedToken, "console token on render");

    }
  }, [cookies, dispatch, user]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route exact path="/sell-now" element={<ProtectedRoute Component={SellNow} />} />
      {/* <Route path="/sell-now" element={<SellNow />} /> */}

      <Route exact path="/profile" element={<ProtectedRoute Component={UserProfile} />} />
      {/* <Route path="/profile" element={<UserProfile />} /> */}

      <Route exact path="/auctions" element={<ProtectedRoute Component={Auctions} />} />
      {/* <Route path="/auctions" element={<Auctions />} /> */}

      <Route exact path="/product/:id" element={<ProtectedRoute Component={ProductDetail} />} />
      {/* <Route path="/product/:id" element={<ProductDetail />} /> */}

      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/bids/:id" element={<BidsDetails />} />

      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/forgot-password" element={<Forgot />} />

      <Route path="/password/reset/:token" element={<Reset />} />

      <Route exact path="/update" element={<ProtectedRoute Component={Update} />} />
      {/* <Route path="/update" element={<Update />} /> */}

      <Route path="/confirm" element={<Confirm />} />


    </Routes >
  );
}

export default App;
