import { motion } from "framer-motion";
import { characters } from "@/data/movies";
import ScrollReveal from "./ScrollReveal";

const CharactersSection = () => {
  return (
    <section id="characters" className="relative py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-center mb-4" style={{ color: "hsl(var(--lcu-gold))" }}>
            THE CHARACTERS
          </h2>
          <p className="text-center text-muted-foreground font-heading tracking-widest mb-16">
            ICONS OF THE UNIVERSE
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {characters.map((char, i) => (
            <ScrollReveal key={char.name} delay={i * 0.15}>
              <motion.div
                className="relative group overflow-hidden rounded border border-border h-[400px] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder portrait */}
                <div className={`absolute inset-0 ${char.color} transition-all duration-500 group-hover:brightness-50`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-8xl font-bold opacity-10 text-foreground">
                      {char.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Info overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${char.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6`}>
                  <h3 className="font-display text-2xl font-bold text-foreground">{char.name}</h3>
                  <p className="text-xs text-secondary font-heading tracking-widest mt-1">
                    {char.actor} • {char.movie}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 font-sans normal-case leading-relaxed">
                    {char.bio}
                  </p>
                </div>

                {/* Default label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-display text-xl font-bold text-foreground">{char.name}</h3>
                  <p className="text-xs text-muted-foreground font-heading tracking-widest">{char.movie}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
