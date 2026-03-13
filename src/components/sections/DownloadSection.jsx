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

  // Get file type from URL
  const getFileType = (url) => {
    if (!url || url === "#") return null;
    const urlLower = url.toLowerCase();
    if (urlLower.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) return "image";
    if (urlLower.match(/\.pdf$/i)) return "pdf";
    if (urlLower.match(/\.(mp4|webm|ogg)$/i)) return "video";
    if (urlLower.match(/\.(doc|docx|xls|xlsx|ppt|pptx)$/i)) return "document";
    return "unknown";
  };

  // Render preview based on file type
  const renderPreview = (url) => {
    const fileType = getFileType(url);

    if (url === "#") {
      return (
        <p className="text-center">
          {language === "hi"
            ? "पूर्वावलोकन जल्द ही उपलब्ध होगा"
            : "Preview coming soon"}
        </p>
      );
    }

    switch (fileType) {
      case "image":
        return (
          <img
            src={url}
            alt="Preview"
            className="max-w-full rounded-lg max-h-[60vh] object-contain"
          />
        );
      case "pdf":
        return (
          <iframe
            src={url}
            title="PDF Preview"
            className="w-full h-[60vh] rounded-lg border-0"
          />
        );
      case "video":
        return (
          <video controls className="max-w-full rounded-lg max-h-[60vh]">
            <source src={url} />
            Your browser does not support the video tag.
          </video>
        );
      case "document":
        return (
          <div className="bg-muted p-8 rounded-lg text-center">
            <p className="text-muted-foreground mb-4">
              {language === "hi"
                ? "दस्तावेज़ को सीधे यहाँ प्रदर्शित नहीं किया जा सकता"
                : "This document cannot be previewed directly"}
            </p>
            <a
              href={url}
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              {language === "hi" ? "डाउनलोड करें" : "Download"}
            </a>
          </div>
        );
      default:
        return (
          <div className="bg-muted p-8 rounded-lg text-center">
            <p className="text-muted-foreground">
              {language === "hi"
                ? "यह फाइल प्रकार समर्थित नहीं है"
                : "File type not supported for preview"}
            </p>
          </div>
        );
    }
  };

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
                  className="absolute top-3 right-3 p-2 rounded-full bg-muted hover:bg-destructive hover:text-destructive-foreground transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-center min-h-[300px] text-muted-foreground">
                  {renderPreview(previewUrl)}
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
