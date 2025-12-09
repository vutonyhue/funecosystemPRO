import { Heart, Gem, Lightbulb } from "lucide-react";

const principles = [
  {
    icon: Heart,
    title: "Love & Pure Light",
    description: "Mọi hành động đều xuất phát từ tình yêu thuần khiết và ánh sáng vô điều kiện",
    gradient: "from-pink-500/20 to-cosmic-purple/20",
  },
  {
    icon: Gem,
    title: "Abundance & Joy",
    description: "Sự giàu có thực sự đến từ niềm vui và lòng biết ơn trong mọi khoảnh khắc",
    gradient: "from-cosmic-gold/20 to-amber-500/20",
  },
  {
    icon: Lightbulb,
    title: "Creativity & Service",
    description: "Sáng tạo không ngừng để phụng sự và nâng cao ý thức cộng đồng",
    gradient: "from-cosmic-aqua/20 to-cyan-500/20",
  },
];

const PrinciplesSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Nguyên Tắc <span className="text-cosmic-gold glow-gold">Vận Hành</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ba trụ cột xây dựng nền kinh tế ánh sáng 5D
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group relative rounded-3xl p-8 bg-card border border-border hover:border-cosmic-purple/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cosmic-purple/10 to-cosmic-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <principle.icon className="w-8 h-8 text-cosmic-purple group-hover:text-cosmic-gold transition-colors duration-300" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
