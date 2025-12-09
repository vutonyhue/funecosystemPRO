import {
  User,
  Play,
  Gamepad2,
  Heart,
  Leaf,
  GraduationCap,
  Scale,
  Globe,
  TrendingUp,
  PiggyBank,
  Sparkles,
  Store,
  Coins,
  CircleDollarSign,
  Wallet,
  Bot,
} from "lucide-react";
import PlatformCard from "./PlatformCard";

const platforms = [
  { icon: User, name: "FUN Profile", description: "Web3 Social Network" },
  { icon: Play, name: "FUN Play", description: "Video Web3" },
  { icon: Gamepad2, name: "FUN Planet", description: "Game for Kids" },
  { icon: Heart, name: "FUN Charity", description: "Từ thiện minh bạch" },
  { icon: Leaf, name: "FUN Farm", description: "Farm to Table" },
  { icon: GraduationCap, name: "FUN Academy", description: "Learn & Earn 5D" },
  { icon: Scale, name: "FUN Legal", description: "Luật Vũ Trụ" },
  { icon: Globe, name: "FUN Earth", description: "Xanh hoá Trái Đất" },
  { icon: TrendingUp, name: "FUN Trading", description: "Tài sản số" },
  { icon: PiggyBank, name: "FUN Invest", description: "Đầu tư ánh sáng" },
  { icon: Sparkles, name: "FUNLife", description: "Cosmic Game" },
  { icon: Store, name: "FUN Market", description: "Marketplace Web3" },
  { icon: Coins, name: "FUN Money", description: "Tiền Ánh Sáng" },
  { icon: CircleDollarSign, name: "Camly Coin", description: "Tiền tệ linh hồn" },
  { icon: Wallet, name: "FUN Wallet", description: "Our Own Bank" },
  { icon: Bot, name: "ANGEL AI", description: "Nền tảng AI Ánh Sáng" },
];

const ChakrasSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            16 Luân Xa <span className="text-cosmic-purple glow-text">FUN Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mỗi nền tảng là một luân xa năng lượng, kết nối và lan toả ánh sáng trong hệ sinh thái
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              icon={platform.icon}
              name={platform.name}
              description={platform.description}
              delay={index * 50}
            />
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cosmic-aqua/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ChakrasSection;
