import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: string;
  tag: string;
  title: string;
  highlightPrefix?: string;
  highlight: string;
  description: string;
  cta1: string;
  cta2: string;
  image: string;
  imageAlt: string;
  overlayTitle: string;
  overlayDesc: string;
  floatingTopLabel: string;
  floatingTopValue: string;
  floatingBottomLabel: string;
  floatingBottomValue: string;
}

const slides: Slide[] = [
  {
    id: "main",
    tag: "Official Odoo & NetSuite Implementation Partner",
    title: "Unified Enterprise",
    highlight: "Intelligence.",
    description: "Eliminate the cost of fragmented data. We architect high-performance Odoo & Oracle NetSuite ecosystems for global enterprises that demand real-time financial clarity and automated cross-border compliance.",
    cta1: "Request Architecture Audit",
    cta2: "View Solutions",
    image: "https://i.postimg.cc/L6qs0qcZ/Implement-ERP.webp",
    imageAlt: "Confident CFO in a modern office",
    overlayTitle: "Strategic Architecture",
    overlayDesc: "Empowering finance teams with clear, unified data.",
    floatingTopLabel: "Worry Free Implementations",
    floatingTopValue: "100% Dedicated Implementations",
    floatingBottomLabel: "Certified Experts",
    floatingBottomValue: "Odoo & NetSuite"
  },
  {
    id: "odoo",
    tag: "Dedicated Odoo Implementation Partner",
    title: "Scale With",
    highlight: "Odoo ERP.",
    description: "Streamline your entire business with Odoo's fully integrated, highly customizable suite of applications. We deliver scalable architectures designed to adapt effortlessly as your company grows.",
    cta1: "Explore Odoo Services",
    cta2: "Schedule a Demo",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    imageAlt: "Team collaborating on software architecture",
    overlayTitle: "Odoo Excellence",
    overlayDesc: "End-to-end solutions for modern enterprises.",
    floatingTopLabel: "System Integration",
    floatingTopValue: "Seamless Workflows",
    floatingBottomLabel: "Odoo Experts",
    floatingBottomValue: "Custom Development"
  },
  {
    id: "netsuite",
    tag: "Dedicated NetSuite Implementation Partner",
    title: "Power Your Cloud",
    highlightPrefix: "With ",
    highlight: "NetSuite.",
    description: "Unlock visibility and control. Our NetSuite implementations provide world-class financial management, CRM, and ecommerce capabilities for ambitious mid-market to enterprise organizations.",
    cta1: "NetSuite Implementation",
    cta2: "Consult with an Expert",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    imageAlt: "Team collaborating on cloud solutions",
    overlayTitle: "NetSuite Mastery",
    overlayDesc: "Unrivaled cloud business management.",
    floatingTopLabel: "Financial Clarity",
    floatingTopValue: "Real-time Insights",
    floatingBottomLabel: "NetSuite Alliance",
    floatingBottomValue: "Proven Results"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-6">
                {slide.tag}
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                {slide.title} <br />
                {slide.highlightPrefix && <span>{slide.highlightPrefix}</span>}
                <span className="text-brand">{slide.highlight}</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl min-h-[120px]">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-brand text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 flex items-center justify-center gap-2 group">
                  {slide.cta1}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="#solutions" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center">
                  {slide.cta2}
                </a>
              </div>
              
              {/* Slider Controls */}
              <div className="flex items-center gap-4">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand transition-colors">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-brand" : "w-2 bg-slate-200"}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${slide.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Main Image */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-[0_20px_60px_rgba(76,29,149,0.15)] border-8 border-white">
                  <img 
                    src={slide.image} 
                    alt={slide.imageAlt}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Image Overlay Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-white">
                      <h3 className="font-bold text-2xl mb-1">{slide.overlayTitle}</h3>
                      <p className="text-white/80 text-sm">{slide.overlayDesc}</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stat Badge */}
                <div className="absolute -left-16 top-16 bg-white shadow-xl shadow-slate-200/50 border border-slate-100 p-5 rounded-2xl flex-col gap-1 hidden md:flex animate-bounce-slow max-w-[200px]">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{slide.floatingTopLabel}</div>
                  <div className="text-xl font-bold text-brand leading-tight">{slide.floatingTopValue}</div>
                </div>

                {/* Floating Certification Badge */}
                <div className="absolute -right-8 bottom-24 bg-white/95 backdrop-blur shadow-2xl shadow-brand/10 border border-slate-100 p-4 rounded-2xl items-center gap-4 hidden sm:flex">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{slide.floatingBottomLabel}</div>
                    <div className="text-sm font-bold text-slate-900">{slide.floatingBottomValue}</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-200 rounded-full -z-20 border-dashed" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
