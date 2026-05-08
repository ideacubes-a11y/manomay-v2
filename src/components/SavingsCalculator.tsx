import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function SavingsCalculator() {
  const [revenue, setRevenue] = useState(50); // In Millions
  const [efficiency, setEfficiency] = useState(15); // Percentage

  const annualSavings = (revenue * 1000000 * (efficiency / 100) * 0.12).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  return (
    <section id="calculator" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 font-jakarta tracking-tight">
            Efficiency <span className="font-display italic font-normal text-brand text-5xl lg:text-6xl ml-2">Audit.</span>
          </h2>
          <p className="text-slate-600">
            Estimate the potential impact of a unified Odoo & NetSuite architecture on your operations.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Annual Revenue (USD): ${revenue}M
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={revenue}
                  onChange={(e) => setRevenue(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                  Target Productivity Increase: {efficiency}%
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={efficiency}
                  onChange={(e) => setEfficiency(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand"
                />
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand" />
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Estimated Annual Savings</div>
              <motion.div
                key={annualSavings}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl font-bold text-white mb-2"
              >
                ${annualSavings}
              </motion.div>
              <div className="text-brand font-semibold text-sm mb-8">Potential ROI in Year 1</div>
              
              <Link to="/contact" className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Calculator className="w-5 h-5" />
                Get Detailed Audit
              </Link>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4 text-slate-400 text-sm italic">
            <RefreshCw className="w-4 h-4" />
            *Calculations based on industry benchmarks for mid-to-large scale ERP transitions.
          </div>
        </div>
      </div>
    </section>
  );
}
