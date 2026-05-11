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
  Globe,
  Award,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Odoo() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: <Settings className="w-8 h-8 text-brand" />,
      title: "Odoo Implementation",
      description: "Full-cycle implementation tailored to your business model. From requirement analysis to go-live—we handle everything."
    },
    {
      icon: <Code className="w-8 h-8 text-brand" />,
      title: "Customization & Development",
      description: "Your business is unique—your ERP should be too. We build custom modules, workflows, and integrations."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-brand" />,
      title: "Migration & Upgrade",
      description: "Move from legacy systems or older Odoo versions seamlessly without data loss."
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-brand" />,
      title: "Third-Party Integrations",
      description: "Connect Odoo with payment gateways, CRMs, eCommerce platforms, and more."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-brand" />,
      title: "Business Process Consulting",
      description: "We don’t just implement—we optimize how your business runs."
    },
    {
      icon: <LifeBuoy className="w-8 h-8 text-brand" />,
      title: "Support & Maintenance",
      description: "Ongoing support to ensure your system runs smoothly and evolves with you."
    }
  ];

  const industries = [
    "Manufacturing",
    "Retail & eCommerce",
    "Healthcare",
    "Logistics & Supply Chain",
    "Real Estate",
    "Professional Services"
  ];

  const processSteps = [
    { title: "Discovery & Requirement Analysis", num: "01", desc: "Understanding your current workflows and pain points." },
    { title: "Solution Design & Planning", num: "02", desc: "Architecting the perfect Odoo instances for your needs." },
    { title: "Development & Customization", num: "03", desc: "Building custom modules and workflows." },
    { title: "Testing & Quality Assurance", num: "04", desc: "Rigorous testing to ensure flawless execution." },
    { title: "Deployment & Go-Live", num: "05", desc: "Smooth transition and launch." },
    { title: "Training & Support", num: "06", desc: "Empowering your team." }
  ];

  const results = [
    { icon: <TrendingUp className="w-6 h-6 text-brand" />, text: "Increased Operational Efficiency" },
    { icon: <Clock className="w-6 h-6 text-brand" />, text: "Reduced Manual Work" },
    { icon: <DollarSign className="w-6 h-6 text-brand" />, text: "Better Financial Visibility" },
    { icon: <Search className="w-6 h-6 text-brand" />, text: "Real-Time Business Insights" },
    { icon: <Zap className="w-6 h-6 text-brand" />, text: "Faster Decision Making" }
  ];

  const whyManomay = [
    {
      title: "Certified Odoo Partner",
      desc: "Manomay is a certified Odoo implementation partner — meaning our team has passed Odoo's technical and functional assessments. You are not getting someone learning on your project.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Implementation, not Installation",
      desc: "Any reseller can install Odoo. Manomay implements it — meaning we understand your business first, design the configuration around your workflows, and deliver a system your team can actually use.",
      icon: <LayoutDashboard className="w-6 h-6" />
    },
    {
      title: "Industry-Specific Playbooks",
      desc: "We have delivered Odoo across Retail, Manufacturing, IT Services, and CRM-driven businesses. We bring pre-built configurations, tested workflows, and lessons learned from real deployments — not a blank canvas.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Fixed-Scope, Transparent Pricing",
      desc: "No surprise invoices. Manomay scopes every implementation clearly upfront — with defined deliverables, timelines, and costs — so you know exactly what you are getting before you sign.",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Training as a Core Deliverable",
      desc: "Every Manomay implementation includes structured, role-specific training for every user — not a 30-minute overview and a user manual. We measure success by adoption, not just go-live.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Dedicated Post-Launch Support",
      desc: "Manomay offers ongoing support contracts after implementation — including system updates, new module additions, and a dedicated point of contact who knows your setup.",
      icon: <HeartHandshake className="w-6 h-6" />
    },
    {
      title: "Global Market Expertise",
      desc: "We understand global business practices — Sales Tax/VAT compliance, international logistics, and multi-region operations — and implement Odoo to match how your business actually runs.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      q: "How long does Odoo implementation take?",
      a: "Typically 4–12 weeks depending on complexity. We follow an agile process to deliver value as quickly as possible without compromising quality."
    },
    {
      q: "Is Odoo suitable for small businesses?",
      a: "Absolutely. It scales from startups to large enterprises. Because of its modular nature, you only pay for and implement what you need right now."
    },
    {
      q: "Do you provide post-implementation support?",
      a: "Yes, ongoing support is a key part of our service. We offer various support tiers to ensure your system runs smoothly and evolves with you."
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand/20">
      {/* Hero Section */}
      <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center mix-blend-multiply"></div>
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
                 <Layers className="w-3.5 h-3.5 text-brand" /> Official Odoo Partner
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-slate-900 mb-6 tracking-tight leading-tight lg:leading-[1] font-jakarta">
                Transform Business <br className="hidden md:block"/>
                <span className="font-display italic font-normal text-brand text-3xl sm:text-5xl lg:text-6xl xl:text-[4rem] px-1">With Expert Odoo</span>
                <br className="hidden md:block"/> Implementation.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                From chaos to clarity—streamline operations, automate workflows, and scale faster with certified Odoo experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <Link to="/contact" className="bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 flex items-center justify-center gap-2 group">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="bg-white text-slate-900 border border-slate-200 py-4 px-8 rounded-full text-lg font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  See How It Works
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-slate-200 pt-8 items-center justify-center lg:justify-start">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <span className="font-semibold text-slate-700">Certified Experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <span className="font-semibold text-slate-700">100+ Successful Go-Lives</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-8 border-white bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                    alt="Business analytics dashboard" 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Floating elements to add life */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -left-8 top-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 z-10"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Efficiency</div>
                    <div className="text-lg font-bold text-slate-900">+60% Growth</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -right-8 bottom-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 z-10"
                >
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
                    <Layers className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase">System</div>
                    <div className="text-lg font-bold text-slate-900">Fully Unified</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4 flex items-center gap-2">
                <div className="w-8 h-px bg-brand"></div> What We Do
              </h2>
              <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight font-jakarta">Stop <span className="font-display italic font-normal text-brand">Managing Tools.</span> <br/>Start Managing Growth.</h3>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                We help businesses implement, customize, and scale with Odoo, the all-in-one business management platform.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl font-light">
                Whether you're struggling with disconnected systems, manual processes, or lack of visibility—we bring everything into one powerful ecosystem.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 shadow-sm"
          >
            <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center shrink-0">
               <Store className="w-8 h-8 text-brand" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Optimize Your Retail with Odoo POS</h4>
              <p className="text-slate-600 font-medium">Looking for a powerful, web-based Point of Sale that works offline? Discover how we implement Odoo POS for global retailers.</p>
            </div>
            <Link to="/solutions/odoo-pos" className="bg-brand text-white px-8 py-4 rounded-full font-bold hover:bg-brand/90 transition-all flex items-center gap-2 whitespace-nowrap text-lg shadow-lg shadow-brand/20">
              Explore Odoo POS Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Pricing Transparency</h2>
            <h3 className="text-4xl lg:text-5xl font-black mb-8 font-jakarta">
              How much does Odoo <span className="font-display italic font-normal text-brand">Cost?</span>
            </h3>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Odoo's "One Price for All Apps" model is the most competitive in the industry. Calculate your exact costs using the official pricing tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://www.odoo.com/pricing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand/90 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-brand/20"
              >
                Go to Official Price Calculator
                <ArrowRight className="w-6 h-6" />
              </a>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full text-xl font-bold hover:bg-white/20 transition-all">
                Book a Free Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Our Services</h2>
          <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-jakarta">
            Comprehensive <span className="font-display italic font-normal text-brand">Odoo Solutions.</span>
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(76,29,149,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand/10 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Manomay Detailed */}
      <section id="why-manomay" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Why Manomay?</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 font-jakarta">
                Better Platform. <span className="font-display italic font-normal text-brand">Better Partner.</span>
              </h3>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                Odoo is a powerful platform. But the platform is only as good as the partner who implements it. Here is what makes Manomay different.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyManomay.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
                <div className="w-14 h-14 bg-brand text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-brand transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Why Choose Us Split */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative rounded-[3rem] mx-4 sm:mx-8 shadow-2xl">
        <div className="absolute inset-0 bg-brand/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Industries We Serve</h2>
              <h3 className="text-3xl lg:text-4xl font-black mb-8 tracking-tight text-white font-jakarta">
                High-Impact <span className="font-display italic font-normal text-brand">Sectors.</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {industries.map((ind, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-medium text-slate-200">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Why Choose Us?</h2>
              <h3 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight leading-tight text-white font-jakarta">
                Strategic <span className="font-display italic font-normal text-brand">Implementations.</span>
              </h3>
              <ul className="space-y-5">
                {[
                  "Deep Business Understanding (not just coding)",
                  "Agile Implementation Approach",
                  "Dedicated Project Manager",
                  "Transparent Pricing & Timelines",
                  "Post-Implementation Training & Support"
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-white/5 p-3 rounded-lg">
                    <div className="bg-brand/20 p-2 rounded-full shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-300" />
                    </div>
                    <span className="text-slate-200 font-medium">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Our Process</h2>
          <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-jakarta">
            Proven <span className="font-display italic font-normal text-brand">Methodology.</span>
          </h3>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand/5 hover:border-brand/20 transition-all duration-300 group"
            >
              <div className="text-6xl font-black text-slate-100 group-hover:text-brand/10 transition-colors mb-4">{step.num}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-500 font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results & Testimonials */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4 flex items-center gap-2">
                 <div className="w-8 h-px bg-brand"></div> Results You Can Expect
              </h2>
              <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight mb-8 font-jakarta">
                Business <span className="font-display italic font-normal text-brand">Impact.</span>
              </h3>
              <div className="space-y-4">
                {results.map((result, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    key={idx} 
                    className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                      {result.icon}
                    </div>
                    <span className="text-lg font-bold text-slate-700">{result.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4 flex items-center gap-2">
                 <div className="w-8 h-px bg-brand"></div> Client Success Snapshot
              </h2>
              <div className="space-y-6">
                <motion.blockquote 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative group"
                >
                  <div className="text-6xl text-slate-200 font-serif absolute -top-4 -left-2 group-hover:text-brand/20 transition-colors">"</div>
                  <p className="text-xl text-slate-700 font-medium relative z-10 italic mb-6 leading-relaxed">
                    We reduced our manual workload by 60% within 3 months of Odoo implementation.
                  </p>
                  <footer className="font-bold text-slate-900 flex items-center gap-3">
                    <div className="w-8 h-1 bg-brand rounded-full"></div>
                    Manufacturing Client
                  </footer>
                </motion.blockquote>
                
                <motion.blockquote 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-brand text-white p-8 rounded-[2rem] shadow-xl relative shadow-brand/20"
                >
                  <div className="text-6xl text-white/20 font-serif absolute -top-4 -left-2">"</div>
                  <p className="text-xl font-medium relative z-10 italic mb-6 leading-relaxed">
                    Complete visibility across sales, inventory, and accounts—game changer.
                  </p>
                  <footer className="font-bold text-brand-100 flex items-center gap-3">
                    <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                    Retail Business Owner
                  </footer>
                </motion.blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Support & Guidance</h2>
            <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight font-jakarta">Support <span className="font-display italic font-normal text-brand">Excellence.</span></h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden hover:border-slate-300 transition-colors"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between font-bold text-lg text-slate-900"
                >
                  {faq.q}
                  <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 bg-brand/10 text-brand' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100 px-8 pb-6' : 'max-h-0 opacity-0 px-8'}`}
                >
                  <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-brand/10 opacity-50 blur-3xl rounded-[100%] scale-150 translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight font-jakarta">
              Simplify and <span className="font-display italic font-normal text-brand">Scale</span> Tomorrow.
            </h2>
            <p className="text-xl text-slate-300 mb-12 font-light leading-relaxed">
              Let's build a system that works for you, not against you. Your business deserves more than spreadsheets. Let's build a smarter system with Odoo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand/20">
                Book Your Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center">
                Get a Custom Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

