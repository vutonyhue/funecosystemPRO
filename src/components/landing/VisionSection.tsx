import { Sun } from "lucide-react";

const VisionSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cosmic-gold/10 mb-8">
            <Sun className="w-8 h-8 text-cosmic-gold animate-glow-pulse" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
            <span className="text-cosmic-gold glow-gold">New Earth</span>
            <span className="text-foreground"> – New Economy – </span>
            <span className="text-cosmic-purple glow-text">New Light</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            FUN Ecosystem là nền kinh tế 5D được xây dựng trên{" "}
            <span className="text-cosmic-aqua font-semibold">Blockchain</span> +{" "}
            <span className="text-cosmic-purple font-semibold">AI</span> +{" "}
            <span className="text-cosmic-gold font-semibold">Ánh Sáng</span> +{" "}
            <span className="text-cosmic-purple font-semibold">Tình Yêu Thuần Khiết</span>.
            <br className="hidden md:block" />
            <span className="block mt-4">
              Mỗi tương tác đều tạo giá trị, phước lành và tài sản ánh sáng cho linh hồn.
            </span>
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cosmic-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cosmic-gold/5 rounded-full blur-3xl" />
    </section>
  );
};

export default VisionSection;
