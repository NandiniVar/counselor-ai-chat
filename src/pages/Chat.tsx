import { useState, useRef, useEffect } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export interface Message {
  id: string;
  content: string;
  role: "user" | "ai";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your AI Career Counselor. I'm here to help you navigate your career path, discuss opportunities, and provide guidance on professional development. What career questions can I help you with today?",
      role: "ai",
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      role: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response (this would connect to your AI backend)
    setTimeout(() => {
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        content: "I understand your question about career development. To provide you with the best guidance, I'd need to know more about your specific situation. However, since this is a demo, I can tell you that connecting to Supabase will enable real AI responses using OpenAI's API.",
        role: "ai",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const startNewChat = () => {
    setMessages([
      {
        id: "welcome",
        content: "Hello! I'm your AI Career Counselor. I'm here to help you navigate your career path, discuss opportunities, and provide guidance on professional development. What career questions can I help you with today?",
        role: "ai",
        timestamp: new Date(),
      }
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader onNewChat={startNewChat} />
      
      <div className="flex-1 overflow-y-auto px-4 pb-32">
        <div className="max-w-4xl mx-auto py-8 space-y-6">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-xs lg:max-w-2xl">
                <div className="bg-chat-ai rounded-2xl px-4 py-3 shadow-elegant">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">AI is thinking...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      
      {/* New Chat FAB */}
      <Button
        onClick={startNewChat}
        size="icon"
        className="fixed bottom-24 right-6 h-14 w-14 rounded-full shadow-glow gradient-primary hover:shadow-elegant transition-spring md:hidden"
      >
        <PlusIcon className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Chat;