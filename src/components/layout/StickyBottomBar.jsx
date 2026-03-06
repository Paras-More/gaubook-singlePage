import { motion } from "framer-motion";
import content from "../../config/content";

const PlayStoreIconSmall = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.609-.916V2.73a.996.996 0 01.609-.916zm10.89 10.893l2.302 2.302-10.937 6.333L13.5 12.707zM5.864 2.658L16.8 8.991l-2.302 2.302L6.864 2.658zm11.072 5.974L20.3 10.5c.63.371.63 1.629 0 2l-3.364 1.868L14.5 12l2.436-3.368z" />
  </svg>
);

const AppleIconSmall = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const StickyBottomBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.25)] py-2.5 px-4"
    >
      <div className="container mx-auto flex items-center justify-center gap-4">
        <a
          href={content.hero.appLinks.android}
          className="inline-flex items-center gap-2 bg-background text-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          <PlayStoreIconSmall />
          <span className="hidden sm:inline">Google Play</span>
          <span className="sm:hidden">Android</span>
        </a>
        <a
          href={content.hero.appLinks.ios}
          className="inline-flex items-center gap-2 bg-background text-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          <AppleIconSmall />
          <span className="hidden sm:inline">App Store</span>
          <span className="sm:hidden">iOS</span>
        </a>
      </div>
    </motion.div>
  );
};

export default StickyBottomBar;
