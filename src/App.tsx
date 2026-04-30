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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/netsuite-implementations" element={<NetSuite />} />
          <Route path="/odoo-implementations" element={<Odoo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
