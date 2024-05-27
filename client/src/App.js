import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Pages/AdminPage/Admin";
import CarAdd from "./Pages/AdminPage/Car/CarAdd";
import CarDetails from "./Pages/AdminPage/Car/CarDetails";
import CarOffers from "./Pages/AdminPage/Car/CarOffers";
import CarDashboard from "./Pages/AdminPage/Car/Dashboard";
import Dashboard from "./Pages/AdminPage/Dashboard";
import HotelAdd from "./Pages/AdminPage/HotelAdd";
import HotelDetails from "./Pages/AdminPage/HotelDetails";
import HotelOffers from "./Pages/AdminPage/HotelOffers";
import HotelReview from "./Pages/AdminPage/Review";
import EnterOtp from "./Pages/EnterOtp/EnterOtp";
import Landing from "./Pages/HomePage/Landing";
import Body from "./Pages/HotelList/Body";
import Car from "./Pages/HotelList/Car";
import CarDes from "./Pages/HotelList/CarDes";
import Hotel from "./Pages/HotelList/Hotel";
import HotelDes from "./Pages/HotelList/HotelDes";
import LocalOffer from "./Pages/LocalOfferPage/LocalOffer";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import SendMail from "./Pages/SendMail/SendMail";
import Profile from "./Pages/UserProfile/Profile";
import FilterProvider from "./Services/useFilter";
import UserProfile from "./Services/useProfile";
import UserType from "./Services/useType";
import UserLocationProvider from "./Services/useUserLocation";
import LoginPage from "./components/Form/LoginPage";
import SignUp from "./components/Form/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProfile>
          <ToastContainer />
          <UserType>
            <UserLocationProvider>
              <FilterProvider>
                <Routes>
                  <Route path={"/login"} element={<LoginPage />} />
                  <Route path={"/register"} element={<SignUp />} />
                  <Route path={"/otp"} element={<EnterOtp />} />
                  <Route path={"/reset"} element={<ResetPassword />} />
                  <Route path="/sendmail" element={<SendMail />} />
                  <Route path="/offer" element={<LocalOffer />} />
                  <Route path="/" element={<Landing />} />
                  <Route path="search" element={<Body />}>
                    <Route index element={<Hotel />} />
                    <Route path="hotel" element={<Hotel />} />
                    <Route path="car" element={<Car />} />
                  </Route>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/cardescription/:id" element={<CarDes />} />
                  <Route path="/hoteldescription/:id" element={<HotelDes />} />
                  <Route path="admin" element={<Admin />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="hoteldetail" element={<HotelDetails />} />
                    <Route path="offer" element={<HotelOffers />} />
                    <Route path="review" element={<HotelReview />} />
                    <Route path="adddetail" element={<HotelAdd />} />
                    <Route path="caradd" element={<CarAdd />} />
                    <Route path="caroffers" element={<CarOffers />} />
                    <Route path="cardetails" element={<CarDetails />} />
                    <Route path="cardashboard" element={<CarDashboard />} />
                  </Route>
                </Routes>
              </FilterProvider>
            </UserLocationProvider>
          </UserType>
        </UserProfile>
      </BrowserRouter>
    </>
  );
}

export default App;
