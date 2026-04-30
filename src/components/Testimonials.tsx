import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Manomay Global Solutions completely transformed our operations. Their expertise in Odoo implementation helped us reduce manual work by 60% within the first three months. The team was responsive, knowledgeable, and delivered on time.",
      author: "Sarah Jenkins",
      role: "Operations Director",
      company: "TechFlow Industries",
      rating: 5,
    },
    {
      id: 2,
      quote: "The NetSuite deployment was seamless. With Manomay's strategic approach, we gained complete visibility across our multi-entity financials. They truly understand enterprise business needs.",
      author: "David Chen",
      role: "Chief Financial Officer",
      company: "Nordic Retail Group",
      rating: 5,
    },
    {
      id: 3,
      quote: "We were struggling with disconnected systems before partnering with Manomay. They built a unified ecosystem that scales with our rapid growth. Highly recommend their consulting and implementation services.",
      author: "Emily Vasquez",
      role: "CEO",
      company: "Nova Health Solutions",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand uppercase mb-4">Client Success</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Trusted by Ambitious Enterprises
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-100 group-hover:text-brand/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed font-medium mb-8 relative z-10 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
