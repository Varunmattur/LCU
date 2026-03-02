import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Clock, Calendar } from "lucide-react";
import { movies } from "@/data/movies";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">MOVIE NOT FOUND</h1>
          <Link to="/" className="text-secondary font-heading tracking-widest hover:underline">
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Cinematic Banner */}
      <section className={`relative h-[60vh] md:h-[70vh] bg-gradient-to-br ${movie.posterColor} overflow-hidden`}>
        <div className="absolute inset-0 cinematic-gradient" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[12rem] md:text-[20rem] font-bold opacity-[0.04] text-foreground select-none">
            {movie.title.charAt(0)}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 font-heading text-sm tracking-widest">
              <ArrowLeft className="w-4 h-4" /> BACK TO UNIVERSE
            </Link>
            <h1 className="font-display text-5xl md:text-8xl font-bold text-foreground">{movie.title}</h1>
            <div className="flex items-center gap-4 mt-4">
              <span className="flex items-center gap-2 text-secondary font-heading tracking-widest text-sm">
                <Calendar className="w-4 h-4" /> {movie.year}
              </span>
              {movie.status === "upcoming" && (
                <span className="px-3 py-1 text-xs font-heading tracking-widest border border-secondary text-secondary rounded">
                  UPCOMING
                </span>
              )}
            </div>
            <p className="mt-3 text-muted-foreground font-heading tracking-wider italic">"{movie.tagline}"</p>
          </motion.div>
        </div>
      </section>

      {/* Synopsis */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold mb-6" style={{ color: "hsl(var(--lcu-gold))" }}>SYNOPSIS</h2>
            <p className="text-muted-foreground font-sans normal-case leading-relaxed text-lg">{movie.synopsis}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cast */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "hsl(var(--lcu-gold))" }}>CAST</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {movie.cast.map((member, i) => (
              <ScrollReveal key={member.name + i} delay={i * 0.1}>
                <div className={`${member.color} rounded border border-border p-6 text-center h-full`}>
                  <div className="w-16 h-16 rounded-full bg-background/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-foreground">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-display text-sm text-foreground">{member.name}</h3>
                  <p className="text-xs text-muted-foreground font-heading tracking-widest mt-1">as {member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline placement */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <div className="border border-border rounded p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
              <div className="flex items-start gap-4 pl-4">
                <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3">TIMELINE PLACEMENT</h3>
                  <p className="text-muted-foreground font-sans normal-case leading-relaxed text-sm">{movie.timelinePlacement}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trailer */}
      {movie.trailerUrl && (
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: "hsl(var(--lcu-gold))" }}>
                <Play className="w-6 h-6" /> TRAILER
              </h2>
              <div className="aspect-video rounded border border-border overflow-hidden">
                <iframe
                  src={movie.trailerUrl}
                  title={`${movie.title} Trailer`}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Back to movies */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <Link
            to="/"
            className="inline-block font-heading text-sm tracking-[0.3em] border border-secondary text-secondary px-8 py-4 hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
          >
            ← EXPLORE MORE FILMS
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MovieDetail;
