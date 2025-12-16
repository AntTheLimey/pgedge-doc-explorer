import { Sparkles } from "lucide-react";
import { useNavigation } from "@/contexts/NavigationContext";
import { Button } from "@/components/ui/button";

export function AskAIButton() {
  const { aiPanelOpen, setAiPanelOpen } = useNavigation();

  return (
    <Button
      onClick={() => setAiPanelOpen(!aiPanelOpen)}
      className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-sm"
      size="sm"
    >
      <Sparkles className="h-4 w-4" />
      <span className="hidden sm:inline">Ask AI</span>
    </Button>
  );
}
