import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact"; 
import HeroBanner from "./components/HeroBanner";
import VideoSection from "./pages/VideoSection";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<><HeroBanner /><Home /><Shop /><About /><Contact /><VideoSection/></>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
