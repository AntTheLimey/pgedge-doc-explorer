import { PgEdgeLogo } from "./PgEdgeLogo";
import { SearchBox } from "./SearchBox";
import { ThemeToggle } from "./ThemeToggle";
import { GitHubLink } from "./GitHubLink";
import { AskAIButton } from "./AskAIButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-header-border bg-header backdrop-blur-sm">
      <div className="flex h-14 items-center justify-between px-4 lg:px-6">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <a
            href="https://pgedge.com"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <PgEdgeLogo className="h-8 w-auto" />
          </a>
          <div className="hidden sm:block h-6 w-px bg-border" />
          <a
            href="/"
            className="hidden sm:block text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            Documentation
          </a>
        </div>

        {/* Middle - Search */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <SearchBox />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <SearchBox />
          </div>
          <AskAIButton />
          <ThemeToggle />
          <GitHubLink />
        </div>
      </div>
    </header>
  );
}
