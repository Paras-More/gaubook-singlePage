import { motion, useScroll, useTransform } from "framer-motion";
import content from "../../config/content";
import useLanguageStore from "../../store/useLanguageStore";
import AnimatedSection from "../common/AnimatedSection";
import heroCow from "../../assets/hero-cow.jpg";
import shlokBanner from "../../assets/shlok-banner.png";

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.609-.916V2.73a.996.996 0 01.609-.916zm10.89 10.893l2.302 2.302-10.937 6.333L13.5 12.707zM5.864 2.658L16.8 8.991l-2.302 2.302L6.864 2.658zm11.072 5.974L20.3 10.5c.63.371.63 1.629 0 2l-3.364 1.868L14.5 12l2.436-3.368z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const HeroSection = () => {
  const { language } = useLanguageStore();
  const t = (obj) => obj[language] || obj.en;
  const { scrollYProgress } = useScroll();
  const cowY = useTransform(scrollYProgress, [0, 0.3], [0, 120]);
  const cowRotate = useTransform(scrollYProgress, [0, 0.3], [0, -5]);

  return (
    <AnimatedSection id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroCow}
          alt="Gau Mata in Gaushala"
          className="w-full h-full object-cover"
          loading="eager"
          style={{ y: cowY, rotate: cowRotate }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Shlok Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={shlokBanner}
              alt="गावो विश्वस्य मातरः। गावो परमो धर्मः॥"
              className="mx-auto w-full max-w-md rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            {t(content.hero.heading)}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-10"
          >
            {t(content.hero.subtext)}
          </motion.p>

          {/* App Store Buttons - Black like snabbit */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={content.hero.appLinks.android}
              className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 rounded-xl text-base font-semibold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <PlayStoreIcon />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-80">Get it on</div>
                <div className="text-sm font-bold leading-tight">Google Play</div>
              </div>
            </a>
            <a
              href={content.hero.appLinks.ios}
              className="inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 rounded-xl text-base font-semibold hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <AppleIcon />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
                <div className="text-sm font-bold leading-tight">App Store</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HeroSection;
