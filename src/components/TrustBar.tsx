import { motion } from "motion/react";

export default function TrustBar() {
  const stats = [
    { label: "Official Odoo & NetSuite", value: "Implementation Partner" },
    { label: "Across Globe", value: "Happy Customers" },
    { label: "Worry Free Implementations", value: "100% Dedicated Implementations" },
    { label: "Uptime month-end closing", value: "Zero-Downtime" },
  ];

  return (
    <div className="border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
