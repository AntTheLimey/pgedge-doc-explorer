import { useState, useEffect } from "react";
import { X, Send, Sparkles, Bot, User, Plus, ChevronDown, Trash2, Maximize2, Minimize2 } from "lucide-react";
import { useNavigation } from "@/contexts/NavigationContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
}

const DEFAULT_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm the pgEdge AI assistant. Ask me anything about pgEdge documentation, installation, configuration, or troubleshooting.",
};

const generateChatTitle = (messages: Message[]): string => {
  const firstUserMessage = messages.find((m) => m.role === "user");
  if (firstUserMessage) {
    return firstUserMessage.content.slice(0, 30) + (firstUserMessage.content.length > 30 ? "..." : "");
  }
  return "New Chat";
};

export function AskAIPanel() {
  const { aiPanelOpen, setAiPanelOpen } = useNavigation();
  const [input, setInput] = useState("");
  const [chats, setChats] = useState<Chat[]>(() => {
    const saved = localStorage.getItem("pgedge-ai-chats");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });
  const [currentChatId, setCurrentChatId] = useState<string | null>(() => {
    const saved = localStorage.getItem("pgedge-ai-current-chat");
    return saved || null;
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const currentChat = chats.find((c) => c.id === currentChatId);
  const messages = currentChat?.messages || [DEFAULT_MESSAGE];

  // Save chats to localStorage
  useEffect(() => {
    localStorage.setItem("pgedge-ai-chats", JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    if (currentChatId) {
      localStorage.setItem("pgedge-ai-current-chat", currentChatId);
    }
  }, [currentChatId]);

  if (!aiPanelOpen) return null;

  const createNewChat = () => {
    const newChat: Chat = {
      id: crypto.randomUUID(),
      title: "New Chat",
      messages: [DEFAULT_MESSAGE],
      createdAt: new Date(),
    };
    setChats((prev) => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
  };

  const clearAllChats = () => {
    setChats([]);
    setCurrentChatId(null);
    localStorage.removeItem("pgedge-ai-chats");
    localStorage.removeItem("pgedge-ai-current-chat");
  };

  const selectChat = (chatId: string) => {
    setCurrentChatId(chatId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };

    if (!currentChatId) {
      // Create a new chat if none exists
      const newChat: Chat = {
        id: crypto.randomUUID(),
        title: input.slice(0, 30) + (input.length > 30 ? "..." : ""),
        messages: [DEFAULT_MESSAGE, userMessage],
        createdAt: new Date(),
      };
      setChats((prev) => [newChat, ...prev]);
      setCurrentChatId(newChat.id);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          role: "assistant",
          content: `I understand you're asking about "${input}". This is a prototype demo. In the full implementation, I would search the pgEdge documentation and provide relevant answers with links to specific sections.`,
        };
        setChats((prev) =>
          prev.map((chat) =>
            chat.id === newChat.id
              ? { ...chat, messages: [...chat.messages, aiResponse] }
              : chat
          )
        );
      }, 500);
    } else {
      // Update existing chat
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId
            ? {
                ...chat,
                title: chat.title === "New Chat" ? generateChatTitle([...chat.messages, userMessage]) : chat.title,
                messages: [...chat.messages, userMessage],
              }
            : chat
        )
      );

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          role: "assistant",
          content: `I understand you're asking about "${input}". This is a prototype demo. In the full implementation, I would search the pgEdge documentation and provide relevant answers with links to specific sections.`,
        };
        setChats((prev) =>
          prev.map((chat) =>
            chat.id === currentChatId
              ? { ...chat, messages: [...chat.messages, aiResponse] }
              : chat
          )
        );
      }, 500);
    }

    setInput("");
  };

  return (
    <aside className={`${isExpanded ? 'w-[32rem]' : 'w-96'} flex-shrink-0 border-l border-border bg-card flex flex-col h-[calc(100vh-7rem)] animate-slide-in-right transition-all duration-200`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 h-auto p-1 font-semibold">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="max-w-[180px] truncate">
                {currentChat?.title || "pgEdge AI"}
              </span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            {chats.length > 0 && (
              <>
                {chats.map((chat) => (
                  <DropdownMenuItem
                    key={chat.id}
                    onClick={() => selectChat(chat.id)}
                    className={currentChatId === chat.id ? "bg-accent" : ""}
                  >
                    <span className="truncate">{chat.title}</span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
              </>
            )}
            <DropdownMenuItem onClick={createNewChat}>
              <Plus className="h-4 w-4 mr-2" />
              Add new chat
            </DropdownMenuItem>
            {chats.length > 0 && (
              <DropdownMenuItem onClick={clearAllChats} className="text-destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear all chats
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={createNewChat}
            className="h-8 w-8"
            title="New chat"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-8 w-8"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setAiPanelOpen(false)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground"
              }`}
            >
              {message.role === "user" ? (
                <User className="h-4 w-4" />
              ) : (
                <Bot className="h-4 w-4" />
              )}
            </div>
            <div
              className={`flex-1 px-4 py-3 rounded-lg text-sm ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 px-3 py-2 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <Button type="submit" size="icon" className="flex-shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </aside>
  );
}
