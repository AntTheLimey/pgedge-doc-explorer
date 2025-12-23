import { HelpCircle, ChevronDown, Headphones, MessageSquare } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DiscordIcon } from "./DiscordLink";

export function HelpDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          <HelpCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Help</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-popover border-border">
        <DropdownMenuItem className="gap-2 cursor-pointer">
          <Headphones className="h-4 w-4" />
          Support
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 cursor-pointer">
          <MessageSquare className="h-4 w-4" />
          Sales
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="gap-2 cursor-pointer">
          <a href="https://discord.gg/pgedge" target="_blank" rel="noopener noreferrer">
            <DiscordIcon className="h-4 w-4" />
            Join the Community
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
