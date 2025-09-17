import { Button } from "@/components/ui/button";
import { PlusIcon, BrainCircuitIcon, MenuIcon } from "lucide-react";

interface ChatHeaderProps {
  onNewChat: () => void;
}

export const ChatHeader = ({ onNewChat }: ChatHeaderProps) => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl gradient-primary shadow-glow">
              <BrainCircuitIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Career AI</h1>
              <p className="text-sm text-muted-foreground">Your AI Career Counselor</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              onClick={onNewChat}
              variant="outline"
              size="sm"
              className="hidden md:flex items-center space-x-2 transition-smooth hover:shadow-elegant"
            >
              <PlusIcon className="h-4 w-4" />
              <span>New Chat</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};