import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageCircle,
  Youtube,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Apple,
  Music,
} from "lucide-react";
import content from "../../config/content";
import useLanguageStore from "../../store/useLanguageStore";
import AnimatedSection from "../common/AnimatedSection";

// Map icon names to Lucide components
const iconMap = {
  whatsapp: MessageCircle,
  youtube: Youtube,
  mail: Mail,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  apple: Apple,
  spotify: Music,
};

const ContactSection = () => {
  const { language } = useLanguageStore();
  const t = (obj) => obj[language] || obj.en;
  const [submitted, setSubmitted] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = content.contact.socialLinks;
  const totalLinks = socialLinks.length;

  return (
    <AnimatedSection
      id="contact"
      className="py-20 md:py-28 bg-[hsl(var(--section-alt-bg))]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-foreground">
          {t(content.contact.heading)}
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          {t(content.contact.subtext)}
        </p>

        {/* Circular Social Links UI */}
        <div className="flex items-center justify-center mb-20">
          <div
            className="relative  flex items-center justify-center"
            style={{ width: 300, height: 320 }}
          >
            {/* Center "Connect With Us" button */}
            <motion.button
              onClick={() => setShowSocial(!showSocial)}
              className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-28 h-28 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-xl hover:shadow-[0_8px_32px_0_rgba(255,115,0,0.4)] transition-shadow z-10 flex items-center justify-center text-center leading-tight"
            >
              {t(content.contact.connectHeading)}
            </motion.button>

            {/* Social icons in circular layout */}
            <AnimatePresence>
              {showSocial &&
                socialLinks.map((link, i) => {
                  // Calculate angle for each icon
                  const angle = (i / totalLinks) * 2 * Math.PI - Math.PI / 2; // Start from top (12 o'clock)
                  // For a 320x320 container and 56px icons:
                  // radius = (container/2) - (icon/2) = 160 - 28 = 132
                  const radius = 132;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const IconComponent = iconMap[link.icon] || Mail;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      animate={{ opacity: 1, scale: 1, x, y }}
                      exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: i * 0.05,
                      }}
                      whileHover={{ scale: 1.2 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2 border-background bg-card hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      style={{
                        boxShadow: `0 4px 20px hsl(${link.color} / 0.3)`,
                      }}
                      title={link.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
            </AnimatePresence>
          </div>
        </div>

        {/* Suggestion Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-card rounded-2xl p-8 border border-border shadow-sm space-y-5"
        >
          <h3 className="text-xl font-bold text-center text-foreground mb-2">
            {t(content.contact.subtext)}
          </h3>
          <input
            type="text"
            placeholder={t(content.contact.fields.name)}
            required
            className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <input
            type="email"
            placeholder={t(content.contact.fields.email)}
            className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <input
            type="tel"
            placeholder={t(content.contact.fields.mobile)}
            required
            className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
          <textarea
            placeholder={t(content.contact.fields.message)}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
          />

          <button
            type="submit"
            disabled={submitted}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-all duration-200 disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            {submitted ? "✓" : t(content.contact.submit)}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            {t(content.contact.privacy)}
          </p>
        </motion.form>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
