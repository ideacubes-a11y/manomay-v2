import { motion } from "motion/react";
import { 
  Users, ShoppingCart, Package, Factory, Calculator, 
  Globe, Layout, Smartphone, BarChart3, Settings,
  Clock, Briefcase, HeartHandshake, ShieldCheck
} from "lucide-react";

const moduleCategories = [
  {
    category: "Sales & CRM",
    icon: Users,
    modules: ["CRM", "Sales", "POS", "Subscriptions", "Rental"]
  },
  {
    category: "Operations",
    icon: Package,
    modules: ["Inventory", "Purchase", "Manufacturing", "Maintenance", "Quality", "PLM"]
  },
  {
    category: "Finance",
    icon: Calculator,
    modules: ["Accounting", "Invoicing", "Expenses", "Documents", "Spreadsheet"]
  },
  {
    category: "Marketing",
    icon: BarChart3,
    modules: ["Marketing Automation", "Email Marketing", "Social Marketing", "SMS Marketing", "Events"]
  },
  {
    category: "Human Resources",
    icon: HeartHandshake,
    modules: ["Employees", "Recruitment", "Appraisals", "Attendances", "Leaves", "Payroll"]
  },
  {
    category: "Website",
    icon: Globe,
    modules: ["Website Builder", "eCommerce", "Blogs", "Forum", "eLearning"]
  },
  {
    category: "Services",
    icon: Briefcase,
    modules: ["Project", "Timesheets", "Field Service", "Planning", "Appointments"]
  },
  {
    category: "Customization",
    icon: Settings,
    modules: ["Studio", "IoT", "VoIP", "External API", "Custom Modules"]
  }
];

export default function OdooModules() {
  return (
    <section id="modules" className="py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-brand" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Comprehensive Ecosystem</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-6 font-jakarta">
              The Full Power of <br />
              <span className="text-brand italic font-display font-normal text-4xl lg:text-6xl">Odoo & NetSuite.</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed">
              We implement the entire Odoo & NetSuite ecosystem, ensuring every module is perfectly synchronized with your business logic.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="text-right">
              <div className="text-6xl font-bold text-brand/20 mb-2">50+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Integrated Modules</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moduleCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-brand/10 hover:border-brand/30 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <cat.icon className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:text-brand/10 transition-colors duration-500 -rotate-12" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-8 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-lg shadow-brand/0 group-hover:shadow-brand/20">
                  <cat.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-brand transition-colors">{cat.category}</h3>
                
                <ul className="space-y-4">
                  {cat.modules.map((mod, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full shadow-[0_0_8px_rgba(76,29,149,0.8)]" />
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-white/10 text-center">
          <p className="text-slate-500 text-sm uppercase tracking-[0.2em] font-bold mb-8">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder for partner logos */}
            <span className="text-2xl font-bold">RETAIL</span>
            <span className="text-2xl font-bold">MANUFACTURING</span>
            <span className="text-2xl font-bold">LOGISTICS</span>
            <span className="text-2xl font-bold">FINANCE</span>
            <span className="text-2xl font-bold">HEALTHCARE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
