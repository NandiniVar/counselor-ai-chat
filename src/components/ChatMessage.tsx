import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserIcon, BrainCircuitIcon } from "lucide-react";
import { Message } from "@/pages/Chat";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div className={cn(
      "flex gap-4 max-w-4xl mx-auto",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <Avatar className="h-10 w-10 border-2 border-primary/20 shadow-glow">
          <AvatarFallback className="gradient-primary">
            <BrainCircuitIcon className="h-5 w-5 text-white" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "max-w-xs lg:max-w-2xl",
        isUser && "order-first"
      )}>
        <div className={cn(
          "rounded-2xl px-4 py-3 shadow-elegant transition-smooth",
          isUser 
            ? "gradient-primary text-white ml-auto" 
            : "bg-chat-ai text-chat-ai-foreground"
        )}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
        
        <div className={cn(
          "mt-2 text-xs text-muted-foreground",
          isUser ? "text-right" : "text-left"
        )}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>

      {isUser && (
        <Avatar className="h-10 w-10 border-2 border-muted-foreground/20">
          <AvatarFallback className="bg-secondary">
            <UserIcon className="h-5 w-5 text-secondary-foreground" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};