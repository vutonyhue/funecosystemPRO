import { cn } from "@/lib/utils";
import type { Message } from "@/hooks/useAngelAI";

interface AngelAIMessageProps {
  message: Message;
}

const AngelAIMessage = ({ message }: AngelAIMessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={cn(
      "flex w-full gap-3",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-gold flex items-center justify-center shadow-[0_0_15px_hsl(var(--cosmic-purple)/0.5)]">
          <span className="text-sm">✨</span>
        </div>
      )}
      
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
        isUser 
          ? "bg-gradient-to-r from-cosmic-gold/20 to-cosmic-gold/10 border border-cosmic-gold/30 text-foreground" 
          : "bg-gradient-to-r from-cosmic-purple/20 to-cosmic-purple/10 border border-cosmic-purple/30 text-foreground shadow-[0_0_20px_hsl(var(--cosmic-purple)/0.2)]"
      )}>
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-gold to-cosmic-gold-light flex items-center justify-center">
          <span className="text-sm">👤</span>
        </div>
      )}
    </div>
  );
};

export default AngelAIMessage;
