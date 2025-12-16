import { useState, useRef, useEffect } from "react";
import { Search, Clock, X } from "lucide-react";
import { sampleSearchResults } from "@/lib/navigationData";
import { useNavigation } from "@/contexts/NavigationContext";

export function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "Spock replication",
    "Helm chart installation",
    "SSH key management",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setActivePath } = useNavigation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = query
    ? sampleSearchResults.filter((result) =>
        result.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (href: string, title: string) => {
    setActivePath(href);
    if (!recentSearches.includes(title)) {
      setRecentSearches((prev) => [title, ...prev.slice(0, 4)]);
    }
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border bg-search transition-all ${
          isOpen ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-muted-foreground/30"
        }`}
      >
        <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="p-0.5 hover:bg-muted rounded"
          >
            <X className="h-3 w-3 text-muted-foreground" />
          </button>
        )}
        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
          ⌘K
        </kbd>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg overflow-hidden z-50 animate-fade-in">
          {query ? (
            <div className="p-2">
              {filteredResults.length > 0 ? (
                <>
                  <p className="px-2 py-1 text-xs font-medium text-muted-foreground">
                    Results
                  </p>
                  {filteredResults.map((result) => (
                    <button
                      key={result.href}
                      onClick={() => handleSelect(result.href, result.title)}
                      className="w-full text-left px-2 py-2 text-sm rounded-md hover:bg-nav-hover transition-colors"
                    >
                      {result.title}
                    </button>
                  ))}
                </>
              ) : (
                <p className="px-2 py-4 text-sm text-muted-foreground text-center">
                  No results found for "{query}"
                </p>
              )}
            </div>
          ) : (
            <div className="p-2">
              <p className="px-2 py-1 text-xs font-medium text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Recent searches
              </p>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(search)}
                  className="w-full text-left px-2 py-2 text-sm rounded-md hover:bg-nav-hover transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
