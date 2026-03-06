import { motion } from "framer-motion";
import content from "../../config/content";
import useLanguageStore from "../../store/useLanguageStore";
import AnimatedSection from "../common/AnimatedSection";
import appMockup from "../../assets/app-mockup.png";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const MemberCard = ({ member, language, index, side }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay: index * 0.12 }}
    whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
    className={`bg-card rounded-2xl p-5 text-center border border-border shadow-sm transition-all duration-300 cursor-default ${
      side === "left" ? "lg:text-right" : "lg:text-left"
    }`}
  >
    <span className="text-4xl mb-3 block">{member.icon}</span>
    <h3 className="text-lg font-bold text-foreground mb-1">
      {member[language]?.title || member.en.title}
    </h3>
    <p className="text-muted-foreground text-xs leading-relaxed">
      {member[language]?.desc || member.en.desc}
    </p>
  </motion.div>
);

const CommunitySection = () => {
  const { language } = useLanguageStore();
  const t = (obj) => obj[language] || obj.en;

  return (
    <AnimatedSection
      id="community"
      className="py-20 md:py-28 bg-[hsl(var(--section-alt-bg))]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
          {t(content.community.heading)}
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-14" />

        {/* 3-column layout: Left members | Mobile mockup | Right members */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Left: Gaushala, Influencer, NGO */}
          <div className="flex flex-col gap-5">
            {content.community.leftMembers.map((member, i) => (
              <MemberCard key={i} member={member} language={language} index={i} side="left" />
            ))}
          </div>

          {/* Center: Mobile App Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl scale-110" />
              <img
                src={appMockup}
                alt="Gaubook Mobile App"
                className="relative w-64 md:w-72 lg:w-80 drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Volunteer, Donor, Vendor */}
          <div className="flex flex-col gap-5">
            {content.community.rightMembers.map((member, i) => (
              <MemberCard key={i} member={member} language={language} index={i} side="right" />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href={content.hero.appLinks.android}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {t(content.community.cta)}
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default CommunitySection;
