import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { movies } from "@/data/movies";
import ScrollReveal from "./ScrollReveal";

const MoviesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section id="movies" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-center mb-4" style={{ color: "hsl(var(--lcu-gold))" }}>
            THE FILMS
          </h2>
          <p className="text-center text-muted-foreground font-heading tracking-widest mb-12">
            EXPLORE THE CONNECTED UNIVERSE
          </p>
        </ScrollReveal>

        {/* Scroll buttons */}
        <div className="hidden md:flex justify-end gap-2 mb-6">
          <button onClick={() => scroll("left")} className="p-2 border border-border rounded hover:border-secondary transition-colors" aria-label="Scroll left">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 border border-border rounded hover:border-secondary transition-colors" aria-label="Scroll right">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal scroll */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
          {movies.map((movie, i) => (
            <ScrollReveal key={movie.id} delay={i * 0.15} className="flex-shrink-0 snap-center">
              <motion.div
                className="w-[280px] md:w-[320px] group cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/movie/${movie.id}`}>
                  {/* Poster placeholder */}
                  <div className={`relative h-[420px] md:h-[480px] rounded bg-gradient-to-b ${movie.posterColor} overflow-hidden border border-border group-hover:glow-border-red transition-shadow duration-500`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <span className="font-display text-6xl font-bold opacity-20 text-foreground">
                        {movie.title.charAt(0)}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-foreground mt-4">{movie.title}</h3>
                      <span className="font-heading text-sm tracking-widest text-muted-foreground mt-2">
                        {movie.year}
                      </span>
                      {movie.status === "upcoming" && (
                        <span className="mt-3 px-3 py-1 text-xs font-heading tracking-widest border border-secondary text-secondary rounded">
                          UPCOMING
                        </span>
                      )}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="font-heading text-sm tracking-[0.3em] border border-secondary text-secondary px-6 py-3 hover:bg-secondary hover:text-secondary-foreground transition-colors">
                        EXPLORE
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-muted-foreground font-heading tracking-widest italic">
                      "{movie.tagline}"
                    </p>
                  </div>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesSection;
