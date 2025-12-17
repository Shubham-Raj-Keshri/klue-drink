import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import Awards from "./components/About/Awards";


import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <main className="bg-zinc-950 text-white pt-[72px]">
              <Hero />
              <Products />
              <About />
             
              <Awards />
              <Shop />  
            </main>
          }
        />

        {/* SHOP PAGE */}
        <Route
          path="/shop"
          element={
            <main className="bg-zinc-950 text-white pt-[72px]">
              <Shop />   {/* 👈 shop as full page */}
            </main>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
