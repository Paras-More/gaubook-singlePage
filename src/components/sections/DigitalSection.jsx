import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import content from "../../config/content";
import useLanguageStore from "../../store/useLanguageStore";
import AnimatedSection from "../common/AnimatedSection";

const DigitalSection = () => {
  const { language } = useLanguageStore();
  const t = (obj) => obj[language] || obj.en;
  const d = content.digital;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <AnimatedSection
      id="digital"
      className="py-20 md:py-28 bg-[hsl(var(--section-alt-bg))]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-foreground">
          {t(d.heading)}
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          {t(d.subtext)}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
          {d.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card border border-border rounded-xl p-5 text-center cursor-default transition-all duration-200"
            >
              <span className="text-3xl mb-2 block">{service.icon}</span>
              <span className="text-sm font-medium text-foreground">{t(service)}</span>
            </motion.div>
          ))}
        </div>

        {/* Registration Form */}
        <div className="max-w-lg mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-8">
            {t(d.formHeading)}
          </h3>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-4"
          >
            <input
              type="text"
              placeholder={t(d.fields.name)}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            <input
              type="email"
              placeholder={t(d.fields.email)}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder={t(d.fields.mobile)}
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <input
                type="tel"
                placeholder={t(d.fields.whatsapp)}
                className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
            </div>

            <select
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            >
              <option value="">{t(d.fields.category)}</option>
              {d.categories.map((cat, i) => (
                <option key={i} value={cat.en}>
                  {t(cat)}
                </option>
              ))}
            </select>

            <textarea
              placeholder={t(d.fields.helpText)}
              required
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
            />

            <button
              type="submit"
              disabled={submitted}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-all duration-200 disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {submitted ? "✓" : t(d.submit)}
            </button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DigitalSection;
