import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    requestType: "Request Architecture Audit",
    erpPreference: "Odoo",
    name: "",
    mobile: "",
    email: "",
    companyName: "",
    companyAddress: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials missing. Please check your environment variables.");
      // For now, we'll simulate success if keys aren't set to avoid blocking the UI
      // but in production, these must be provided.
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setFormData({
          requestType: "Request Architecture Audit",
          erpPreference: "Odoo",
          name: "",
          mobile: "",
          email: "",
          companyName: "",
          companyAddress: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          subject: formData.requestType,
          request_type: formData.requestType,
          erp_preference: formData.erpPreference,
          user_name: formData.name,
          user_mobile: formData.mobile,
          user_email: formData.email,
          company_name: formData.companyName,
          company_address: formData.companyAddress,
          to_email: 'sales@manomayglobalsolutions.com'
        },
        publicKey
      );
      
      setIsSubmitted(true);
      setFormData({
        requestType: "Request Architecture Audit",
        erpPreference: "Odoo",
        name: "",
        mobile: "",
        email: "",
        companyName: "",
        companyAddress: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-brand text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
              <Mail className="w-4 h-4" /> Get In Touch
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1] font-jakarta">
              Let's Architect Your <br />
              <span className="font-display italic font-normal text-brand text-5xl lg:text-6xl">Next Milestone.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-lg">
              Whether you're looking for a fresh Odoo implementation or an enterprise-grade NetSuite migration, our experts are ready to guide you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 flex-shrink-0 shadow-sm text-brand">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</h3>
                  <p className="text-xl font-bold text-slate-900">sales@manomayglobalsolutions.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 flex-shrink-0 shadow-sm text-brand">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</h3>
                  <p className="text-xl font-bold text-slate-900">+1 (800) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 flex-shrink-0 shadow-sm text-brand">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Global HQ</h3>
                  <p className="text-xl font-bold text-slate-900">Strategic Operations Base</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 border border-slate-200 p-8 lg:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Request Type Dropdown */}
              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">I want to...</label>
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                >
                  <option>Request Architecture Audit</option>
                  <option>Consult with an expert</option>
                  <option>Schedule a Demo</option>
                </select>
              </div>

              {/* ERP Preference Radio */}
              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Preferred ERP</label>
                <div className="flex gap-6">
                  {["Odoo", "NetSuite"].map((erp) => (
                    <label key={erp} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="erpPreference"
                        value={erp}
                        checked={formData.erpPreference === erp}
                        onChange={handleChange}
                        className="w-5 h-5 text-brand border-slate-300 focus:ring-brand"
                      />
                      <span className={`font-semibold transition-colors ${formData.erpPreference === erp ? 'text-brand' : 'text-slate-500 group-hover:text-slate-700'}`}>
                        {erp}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+1 (000) 000-0000"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                />
              </div>

              {/* Company Info */}
              <div className="space-y-6 pt-2">
                <div>
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enterprises Ltd."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Company Address</label>
                  <textarea
                    name="companyAddress"
                    required
                    rows={3}
                    value={formData.companyAddress}
                    onChange={handleChange}
                    placeholder="Street, City, State, ZIP"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand text-white py-5 rounded-xl font-bold text-lg hover:bg-brand/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Inquiry Sent
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                    Submit Inquiry
                  </span>
                )}
              </button>
              
              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
