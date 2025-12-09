import { LucideIcon } from "lucide-react";

interface PlatformCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  delay?: number;
}

const PlatformCard = ({ icon: Icon, name, description, delay = 0 }: PlatformCardProps) => {
  return (
    <div
      className="card-cosmic rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cosmic-purple/20 to-cosmic-aqua/20 flex items-center justify-center group-hover:from-cosmic-purple/30 group-hover:to-cosmic-aqua/30 transition-all duration-300">
          <Icon className="w-6 h-6 text-cosmic-purple group-hover:text-cosmic-gold transition-colors duration-300" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-cosmic-purple transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
