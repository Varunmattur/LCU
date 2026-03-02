import { Film, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-muted/20">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {[Twitter, Instagram, Youtube, Film].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-colors duration-300"
              aria-label="Social link"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="font-display text-lg tracking-widest mb-2" style={{ color: "hsl(var(--lcu-gold))" }}>
          LCU
        </p>
        <p className="text-xs text-muted-foreground font-sans normal-case mb-1">
          © {new Date().getFullYear()} Lokesh Cinematic Universe. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 font-sans normal-case">
          LCU is a conceptual universe created by Lokesh Kanagaraj. This is a fan-made tribute website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
