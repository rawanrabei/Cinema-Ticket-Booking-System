 import { Routes, Route } from "react-router-dom";
import MainContent from "../pages/MainContent/MainContent";
import AboutUs from "../pages/AboutUs/AboutUs";
import Booking from "../pages/Booking/Booking";
import Cinemas from "../pages/Cinemas/Cinemas";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Offers from "../pages/Offers/Offers";
import Register from "../pages/Register/Register";
import Snacks from "../pages/Snacks/Snacks";
import UserProfile from "../pages/UserProfile/UserProfile";
import NotFound from "../pages/NotFound/NotFound";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/cinemas" element={<Cinemas />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/register" element={<Register />} />
      <Route path="/snacks" element={<Snacks />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
