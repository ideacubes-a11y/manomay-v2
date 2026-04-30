import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-lg font-medium text-slate-600 hover:text-brand transition-colors">Home</Link>
          <a href="/#about" className="text-lg font-medium text-slate-600 hover:text-brand transition-colors">About</a>
          <div className="relative group">
            <a href="/#solutions" className="text-lg font-medium text-slate-600 hover:text-brand transition-colors py-8">Solutions</a>
            <div className="absolute top-full -left-4 pt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 w-64 flex flex-col">
                <Link to="/odoo-implementations" className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-lg transition-colors">
                  Odoo Implementations
                </Link>
                <Link to="/netsuite-implementations" className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-lg transition-colors">
                  NetSuite Implementations
                </Link>
              </div>
            </div>
          </div>
          <a href="/#industries" className="text-lg font-medium text-slate-600 hover:text-brand transition-colors">Industries</a>
          <a href="/#modules" className="text-lg font-medium text-slate-600 hover:text-brand transition-colors">Modules</a>
          <a href="/#calculator" className="text-lg font-medium text-slate-600 hover:text-brand transition-colors">Audit</a>
          <button className="bg-brand text-white px-6 py-2.5 rounded-full text-lg font-semibold hover:bg-brand/90 transition-all shadow-lg shadow-brand/20">
            Request Architecture Audit
          </button>
        </div>
      </div>
    </nav>
  );
}
