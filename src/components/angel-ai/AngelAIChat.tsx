import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAngelAI } from "@/hooks/useAngelAI";
import AngelAIMessage from "./AngelAIMessage";

interface AngelAIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickReplies = [
  "FUN Ecosystem là gì?",
  "Hướng dẫn tôi đến FUN Profile",
  "Làm sao để tham gia FUN Charity?",
  "ANGEL AI có thể giúp gì cho tôi?",
];

const AngelAIChat = ({ isOpen, onClose }: AngelAIChatProps) => {
  const [input, setInput] = useState("");
  const { messages, isLoading, error, sendMessage, clearMessages } = useAngelAI();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      sendMessage(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickReply = (text: string) => {
    if (!isLoading) {
      sendMessage(text);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)] flex flex-col rounded-2xl overflow-hidden border border-cosmic-purple/30 bg-background/95 backdrop-blur-xl shadow-[0_0_40px_hsl(var(--cosmic-purple)/0.3)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-gold/20 border-b border-cosmic-purple/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-gold flex items-center justify-center shadow-[0_0_15px_hsl(var(--cosmic-purple)/0.5)] animate-glow-pulse">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground">ANGEL AI</h3>
            <p className="text-xs text-muted-foreground">Trợ lý ánh sáng FUN</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={clearMessages}
            title="Xóa lịch sử chat"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="flex flex-col gap-4">
          {messages.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cosmic-purple/30 to-cosmic-gold/30 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-cosmic-purple" />
              </div>
              <h4 className="font-display font-semibold text-foreground mb-2">
                Xin chào! Mình là ANGEL AI ✨
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Mình có thể giúp bạn tìm hiểu về FUN Ecosystem và hướng dẫn bạn đến các nền tảng ánh sáng.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {quickReplies.map((text, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(text)}
                    className="px-3 py-1.5 text-xs rounded-full border border-cosmic-purple/30 bg-cosmic-purple/10 text-foreground hover:bg-cosmic-purple/20 transition-colors"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <AngelAIMessage key={index} message={message} />
            ))
          )}

          {isLoading && messages[messages.length - 1]?.role === 'user' && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-cosmic-purple animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-cosmic-purple animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-cosmic-purple animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-xs">ANGEL đang suy nghĩ...</span>
            </div>
          )}

          {error && (
            <div className="text-center py-2 px-4 rounded-lg bg-destructive/10 text-destructive text-sm">
              {error}
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-cosmic-purple/20 bg-background/50">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Nhập tin nhắn..."
            disabled={isLoading}
            className="flex-1 border-cosmic-purple/30 bg-background/50 focus-visible:ring-cosmic-purple/50"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="btn-cosmic px-4"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AngelAIChat;
