import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import content from "../../config/content";
import useLanguageStore from "../../store/useLanguageStore";
import AnimatedSection from "../common/AnimatedSection";

const AccordionItem = ({ title, children, isOpen, onToggle }) => (
  <div className="border border-border rounded-xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-5 py-4 bg-card hover:bg-muted/50 transition-colors text-left"
    >
      <span className="font-medium text-foreground text-sm">{title}</span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="px-5 py-4 text-sm text-muted-foreground leading-relaxed bg-background">
        {children}
      </div>
    </motion.div>
  </div>
);

const LegalAccordion = ({ heading, lastUpdated, items, language }) => {
  const t = (obj) => obj[language] || obj.en;
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mb-10">
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{t(heading)}</h3>
      <p className="text-xs text-muted-foreground mb-4">{t(lastUpdated)}</p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            title={t(item.title)}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {t(item.content)}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

const LegalSection = () => {
  const { language } = useLanguageStore();
  const legal = content.legal;

  return (
    <AnimatedSection id="legal" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <LegalAccordion
          heading={legal.termsHeading}
          lastUpdated={legal.lastUpdated}
          items={legal.terms}
          language={language}
        />
        <LegalAccordion
          heading={legal.privacyHeading}
          lastUpdated={legal.lastUpdated}
          items={legal.privacy}
          language={language}
        />
        <LegalAccordion
          heading={legal.disclaimerHeading}
          lastUpdated={legal.lastUpdated}
          items={legal.disclaimer}
          language={language}
        />
      </div>
    </AnimatedSection>
  );
};

export default LegalSection;
