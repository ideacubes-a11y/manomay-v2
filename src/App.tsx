/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NetSuite from "./pages/NetSuite";
import Odoo from "./pages/Odoo";
import Contact from "./pages/Contact";
import RetailEcommerce from "./pages/RetailEcommerce";
import Manufacturing from "./pages/Manufacturing";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/netsuite-implementations" element={<NetSuite />} />
          <Route path="/odoo-implementations" element={<Odoo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
