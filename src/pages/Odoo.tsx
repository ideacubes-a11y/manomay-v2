import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  Code, 
  RefreshCw, 
  Link as LinkIcon, 
  Lightbulb, 
  LifeBuoy,
  TrendingUp,
  Clock,
  DollarSign,
  Search,
  Zap,
  ChevronDown,
  Layers,
  Store,
  Award,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Cpu,
  BarChart3,
  ShoppingCart,
  Users,
  Briefcase,
  Factory,
  Building2,
  Heart,
  Calculator
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import odooHero from "../assets/images/regenerated_image_1778649322700.jpg";

export default function Odoo() {
  const [activeModule, setActiveModule] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const modules = [
    { 
      name: "Sales & CRM", 
      icon: <Users className="w-5 h-5" />, 
      desc: "Lead management, sales pipelines, and quotation automation.",
      features: ["Lead management", "Sales pipelines", "Quotation automation", "Customer tracking", "Follow-up management"]
    },
    { 
      name: "Accounting & Finance", 
      icon: <Calculator className="w-5 h-5" />, 
      desc: "Invoicing, expense management, and financial reporting.",
      features: ["Invoicing", "Expense management", "Financial reporting", "Tax management", "Payment reconciliation"]
    },
    { 
      name: "Inventory & Warehouse", 
      icon: <Layers className="w-5 h-5" />, 
      desc: "Stock management, procurement, and barcode systems.",
      features: ["Stock management", "Procurement workflows", "Barcode systems", "Warehouse tracking", "Purchase management"]
    },
    { 
      name: "HR & Payroll", 
      icon: <HeartHandshake className="w-5 h-5" />, 
      desc: "Employee tracking, attendance, and payroll automation.",
      features: ["Employee management", "Attendance tracking", "Payroll automation", "Recruitment workflows", "Leave management"]
    },
    { 
      name: "Project & Task Management", 
      icon: <Briefcase className="w-5 h-5" />, 
      desc: "Planning, allocation, and team collaboration.",
      features: ["Project planning", "Task allocation", "Team collaboration", "Timesheets", "Resource management"]
    },
    { 
      name: "Marketing Automation", 
      icon: <BarChart3 className="w-5 h-5" />, 
      desc: "Email, WhatsApp, and social media campaigns.",
      features: ["Email marketing", "WhatsApp marketing", "Social media campaigns", "Customer segmentation", "Lead nurturing"]
    },
    { 
      name: "eCommerce & Website", 
      icon: <ShoppingCart className="w-5 h-5" />, 
      desc: "Store integration, Shopify sync, and customer portals.",
      features: ["Website development", "Online store integration", "Shopify integration", "Customer portals", "Online payment systems"]
    }
  ];

  const processSteps = [
    { title: "Requirement Gathering", num: "01", desc: "Understanding your business operations and challenges." },
    { title: "ERP Planning & Consultation", num: "02", desc: "Selecting modules and defining implementation strategy." },
    { title: "Customization & Development", num: "03", desc: "Configuring Odoo based on your workflows." },
    { title: "Data Migration", num: "04", desc: "Secure migration from existing systems." },
    { title: "Integration", num: "05", desc: "Connecting third-party tools and applications." },
    { title: "Testing & Training", num: "06", desc: "Ensuring smooth adoption by your team." },
    { title: "Go-Live & Support", num: "07", desc: "Complete deployment with ongoing support and optimization." }
  ];

  const trustedBrands = [
    { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_logo_%282019%29.svg" },
    { name: "Danone", logo: "https://www.vectorlogo.zone/logos/danone/danone-ar21.svg" },
    { name: "WWF", logo: "https://cdn.simpleicons.org/wwf/white" },
    { name: "Hyatt", logo: "https://www.vectorlogo.zone/logos/hyatt/hyatt-ar21.svg" },
    { name: "JPL", logo: "https://cdn.simpleicons.org/nasa/white" }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand/20 font-sans">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center min-h-[85vh]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 blur-[150px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 blur-[150px] translate-y-1/2 -translate-x-1/3 rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-slate-200 text-brand text-sm font-black uppercase tracking-[0.2em] mb-10 shadow-sm justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4" /> Official Odoo Partner
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight lg:leading-[1.1] tracking-tight mb-8 font-jakarta">
                <span className="block mb-2">Smart ERP Solutions for</span>
                <span className="font-display italic font-normal text-brand">
                  Startups & SMEs
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light lg:min-h-[120px]">
                Simplify operations, improve visibility, and accelerate growth with powerful, customized Odoo ERP implementations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <Link to="/contact" className="bg-brand text-white px-12 py-6 rounded-full text-xl font-black hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 flex items-center justify-center gap-3 active:scale-95 group">
                  Book Free Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 border-t border-slate-200 pt-8 items-center justify-center lg:justify-start">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <span className="font-bold text-slate-700">Official Partner</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <span className="font-bold text-slate-700">Startup Specialists</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[16/11] lg:aspect-[4/3]">
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-8 border-white bg-white">
                  <img 
                    src={odooHero} 
                    alt="Working with Odoo ERP" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
                
                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -left-4 lg:-left-12 top-12 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white flex items-center gap-4 z-20"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Real-time</div>
                    <div className="text-xl font-black text-slate-900">Process Automation</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -right-4 lg:-right-8 bottom-12 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white flex items-center gap-4 z-20"
                >
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Unified</div>
                    <div className="text-xl font-black text-slate-900">Total Integration</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[85rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <h2 className="text-brand font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                <div className="w-10 h-px bg-brand"></div> Why Businesses Need ERP
              </h2>
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 leading-tight">
                Stop Managing Tools. <br/><span className="font-display italic font-normal text-brand">Start Managing Growth.</span>
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>
                  Running a business today means managing multiple operations at once — sales, inventory, accounting, HR, projects, and reporting. 
                </p>
                <p>
                  For many growing companies, these processes are often handled through disconnected software, spreadsheets, and manual follow-ups. This creates delays, operational confusion, and unnecessary costs.
                </p>
                <p className="border-l-4 border-brand pl-6 text-slate-900 font-bold italic py-2">
                  Odoo implementation transforms fragmented business operations into one fully integrated ecosystem.
                </p>
              </div>
            </motion.div>
            
            <div className="space-y-8 lg:col-span-8">
              <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                 <h4 className="text-xl font-bold text-slate-900 mb-6">Common Growing Pains:</h4>
                 <ul className="space-y-4">
                   {[
                     "Excel sheets for inventory",
                     "Manual invoicing & reporting",
                     "Standalone accounting software",
                     "Separate CRM tools",
                     "Email-based approvals",
                     "Disconnected HR & payroll"
                   ].map((pain, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0"></div>
                       <span className="text-slate-600 font-medium">{pain}</span>
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 bg-white">
                <img 
                  src="/disconnected-apps.jpg.jpeg" 
                  alt="Disconnected apps vs Odoo Ecosystem" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Odoo Section with Proper Intro */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
             <div>
                <h2 className="text-brand font-black uppercase tracking-widest text-sm mb-4">What is Odoo ERP?</h2>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">One Unified Platform <br />For Everything.</h3>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Odoo is a modern, open-source ERP platform that integrates all major business functions into one unified system. 
                  Instead of using separate tools for CRM, accounting, HR, and sales, Odoo allows businesses to manage everything from a single centralized platform.
                </p>
             </div>
             <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Modular", desc: "Start with what you need, add more later." },
                  { title: "User-Friendly", desc: "Intuitive interface for fast adoption." },
                  { title: "Affordable", desc: "Cost-effective for startups & SMEs." },
                  { title: "Scalable", desc: "Built for long-term business growth." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200">
                    <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Modular Architecture", desc: "Start small and add functionalities as operations grow without replacing the existing system." },
              { title: "High Flexibility", desc: "Every business has unique workflows. Odoo can be customized extensively to fit your requirements." },
              { title: "Affordable Pricing", desc: "Designed to be accessible for growing businesses with a modular cost structure." },
              { title: "Integrated Ecosystem", desc: "All departments work within one platform, eliminating duplicate work and disconnected systems." },
              { title: "User Interface", desc: "Odoo's intuitive interface ensures faster employee adoption and reduced training time." },
              { title: "Future Ready", desc: "Whether you're a startup or enterprise, Odoo provides a foundation for long-term growth." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-1 bg-brand mb-6"></div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Odoo Modules - Strategic Technical Overhaul */}
      <section className="bg-slate-950 text-white py-0 overflow-hidden">
        {/* Header Strip */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-baseline gap-12"
          >
              <h2 className="text-2xl lg:text-4xl font-black tracking-tighter leading-[0.8] text-white">
                MODULE <br/>
                <span className="text-brand inline-flex items-center gap-8">
                  MATRIX 
                  <div className="h-px flex-1 bg-white/20 min-w-[100px] hidden lg:block"></div>
                </span>
              </h2>
            <div className="max-w-md">
              <p className="text-xl lg:text-2xl text-slate-400 font-medium leading-relaxed font-mono uppercase tracking-tight">
                // System Architecture v4.0 <br/>
                Deep vertical integration across the enterprise core.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Modules Waterfall */}
        <div className="space-y-0">
          {modules.map((module, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 1 }}
              className={`group relative border-b border-white/5 min-h-[70vh] flex flex-col lg:flex-row items-stretch ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Massive Image/Identity Side */}
              <div className="lg:w-1/2 relative overflow-hidden bg-slate-900 border-x border-white/5">
                 <div className="absolute inset-0 opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-[2s]">
                    <img 
                      src={`https://images.unsplash.com/photo-${idx === 0 ? '1552664730-d307ca884978' : idx === 1 ? '1554224155-8d04cb21cd6c' : idx === 2 ? '1586528116311-ad8dd3c8310d' : idx === 3 ? '1521791136064-7986c2923216' : idx === 4 ? '1454165833222-38c71595fe66' : idx === 5 ? '1460925895917-afdab827c52f' : '1516321318423-f06f85e504b3'}?auto=format&fit=crop&q=80&w=1200`} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                 </div>
                 
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-transparent to-slate-950/50 flex flex-col justify-between p-12 lg:p-20">
                    <div className="text-[6rem] lg:text-[8rem] font-black text-white/5 leading-none select-none -translate-x-1/4">
                      0{idx + 1}
                    </div>
                    <div className="relative z-10">
                       <div className="w-24 h-24 bg-brand text-white rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-brand/40 scale-125">
                         {module.icon}
                       </div>
                       <h4 className="text-2xl lg:text-3xl font-black tracking-tighter leading-none mb-6">
                         {module.name}
                       </h4>
                       <div className="h-2 w-32 bg-white/20"></div>
                    </div>
                 </div>
              </div>

              {/* Technical features side */}
              <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-slate-950">
                <p className="text-xl lg:text-2xl font-light text-slate-300 leading-tight mb-16 max-w-2xl font-jakarta italic">
                  "{module.desc}"
                </p>

                <div className="grid gap-1 border-t border-white/10 pt-16">
                  <div className="text-[10px] font-black text-brand uppercase tracking-[0.4em] mb-12">Deployment Specifications</div>
                  
                  <div className="space-y-4">
                    {module.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center group/item cursor-default">
                        <div className="w-8 h-px bg-white/10 group-hover/item:w-16 group-hover/item:bg-brand transition-all duration-500 mr-6"></div>
                        <span className="text-lg lg:text-xl font-black tracking-tight text-white/40 group-hover/item:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
                   <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
                     <div className="w-2 h-2 rounded-full bg-white/20"></div>
                     <div className="w-2 h-2 rounded-full bg-white/20"></div>
                   </div>
                   <div className="font-mono text-[10px] text-white/30 tracking-[0.2em]">INTEGRATION_STATUS: OPTIMAL</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Ideal Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand font-black uppercase tracking-widest text-sm mb-4">Why Odoo?</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Ideal for Startups & SMEs.</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light italic">Flexible, affordable, and easy to adopt.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Affordability", desc: "Start with only what you need and expand gradually as operations grow. Reduce unnecessary software costs." },
              { title: "Scalable Architecture", desc: "Modular structure allows new functionalities to be added anytime without replacing the entire system." },
              { title: "User Adoption", desc: "Intuitive design ensures faster employee adoption and significantly reduced training time." },
              { title: "Fully Integrated", desc: "One connected platform for all departments, eliminating duplicate work and data silos." }
            ].map((card, idx) => (
              <div key={idx} className="flex gap-6 p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-brand transition-colors">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm font-black text-xl shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Worldwide */}
      <section className="py-20 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-brand font-black uppercase tracking-widest text-xs mb-4">Trusted Worldwide</h2>
            <h3 className="text-3xl font-black text-white">Used by Global Leaders.</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
             {trustedBrands.map((brand, idx) => (
               <div key={idx} className="flex items-center justify-center p-4">
                 {!brokenImages[brand.name] ? (
                   <img 
                     src={brand.logo} 
                     alt={brand.name} 
                     className="h-8 md:h-12 w-auto object-contain invert brightness-0"
                     loading="lazy"
                     referrerPolicy="no-referrer"
                     onError={() => setBrokenImages(prev => ({ ...prev, [brand.name]: true }))}
                   />
                 ) : (
                   <span className="text-white font-bold opacity-50 text-xl tracking-tight">
                     {brand.name}
                   </span>
                 )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Why Choose Manomay */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team Support" className="rounded-[3rem] shadow-2xl" />
              <div className="absolute -bottom-8 -right-8 bg-brand p-10 rounded-[2.5rem] text-white shadow-2xl">
                 <div className="text-4xl font-black mb-1">Official</div>
                 <div className="text-xl font-bold opacity-80">Odoo Partner</div>
              </div>
            </div>
            <div>
              <h2 className="text-brand font-black uppercase tracking-widest text-sm mb-4">Why Manomay?</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">Your Strategic ERP Partner.</h3>
              <div className="space-y-8">
                 {[
                   { title: "Official Expertise", desc: "We bring deep technical and business process expertise to every implementation project." },
                   { title: "Customized ERP Solutions", desc: "No generic implementation approach. Every solution is tailored to your operations and business goals." },
                   { title: "End-to-End Support", desc: "From consultation and implementation to training, customization, integration, and ongoing support — we handle everything." },
                   { title: "Startup & SME Focus", desc: "We specialize in helping growing businesses implement enterprise-grade systems without enterprise-level complexity." },
                   { title: "Scalable Long-Term Partnership", desc: "As your business grows, we help scale and optimize your ERP ecosystem continuously." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-4">
                     <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                     </div>
                     <div>
                       <h4 className="font-black text-slate-900 text-xl mb-1">{item.title}</h4>
                       <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[#4C1D95] text-white rounded-[4rem] mx-4 sm:mx-8 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sky-300 font-black uppercase tracking-widest text-sm mb-4">Industries We Serve</h2>
            <h3 className="text-4xl font-black">
              Scalable <span className="font-display italic font-normal">Digital Transformation.</span>
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Startups", icon: <Rocket />, desc: "Build structured operational systems from day one for chaos-free growth." },
              { name: "Small & Medium Businesses", icon: <Building2 />, desc: "Replace disconnected tools with centralized systems that improve visibility." },
              { name: "Retail & eCommerce", icon: <ShoppingCart />, desc: "Integrated inventory, POS, accounting, CRM, and storefront management." },
              { name: "Manufacturing & Distribution", icon: <Factory />, desc: "Supply chain, procurement, warehouse, and production workflow automation." },
              { name: "Construction & Real Estate", icon: <Briefcase />, desc: "Project management, procurement tracking, accounting, and contractor workflows." },
              { name: "NGOs & Nonprofits", icon: <Heart />, desc: "Donation management, procurement, finance tracking, and operational reporting." }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                <div className="text-sky-300 mb-6 group-hover:scale-110 transition-transform">{ind.icon}</div>
                <h4 className="text-2xl font-bold mb-2">{ind.name}</h4>
                <p className="text-slate-100/60 font-medium text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Detailed */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-brand font-black uppercase tracking-widest text-sm mb-4">Our Process</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">Strategic Implementation.</h3>
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              We work closely with founders, management teams, and operational departments to ensure smooth ERP adoption with minimal disruption.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
             {processSteps.map((step, idx) => (
               <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="text-4xl font-black text-brand/20 mb-4">{step.num}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center relative overflow-hidden bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 leading-[1.1]">
              Transform Your Business <br/><span className="text-brand italic font-display font-normal">With Odoo ERP.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Modern businesses need modern operational systems. Whether you are a startup, a small business, or a growing enterprise, implementing the right ERP system can dramatically improve efficiency, visibility, and scalability.
            </p>
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 mb-12">
               <h3 className="text-2xl font-black text-slate-900 mb-4">Ready to simplify your operations?</h3>
               <p className="text-slate-600 mb-8 font-medium">Contact Manomay Global Solutions today to discover how we can help transform your business operations with a fully integrated ERP solution.</p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-brand text-white px-12 py-6 rounded-full text-2xl font-black hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 flex items-center justify-center gap-4 active:scale-95 group">
                  Book Free Consultation
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


