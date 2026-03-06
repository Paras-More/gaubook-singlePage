import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown, Eye, X, Download } from "lucide-react";
import content from "../../config/content";
import useLanguageStore from "../../store/useLanguageStore";
import AnimatedSection from "../common/AnimatedSection";

const DownloadSection = () => {
  const { language } = useLanguageStore();
  const t = (obj) => obj[language] || obj.en;
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <AnimatedSection id="downloads" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-foreground">
          {t(content.downloads.heading)}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t(content.downloads.subtext)}
        </p>

        {/* Download Items with Preview & Download per variant */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {content.downloads.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-all duration-200"
            >
              <h4 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                <FileDown className="w-5 h-5 text-primary shrink-0" />
                {t(item)}
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.variants.map((variant, vi) => (
                  <div key={vi} className="flex gap-1.5">
                    <button
                      onClick={() => setPreviewUrl(variant.previewUrl)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      {t(content.downloads.preview)} ({t(variant)})
                    </button>
                    <a
                      href={variant.downloadUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      {t(variant)}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8 text-center"
        >
          <p className="text-foreground leading-relaxed">
            {t(content.downloads.specialRequest)}
          </p>
        </motion.div>

        {/* Preview Modal */}
        <AnimatePresence>
          {previewUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewUrl(null)}
              className="fixed inset-0 z-[100] bg-foreground/80 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-card rounded-2xl p-4 max-w-2xl w-full max-h-[80vh] overflow-auto shadow-2xl"
              >
                <button
                  onClick={() => setPreviewUrl(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-muted hover:bg-destructive hover:text-destructive-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-center min-h-[300px] text-muted-foreground">
                  {previewUrl === "#" ? (
                    <p className="text-center">
                      {language === "hi" ? "पूर्वावलोकन जल्द ही उपलब्ध होगा" : "Preview coming soon"}
                    </p>
                  ) : (
                    <img src={previewUrl} alt="Preview" className="max-w-full rounded-lg" />
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};

export default DownloadSection;
