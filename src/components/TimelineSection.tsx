import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const timelineData = [
  { year: "2019", title: "Kaithi", desc: "The night that started it all. Dilli's escape sets the stage for a connected underworld." },
  { year: "2022", title: "Vikram", desc: "Agents, drug lords, and a masked vigilante collide. The universe expands." },
  { year: "2023", title: "Leo", desc: "A hidden past resurfaces. The drug empire's reach extends to Kashmir." },
  { year: "TBA", title: "Rolex", desc: "The kingpin steps out of the shadows. The LCU converges." },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-center mb-4" style={{ color: "hsl(var(--lcu-gold))" }}>
            THE TIMELINE
          </h2>
          <p className="text-center text-muted-foreground font-heading tracking-widest mb-16">
            HOW THE UNIVERSE CONNECTS
          </p>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Glowing line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary opacity-40" />

          {timelineData.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.2} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`relative flex items-center mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-secondary bg-background"
                    whileInView={{ boxShadow: "0 0 15px hsl(43 76% 53% / 0.6)" }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="font-display text-3xl font-bold" style={{ color: "hsl(var(--lcu-gold))" }}>
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 font-sans normal-case">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
