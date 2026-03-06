import { motion } from "framer-motion";
import { Eye, Target, Award, Heart } from "lucide-react";
import content from "../../config/content";
import useLanguageStore from "../../store/useLanguageStore";
import AnimatedSection from "../common/AnimatedSection";

const AboutSection = () => {
  const { language } = useLanguageStore();
  const t = (obj) => obj[language] || obj.en;
  const about = content.about;

  const pillars = [
    { data: about.vision, icon: Eye, color: "bg-primary/10 text-primary" },
    { data: about.mission, icon: Target, color: "bg-accent/10 text-accent" },
  ];

  return (
    <AnimatedSection id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          {t(about.heading)}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />

        {/* Initiative Head */}
        <p className="text-center text-lg md:text-xl text-primary font-semibold mb-4 max-w-2xl mx-auto">
          {t(about.initiative)}
        </p>

        {/* Blessings & Support */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {[about.blessings, about.support].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h4 className="font-bold text-lg text-primary mb-2">{t(item.label)}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(item.text)}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {pillars.map(({ data, icon: Icon, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border text-center"
            >
              <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">{t(data.label)}</h4>
              <p className="text-muted-foreground leading-relaxed">{t(data.text)}</p>
            </motion.div>
          ))}
        </div>

        {/* Goals */}
        <div className="max-w-4xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            {t(about.goals.label)}
          </h3>
          <ul className="space-y-3">
            {about.goals.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                {t(item)}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Purpose */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            {t(about.purpose.label)}
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {about.purpose.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border"
              >
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-sm text-muted-foreground">{t(item)}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
