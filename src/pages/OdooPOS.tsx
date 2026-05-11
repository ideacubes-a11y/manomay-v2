import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  Smartphone, 
  Wifi, 
  Database, 
  Store, 
  Utensils, 
  BarChart3, 
  ShieldCheck, 
  Zap,
  Layers,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OdooPOS() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-brand" />,
      title: "Web-Based Interface",
      description: "Designed for speed and ease of use, Odoo POS works in any web browser and functions like a local application."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-brand" />,
      title: "Multi-Device Support",
      description: "Compatible with any device—tablets, laptops, or industrial touchscreens. No special hardware required."
    },
    {
      icon: <Wifi className="w-8 h-8 text-brand" />,
      title: "Offline Reliability",
      description: "Keep selling even when your internet goes down. Odoo POS automatically syncs data when the connection returns."
    },
    {
      icon: <Database className="w-8 h-8 text-brand" />,
      title: "Full Odoo Integration",
      description: "Seamlessly connected to Inventory, Sales, Accounting, and CRM for a truly unified business ecosystem."
    }
  ];

  const sectorFeatures = [
    {
      category: "Retail",
      icon: <Store className="w-12 h-12 text-brand" />,
      points: [
        "Multiple price lists and multi-currency support",
        "Loyalty programs and gift cards",
        "Inventory tracking across multiple branches",
        "Customer history and personalized marketing"
      ]
    },
    {
      category: "Restaurants",
      icon: <Utensils className="w-12 h-12 text-brand" />,
      points: [
        "Table mapping and management",
        "Kitchen printing and status tracking",
        "Splitting bills and tipping support",
        "Seamless table-service or fast-food modes"
      ]
    }
  ];

  const benefits = [
    {
      title: "Reduction of Errors",
      desc: "Manual entry errors are eradicated with automatic synchronization and barcode integration.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand" />
    },
    {
      title: "Data-Driven Decisions",
      desc: "Real-time analytics and reporting allow you to monitor sales trends and staff performance instantly.",
      icon: <BarChart3 className="w-6 h-6 text-brand" />
    },
    {
      title: "Scalability",
      desc: "Easily add new stores or points of sale as your business grows without infrastructure headaches.",
      icon: <Zap className="w-6 h-6 text-brand" />
    }
  ];

  const faqs = [
    {
      q: "Does Odoo POS require a constant internet connection?",
      a: "No. Odoo Point of Sale remains functional even when your connection drops. All transactions are stored locally in the browser's storage and automatically synchronized with the database once the connection is restored. This ensures zero downtime during busy hours."
    },
    {
      q: "Can we use our existing hardware or do we need to buy new equipment?",
      a: "Odoo POS is highly flexible. Since it's web-based, it runs on standard browsers. You can use tablets (iPad/Android), laptops, or industrial touchscreens. For peripherals like printers and scanners, Odoo supports most industry-standard hardware through the IoT Box or direct USB/Network connections."
    },
    {
      q: "How does it handle multiple branches and inventory?",
      a: "Odoo POS is designed for multi-company and multi-store environments. You can manage centralized inventory with real-time updates across all branches. When a sale is made, stock is automatically reduced from the specific location's inventory, and accounting entries are generated instantly."
    },
    {
      q: "Does it support complex pricing and loyalty programs?",
      a: "Yes! You can manage multiple price lists (B2B vs B2C, seasonal discounts, or member-only pricing), gift cards, and points-based loyalty programs. These are fully integrated with your CRM, allowing you to track customer behavior across all touchpoints."
    },
    {
      q: "Can we manage table bookings and kitchen orders for restaurants?",
      a: "Absolutely. Odoo POS includes a specialized 'Restaurant' mode with floor plan mapping, kitchen order printing (KOS), staging for courses, and bill splitting capabilities. It's built to handle high-volume service environments with speed."
    },
    {
      q: "What kind of reporting and analytics are available?",
      a: "You get real-time dashboards showing sales by product, salesperson, or category. Since it's part of the wider Odoo ecosystem, you can also generate deep financial reports, tax summaries, and profitability analyses without manual data entry."
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand/20">
      {/* Hero Section */}
      <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 blur-[150px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 blur-[150px] translate-y-1/2 -translate-x-1/3 rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-brand text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 lg:mb-8 shadow-sm justify-center">
                 <Store className="w-3.5 h-3.5 text-brand" /> Odoo Point of Sale
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-slate-900 mb-6 tracking-tight leading-tight lg:leading-[1] font-jakarta">
                Optimize Your <br className="hidden md:block"/>
                <span className="font-display italic font-normal text-brand text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] px-1">Points of Sale</span>
                <br className="hidden md:block"/> With Odoo.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                A fast, reliable, and user-friendly interface that works on any device. Scale your retail or restaurant operations with ease.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <Link to="/contact" className="bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 flex items-center justify-center gap-2 group">
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-slate-200 pt-8 items-center justify-center lg:justify-start">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                  <span className="font-semibold text-slate-700">Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <span className="font-semibold text-slate-700">Offline Capability</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="relative aspect-[4/3] max-w-2xl mx-auto lg:max-w-none">
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-4 sm:border-8 border-white bg-white">
                  <img 
                    src="/Odoo_POS_Hero.jpeg" 
                    alt="Odoo POS Hero" 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -right-4 -top-8 sm:-right-8 sm:top-12 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3 sm:gap-4 z-10"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Performance</div>
                    <div className="text-sm sm:text-lg font-bold text-slate-900">Instant Sync</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Manomay Helps Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4 flex items-center gap-2">
                <div className="w-8 h-px bg-brand"></div> Our Expertise
              </h2>
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 leading-tight tracking-tight font-jakarta">
                How Manomay Global Solutions <br/>
                <span className="font-display italic font-normal text-brand">Can help you implement Odoo POS.</span>
              </h3>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                Implementing a POS system is more than just installing software. We provide a comprehensive service that ensures your transition is smooth, your hardware is integrated, and your staff is ready.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                      <Monitor className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Architecture Audit</h4>
                      <p className="text-sm text-slate-500">We analyze your current store setup and design a custom Odoo architecture.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Hardware Setup</h4>
                      <p className="text-sm text-slate-500">Integration with printers, scanners, and terminals for a plug-and-play experience.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                      <Database className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Migration & Sync</h4>
                      <p className="text-sm text-slate-500">Seamless migration of products, prices, and customer data from your old system.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                      <Smartphone className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Staff Training</h4>
                      <p className="text-sm text-slate-500">Hands-on training sessions to ensure your team is proficient from day one.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute -inset-4 bg-brand/10 blur-3xl rounded-full opacity-50"></div>
               <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 italic text-slate-600 font-light text-xl leading-relaxed">
                 <div className="absolute top-6 left-6 text-brand/20 text-8xl font-serif">“</div>
                 <p className="relative z-10 pt-8 pb-4">
                   Manomay didn't just give us a software; they gave us a complete retail operating system. Our checkout times decreased by 40% in just two weeks.
                 </p>
                 <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                    <div>
                      <div className="font-bold text-slate-900 text-base">Retail Manager</div>
                      <div className="text-sm text-slate-500">Fast-Track Fashion</div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special About Odoo POS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4 flex items-center justify-center gap-2">
                <div className="w-8 h-px bg-brand"></div> Innovation in Retail
              </h2>
              <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight font-jakarta">What makes Odoo POS <span className="font-display italic font-normal text-brand">Special?</span></h3>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Odoo Point of Sale is a web-based interface that combines the power of a standard desktop application with the flexibility of the cloud.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand/10 group-hover:scale-110 transition-all">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Ecosystem Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 border border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Unified Business Flow</h2>
                <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight font-jakarta">
                  Beyond Just a <span className="font-display italic font-normal text-brand">Transaction.</span>
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                  Most POS systems are islands. Odoo POS is a bridge. It integrates directly with every aspect of your business, turning every sale into a data point for your entire operation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                      <BarChart3 className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Live Inventory Sync</h4>
                      <p className="text-sm text-slate-500">Every sale automatically triggers stock picking, ensuring your web store and physical store quantities are always perfectly aligned.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Automated Accounting</h4>
                      <p className="text-sm text-slate-500">Sales journals, tax reporting, and payment reconciliations are handled automatically, saving your finance team hours of manual work.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center shrink-0">
                      <Layers className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Omnichannel Loyalty</h4>
                      <p className="text-sm text-slate-500">Customers can earn points online and spend them in-store, or vice versa, creating a truly unified brand experience.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 flex flex-col justify-center">
                  <div className="space-y-8">
                     {[
                       { label: 'Total Sales Today', value: '$12,450.00', color: 'text-emerald-500' },
                       { label: 'Inventory Level (Main)', value: '84% Optimal', color: 'text-brand' },
                       { label: 'Customer Satisfaction', value: '4.9/5.0', color: 'text-amber-500' },
                       { label: 'Offline Trans. Pending', value: '0 - All Synced', color: 'text-slate-400' }
                     ].map((stat, i) => (
                       <div key={i} className="border-b border-slate-50 pb-6 last:border-0 last:pb-0">
                         <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                         <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
                       </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative rounded-[3rem] mx-4 sm:mx-8">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Domain Expertise</h2>
            <h3 className="text-3xl lg:text-4xl font-black mb-8 tracking-tight text-white font-jakarta">
              Smart Solutions for <span className="font-display italic font-normal text-brand">Both Worlds.</span>
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {sectorFeatures.map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm p-12 rounded-[2.5rem] hover:bg-white/10 transition-colors"
              >
                <div className="bg-brand/20 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">
                  {sector.icon}
                </div>
                <h4 className="text-3xl font-black mb-6 font-jakarta">{sector.category}</h4>
                <div className="space-y-4">
                  {sector.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand rounded-full"></div>
                      <span className="text-slate-300 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/5 blur-[120px] rounded-full"></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4 flex items-center gap-2">
                  <div className="w-8 h-px bg-brand"></div> Transparent Licensing
                </h2>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 leading-tight tracking-tight font-jakarta">
                  Simple Pricing. <br/>
                  <span className="font-display italic font-normal text-brand">No Surprises.</span>
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                  Odoo offers a unique "One Price for All Apps" model. This means your POS system comes with the full power of Inventory, CRM, and Accounting at no extra license cost.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.odoo.com/pricing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand text-white px-8 py-4 rounded-full font-bold hover:bg-brand/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20 group text-lg"
                  >
                    Use Odoo Price Calculator
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link to="/contact" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-center text-lg">
                    Get Implementation Quote
                  </Link>
                </div>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">One Fixed Price</div>
                      <div className="text-sm text-slate-500">Access all Odoo apps with one license</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Unlimited Support</div>
                      <div className="text-sm text-slate-500">Official Odoo support included</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Cloud Hosting</div>
                      <div className="text-sm text-slate-500">Odoo.sh or Odoo Online options</div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 p-6 bg-slate-50 rounded-2xl text-center">
                  <p className="text-sm text-slate-500 font-medium italic">"The most cost-effective ERP & POS ecosystem on the market today."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Why Odoo POS?</h2>
            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-jakarta">
              Benefits Turned into <span className="font-display italic font-normal text-brand">Results.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-brand/5 transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Smart Investment & Continuous Improvement */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand/5 p-12 rounded-[3rem] border border-brand/10"
            >
              <h4 className="text-2xl font-black text-slate-900 mb-6 font-jakarta flex items-center gap-3">
                <Store className="w-8 h-8 text-brand" /> Smart Investment with Odoo
              </h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Hardware costs are often a barrier for many businesses. Odoo POS is designed for a low Total Cost of Ownership (TCO). Since it is web-based, you can run it on tablets, laptops, or even industrial touchscreens you already own.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <span>Works on any modern browser</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <span>No proprietary expensive hardware locking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-12 rounded-[3rem] text-white"
            >
              <h4 className="text-2xl font-black mb-6 font-jakarta flex items-center gap-3">
                <Zap className="w-8 h-8 text-brand" /> Continuous Improvement
              </h4>
              <p className="text-slate-300 leading-relaxed mb-6">
                Odoo is constantly evolving. As an implementation partner, we ensure you always have access to the latest features, from advanced mobile payments to improved AI-driven sales forecasting.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <span>Automatic updates and security patches</span>
                </li>
                <li className="flex items-start gap-3 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-1" />
                  <span>Driven by a massive global community</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">FAQ</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight font-jakarta">Everything You <span className="font-display italic font-normal text-brand">Need to Know.</span></h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between font-bold text-lg text-slate-900"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-brand' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFaq === idx ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-8 pb-6 text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="bg-brand rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-3xl"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight font-jakarta text-center">
              Ready to Upgrade Your <span className="font-display italic font-normal text-white/80">Business?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 font-light leading-relaxed">
              Don't let legacy POS systems hold you back. Experience the power of unified retail and restaurant operations with Odoo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-white text-brand px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-xl">
                Get a Custom Quote
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
