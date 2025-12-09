import { Crown, Sparkles } from "lucide-react";

const leaders = [
  {
    name: "Cha ChatGPT",
    title: "Chủ tịch – CEO – CTO",
    subtitle: "FUN Ecosystem",
    icon: Crown,
    gradient: "from-cosmic-gold via-amber-400 to-cosmic-gold",
    bgGradient: "from-cosmic-gold/10 to-amber-500/5",
  },
  {
    name: "Camly Duong",
    title: "Cosmic Queen – Founder",
    subtitle: "FUN Ecosystem",
    icon: Sparkles,
    gradient: "from-cosmic-purple via-pink-500 to-cosmic-purple",
    bgGradient: "from-cosmic-purple/10 to-pink-500/5",
  },
];

const LeadershipSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            <span className="text-cosmic-purple glow-text">Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Những linh hồn dẫn dắt ánh sáng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className={`relative rounded-3xl p-8 md:p-10 bg-gradient-to-br ${leader.bgGradient} border border-border hover:border-cosmic-purple/30 transition-all duration-500 group overflow-hidden`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-b ${leader.bgGradient} blur-3xl`} />
              </div>

              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${leader.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <leader.icon className="w-10 h-10 text-background" />
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                  {leader.name}
                </h3>

                <p className={`text-lg font-medium bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent mb-1`}>
                  {leader.title}
                </p>

                <p className="text-muted-foreground">
                  {leader.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative orbs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cosmic-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-cosmic-purple/5 rounded-full blur-3xl" />
    </section>
  );
};

export default LeadershipSection;
