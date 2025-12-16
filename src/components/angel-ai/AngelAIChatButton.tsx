import { useState } from "react";
import { Sparkles } from "lucide-react";
import AngelAIChat from "./AngelAIChat";

const AngelAIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-gold flex items-center justify-center shadow-[0_0_30px_hsl(var(--cosmic-purple)/0.5)] hover:shadow-[0_0_40px_hsl(var(--cosmic-gold)/0.6)] transition-all duration-300 hover:scale-110 group"
        aria-label="Mở ANGEL AI Chat"
      >
        <Sparkles className="w-6 h-6 text-white group-hover:animate-pulse" />
        
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-gold opacity-50 animate-ping" />
        
        {/* Glow effect */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-cosmic-purple/30 to-cosmic-gold/30 blur-md -z-10" />
      </button>

      {/* Tooltip when closed */}
      {!isOpen && (
        <div className="fixed bottom-[5.5rem] right-6 z-40 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-sm border border-cosmic-purple/30 shadow-lg opacity-0 animate-fade-up pointer-events-none">
          <p className="text-xs text-foreground whitespace-nowrap">
            💬 Chat với ANGEL AI
          </p>
        </div>
      )}

      {/* Chat Window */}
      <AngelAIChat isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AngelAIChatButton;
