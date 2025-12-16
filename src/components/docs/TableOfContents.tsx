import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

const sampleToc: TocItem[] = [
  { id: "overview", title: "Overview", level: 1 },
  { id: "prerequisites", title: "Prerequisites", level: 1 },
  { id: "quick-start", title: "Quick Start", level: 1 },
  { id: "installation", title: "Installation", level: 2 },
  { id: "configuration", title: "Configuration", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 1 },
];

export function TableOfContents() {
  return (
    <aside className="hidden xl:block w-56 flex-shrink-0 sticky top-28 self-start">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Table of contents
      </h3>
      <nav className="space-y-1">
        {sampleToc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block text-sm text-muted-foreground hover:text-foreground transition-colors",
              item.level === 1 ? "" : "pl-3"
            )}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
