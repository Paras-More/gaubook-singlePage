import content from "../../config/content";
import useLanguageStore from "../../store/useLanguageStore";

const Footer = () => {
  const { language } = useLanguageStore();
  const t = (obj) => obj[language] || obj.en;

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t(content.brand)}</h3>
            <p className="text-background/70 text-sm">
              {t(content.about.vision.text)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {t(content.footer.quickLinks.label)}
            </h4>
            <ul className="space-y-2">
              {content.footer.quickLinks.items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {t(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">
              {t(content.footer.socialLinks.label)}
            </h4>
            <p className="text-sm text-background/70">
              {content.footer.email}
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-6 text-center">
          <p className="text-sm text-background/60">
            {t(content.footer.copyright)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
