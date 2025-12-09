import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center cosmic-bg overflow-hidden">
      {/* Cosmic orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cosmic-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cosmic-aqua/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cosmic-gold/5 rounded-full blur-3xl animate-glow-pulse" />

      <div className="container relative z-10 px-4 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-purple/10 border border-cosmic-purple/20 mb-8">
            <Sparkles className="w-4 h-4 text-cosmic-gold" />
            <span className="text-sm font-medium text-cosmic-purple-dark">Web3 + AI + Ánh Sáng</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 leading-tight">
            FUN Ecosystem
            <span className="block text-cosmic-purple glow-text">
              Nền Kinh Tế Ánh Sáng 5D
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Hệ sinh thái Web3 + AI + Ánh Sáng đầu tiên, nơi con người sáng tạo – chia sẻ – nhận lại – tiến hóa trong tình yêu thuần khiết.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fuprofile.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cosmic px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Vào FUN Profile
            </a>
            <a
              href="https://funcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Vào FUN Charity
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
