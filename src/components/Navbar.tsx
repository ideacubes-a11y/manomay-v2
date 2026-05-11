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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about", isAnchor: true },
    { 
      name: "Solutions", 
      path: "/#solutions", 
      isAnchor: true,
      subLinks: [
        { name: "Odoo Implementations", path: "/odoo-implementations" },
        { name: "Odoo POS Solutions", path: "/solutions/odoo-pos" },
        { name: "NetSuite Implementations", path: "/netsuite-implementations" },
        { name: "Odoo Pricing", path: "https://www.odoo.com/pricing", isExternal: true }
      ]
    },
    { 
      name: "Industries", 
      path: "/#industries", 
      isAnchor: true,
      subLinks: [
        { name: "Retail & E-commerce", path: "/industries/retail-ecommerce" },
        { name: "Manufacturing", path: "/industries/manufacturing" },
        { name: "IT & Professional Services", path: "/industries/it-professional-services" },
        { name: "CRM & HelpDesk", path: "/industries/crm-helpdesk" }
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
                      sub.isExternal ? (
                        <a 
                          key={sub.name}
                          href={sub.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          {sub.name}
                        </a>
                      ) : (
                        <Link 
                          key={sub.name}
                          to={sub.path} 
                          className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-brand hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="bg-brand text-white px-8 py-3.5 rounded-full text-lg font-bold hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 text-center active:scale-95 group">
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden bg-white overflow-y-auto"
          >
            <div className="flex flex-col h-full min-h-screen">
              <div className="flex items-center justify-between px-6 py-6 border-b border-slate-100">
                <Logo />
                <button 
                  className="p-2 text-slate-600 hover:text-brand transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col gap-4 border-b border-slate-100 pb-4 last:border-0">
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
                      <div className="grid gap-4 pl-4 mt-2">
                        {link.subLinks.map((sub) => (
                          sub.isExternal ? (
                            <a 
                              key={sub.name}
                              href={sub.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xl font-medium text-slate-500 hover:text-brand flex items-center gap-3"
                              onClick={() => setIsOpen(false)}
                            >
                              <ChevronRight size={18} className="text-brand" />
                              {sub.name}
                            </a>
                          ) : (
                            <Link 
                              key={sub.name}
                              to={sub.path} 
                              className="text-xl font-medium text-slate-500 hover:text-brand flex items-center gap-3"
                              onClick={() => setIsOpen(false)}
                            >
                              <ChevronRight size={18} className="text-brand" />
                              {sub.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="block bg-brand text-white text-center px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-brand/20 transition-all active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    Request Architecture Audit
                  </Link>
                </div>

                <div className="mt-auto py-8 text-center border-t border-slate-100">
                  <p className="text-slate-400 text-sm">© 2024 Manomay Global Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
