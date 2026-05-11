import { motion } from "motion/react";
import { 
  Award, 
  LayoutDashboard, 
  Layers, 
  DollarSign, 
  GraduationCap, 
  HeartHandshake, 
  Globe,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Certified Odoo Partner",
    description: "Manomay is a certified Odoo implementation partner — meaning our team has passed Odoo's technical and functional assessments. You are not getting someone learning on your project.",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Implementation, not just installation",
    description: "Any reseller can install Odoo. Manomay implements it — meaning we understand your business first, design the configuration around your workflows, and deliver a system your team can actually use.",
    icon: <LayoutDashboard className="w-8 h-8" />
  },
  {
    title: "Industry-specific playbooks",
    description: "We have delivered Odoo across Retail, Manufacturing, IT Services, and CRM-driven businesses. We bring pre-built configurations, tested workflows, and lessons learned from real deployments — not a blank canvas.",
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: "Fixed-scope, transparent pricing",
    description: "No surprise invoices. Manomay scopes every implementation clearly upfront — with defined deliverables, timelines, and costs — so you know exactly what you are getting before you sign.",
    icon: <DollarSign className="w-8 h-8" />
  },
  {
    title: "Training as a core deliverable",
    description: "Every Manomay implementation includes structured, role-specific training for every user — not a 30-minute overview and a user manual. We measure success by adoption, not just go-live.",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    title: "Dedicated post-launch support",
    description: "Manomay offers ongoing support contracts after implementation — including system updates, new module additions, and a dedicated point of contact who knows your setup.",
    icon: <HeartHandshake className="w-8 h-8" />
  },
  {
    title: "Global Market Expertise",
    description: "We understand global business practices — Sales Tax/VAT compliance, international logistics, and multi-region operations — and implement Odoo to match how your business actually runs.",
    icon: <Globe className="w-8 h-8" />
  }
];

const targetSegments = [
  {
    title: "Startups",
    desc: "Agile implementations that scale as you grow. We help you build the right foundation from day one.",
    icon: <Rocket className="w-6 h-6 text-brand" />
  },
  {
    title: "New Companies",
    desc: "Setting up your first ERP? We handle the complexity so you can focus on launching your business.",
    icon: <Target className="w-6 h-6 text-brand" />
  },
  {
    title: "SMBs",
    desc: "Small and mid-sized businesses need efficiency. We automate your manual workflows to save time and money.",
    icon: <Users className="w-6 h-6 text-brand" />
  }
];

export default function WhyManomay() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-brand/5"></div>
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-brand/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-xl shadow-brand/20">
              <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
              The Manomay Difference
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] font-jakarta tracking-tight">
              Why Choose <span className="font-display italic font-normal text-brand text-2xl sm:text-4xl lg:text-5xl">Manomay</span> as Your Odoo Partner?
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-2xl">
              Odoo is a powerful platform, but success depends on the partner who implements it. We specialize in perfect implementation and post-implementation services for growing businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-4">Dedicated to Your Scale</h2>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight font-jakarta">The Ideal Partner For</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {targetSegments.map((segment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {segment.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{segment.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{segment.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid divide-y divide-slate-100">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 gap-12 py-16 items-center hover:bg-slate-50/50 transition-colors p-8 rounded-[2rem]"
              >
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 bg-brand text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand/20">
                    {feature.icon}
                  </div>
                </div>
                <div className="lg:col-span-11">
                  <h4 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-32 bg-slate-900 text-white rounded-[3rem] mx-4 sm:mx-8 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[120px] -z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-6">Our Commitment</h2>
              <h3 className="text-3xl lg:text-5xl font-black mb-8 leading-tight font-jakarta tracking-tight">
                Perfect Implementation. <br />
                <span className="text-brand italic font-display font-normal">Unmatched Service.</span>
              </h3>
              <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
                We don't just deliver a piece of software; we deliver a business transformation. From the first discovery meeting to years after you've gone live, Manomay is by your side.
              </p>
              <div className="space-y-6">
                {[
                  "Proactive System Monitoring",
                  "Monthly Health Checks",
                  "Continuous User Upskilling",
                  "Version Upgrade Roadmap"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-brand" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand/10 rounded-full blur-[80px] -z-10 group-hover:bg-brand/20 transition-all duration-700"></div>
              <ShieldCheck className="w-16 h-16 text-brand mb-8" />
              <h4 className="text-3xl font-bold mb-6">Post-Implementation Peace of Mind</h4>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Our support isn't a call center; it's a dedicated team of experts who understand your specific configuration and business logic.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 bg-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-brand/90 transition-all group/btn"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-8 font-jakarta">Ready for a partner who cares about your success?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all shadow-xl active:scale-95"
            >
              Get Started Now
            </Link>
            <Link 
              to="/odoo-implementations" 
              className="w-full sm:w-auto bg-white border-2 border-slate-900 text-slate-900 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all active:scale-95"
            >
              View Methodologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
