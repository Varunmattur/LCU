import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Parallax-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-center mb-4" style={{ color: "hsl(var(--lcu-gold))" }}>
            THE VISIONARY
          </h2>
          <p className="text-center text-muted-foreground font-heading tracking-widest mb-16">
            BEHIND THE UNIVERSE
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Portrait placeholder */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] bg-muted rounded border border-border overflow-hidden mx-auto md:mx-0 max-w-[300px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl font-bold opacity-10 text-foreground">LK</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                <h3 className="font-display text-lg text-foreground">Lokesh Kanagaraj</h3>
                <p className="text-xs text-secondary font-heading tracking-widest">DIRECTOR • WRITER</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl text-foreground mb-3">BIOGRAPHY</h3>
                <p className="text-muted-foreground font-sans normal-case leading-relaxed text-sm">
                  Lokesh Kanagaraj is a visionary Tamil filmmaker who has redefined Indian cinema with his concept of a shared cinematic universe. Starting his career with Maanagaram (2017), he quickly rose to prominence with his sharp storytelling, intense action sequences, and interconnected narratives.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-foreground mb-3">THE LCU VISION</h3>
                <p className="text-muted-foreground font-sans normal-case leading-relaxed text-sm">
                  Inspired by the Marvel Cinematic Universe, Lokesh envisioned a connected Tamil action universe where characters, events, and storylines weave together across multiple films. Starting with Kaithi's gritty survival tale and expanding through Vikram's multi-layered thriller, the LCU has captivated audiences with its ambitious scope and meticulous planning.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-foreground mb-3">CINEMATIC STYLE</h3>
                <p className="text-muted-foreground font-sans normal-case leading-relaxed text-sm">
                  Known for his raw, unflinching action choreography, morally complex characters, and masterful use of tension. Lokesh's films feature minimal exposition, letting the narrative unfold through visual storytelling and character actions. His signature style blends commercial appeal with artistic depth.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
