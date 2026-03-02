import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-lcu-charcoal to-background" />
      <div className="absolute inset-0 cinematic-overlay" />
      <ParticleField />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
        >
          <h1
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-glow-gold leading-none"
            style={{ color: "hsl(var(--lcu-gold))" }}
          >
            LOKESH
            <br />
            <span className="text-foreground">CINEMATIC</span>
            <br />
            UNIVERSE
          </h1>
        </motion.div>

        <motion.div
          className="mt-6 h-[1px] mx-auto"
          style={{ background: `linear-gradient(90deg, transparent, hsl(var(--lcu-red)), hsl(var(--lcu-gold)), transparent)` }}
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          transition={{ duration: 1.2, delay: 2.8 }}
        />

        <motion.p
          className="mt-6 font-heading text-lg md:text-xl tracking-[0.25em] text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          A CONNECTED TAMIL ACTION UNIVERSE
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
