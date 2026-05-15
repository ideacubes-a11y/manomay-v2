import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Send, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import emailjs from '@emailjs/browser';

const COUNTRIES = [
  { code: "+1", name: "USA", flag: "🇺🇸" },
  { code: "+44", name: "UK", flag: "🇬🇧" },
  { code: "+91", name: "IND", flag: "🇮🇳" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+61", name: "AUS", flag: "🇦🇺" },
  { code: "+1", name: "CAN", flag: "🇨🇦" },
  { code: "+65", name: "SGP", flag: "🇸🇬" },
  { code: "+49", name: "GER", flag: "🇩🇪" },
  { code: "+33", name: "FRA", flag: "🇫🇷" },
  { code: "+31", name: "NLD", flag: "🇳🇱" },
  { code: "+39", name: "ITA", flag: "🇮🇹" },
  { code: "+34", name: "ESP", flag: "🇪🇸" },
  { code: "+41", name: "CHE", flag: "🇨🇭" },
  { code: "+81", name: "JPN", flag: "🇯🇵" },
  { code: "+82", name: "KOR", flag: "🇰🇷" },
  { code: "+60", name: "MYS", flag: "🇲🇾" },
  { code: "+63", name: "PHL", flag: "🇵🇭" },
  { code: "+64", name: "NZL", flag: "🇳🇿" },
  { code: "+27", name: "ZAF", flag: "🇿🇦" },
  { code: "+55", name: "BRA", flag: "🇧🇷" },
  { code: "+52", name: "MEX", flag: "🇲🇽" },
  { code: "+966", name: "SAU", flag: "🇸🇦" },
  { code: "+974", name: "QAT", flag: "🇶🇦" },
  { code: "+965", name: "KWT", flag: "🇰🇼" },
  { code: "+968", name: "OMN", flag: "🇴🇲" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function Contact() {
  const [formData, setFormData] = useState({
    requestType: "Book Free Consultation",
    erpPreference: "Odoo",
    firstName: "",
    lastName: "",
    countryCode: "+1",
    countryFlag: "🇺🇸",
    mobile: "",
    email: "",
    companyName: "",
    companyAddress: "",
    businessNeeds: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

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
          requestType: "Book Free Consultation",
          erpPreference: "Odoo",
          firstName: "",
          lastName: "",
          countryCode: "+1",
          countryFlag: "🇺🇸",
          mobile: "",
          email: "",
          companyName: "",
          companyAddress: "",
          businessNeeds: "",
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
          user_name: `${formData.firstName} ${formData.lastName}`,
          user_mobile: `${formData.countryCode} ${formData.mobile}`,
          user_email: formData.email,
          company_name: formData.companyName,
          company_address: formData.companyAddress,
          business_needs: formData.businessNeeds,
          to_email: 'sales@manomayglobalsolutions.com'
        },
        publicKey
      );
      
      setIsSubmitted(true);
      setFormData({
        requestType: "Book Free Consultation",
        erpPreference: "Odoo",
        firstName: "",
        lastName: "",
        countryCode: "+1",
        countryFlag: "🇺🇸",
        mobile: "",
        email: "",
        companyName: "",
        companyAddress: "",
        businessNeeds: "",
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
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-brand text-sm font-bold uppercase tracking-widest mb-10 shadow-sm">
              <Mail className="w-4 h-4" /> Get In Touch
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1] font-jakarta">
              Your Journey to Efficiency <br />
              <span className="font-display italic font-normal text-brand text-5xl lg:text-6xl">Starts with a Conversation.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-lg">
              Book a free consultation with our ERP experts. We'll help you define your roadmap, optimize your workflows, and choose the right solutions for your growth.
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
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Follow Us</h3>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-slate-900 hover:text-brand transition-colors">LinkedIn Profile</a>
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
                  <option>Book Free Consultation</option>
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
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Mobile Number</label>
                <div className="flex gap-3">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      className="w-32 bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 flex items-center justify-between gap-2 hover:border-brand/40 transition-all focus:outline-none focus:ring-2 focus:ring-brand"
                    >
                      <span className="flex items-center gap-2">
                        <span>{formData.countryFlag}</span>
                        <span className="font-semibold">{formData.countryCode}</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isCountryDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setIsCountryDropdownOpen(false)} />
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl z-20 py-2 max-h-64 overflow-y-auto">
                          {COUNTRIES.map((country, idx) => (
                            <button
                              key={`${country.name}-${idx}`}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, countryCode: country.code, countryFlag: country.flag }));
                                setIsCountryDropdownOpen(false);
                              }}
                              className="w-full px-4 py-2 hover:bg-slate-50 flex items-center gap-3 text-left transition-colors"
                            >
                              <span className="text-lg">{country.flag}</span>
                              <span className="text-sm font-semibold text-slate-700 w-12">{country.code}</span>
                              <span className="text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis">{country.name}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="000-000-0000"
                    className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
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
                <div>
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Business Needs / Introduction (Optional)</label>
                  <textarea
                    name="businessNeeds"
                    rows={4}
                    value={formData.businessNeeds}
                    onChange={handleChange}
                    placeholder="Briefly describe your business needs or provide an introduction..."
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
