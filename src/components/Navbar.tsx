import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about", isAnchor: true },
    { 
      name: "Solutions", 
      path: "/#solutions", 
      isAnchor: true,
      subLinks: [
        { name: "Odoo Implementations", path: "/odoo-implementations" },
        { name: "NetSuite Implementations", path: "/netsuite-implementations" }
      ]
    },
    { 
      name: "Industries", 
      path: "/#industries", 
      isAnchor: true,
      subLinks: [
        { name: "Retail & E-commerce", path: "/industries/retail-ecommerce" },
        { name: "Manufacturing", path: "/industries/manufacturing" }
      ]
    },
    { name: "Modules", path: "/#modules", isAnchor: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white/90 backdrop-blur-md py-4 border-b border-slate-200"}`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.isAnchor ? (
                <a href={link.path} className="text-lg font-medium text-slate-600 hover:text-brand transition-colors py-2 flex items-center gap-1">
                  {link.name}
                </a>
              ) : (
                <Link to={link.path} className="text-lg font-medium text-slate-600 hover:text-brand transition-colors py-2">
                  {link.name}
                </Link>
              )}
              
              {link.subLinks && (
                <div className="absolute top-full -left-4 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 w-64 flex flex-col">
                    {link.subLinks.map((sub) => (
                      <Link 
                        key={sub.name}
                        to={sub.path} 
                        className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="bg-brand text-white px-6 py-2.5 rounded-full text-lg font-semibold hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 text-center">
            Request Architecture Audit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-600 hover:text-brand transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-white overflow-y-auto pt-24 pb-12 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4 border-b border-slate-100 pb-4">
                  {link.isAnchor ? (
                    <a 
                      href={link.path} 
                      className="text-2xl font-bold text-slate-900 flex items-center justify-between"
                      onClick={() => !link.subLinks && setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="text-2xl font-bold text-slate-900"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                  
                  {link.subLinks && (
                    <div className="grid gap-3 pl-4">
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path} 
                          className="text-lg font-medium text-slate-500 hover:text-brand flex items-center gap-2"
                        >
                          <ChevronRight size={16} />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                to="/contact" 
                className="bg-brand text-white text-center px-6 py-4 rounded-xl text-xl font-bold mt-4 shadow-xl shadow-brand/20"
                onClick={() => setIsOpen(false)}
              >
                Request Architecture Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
