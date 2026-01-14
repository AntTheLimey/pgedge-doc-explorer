import { ChevronRight } from "lucide-react";
import { NavItem } from "@/lib/navigationData";
import { useNavigation } from "@/contexts/NavigationContext";
import { cn } from "@/lib/utils";
import { VersionSelector } from "./VersionSelector";

interface SidebarItemProps {
  item: NavItem;
  level: number;
}

function SidebarItem({ item, level }: SidebarItemProps) {
  const { activePath, setActivePath, expandedItems, toggleExpanded } = useNavigation();
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedItems.includes(item.href);
  const isActive = activePath === item.href;

  const handleClick = () => {
    setActivePath(item.href);
    if (hasChildren) {
      toggleExpanded(item.href);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={cn(
          "w-full flex items-center justify-between gap-2 px-3 py-2 text-sm rounded-md transition-colors text-left",
          isActive
            ? "bg-nav-active text-accent-foreground font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-nav-hover",
          level === 0 && "font-medium",
          level > 0 && "ml-3"
        )}
        style={{ paddingLeft: `${12 + level * 12}px` }}
      >
        <span className="truncate">{item.title}</span>
        {hasChildren && (
          <ChevronRight
            className={cn(
              "h-4 w-4 flex-shrink-0 transition-transform",
              isExpanded && "rotate-90"
            )}
          />
        )}
      </button>
      {hasChildren && isExpanded && (
        <div className="mt-1">
          {item.children!.map((child) => (
            <SidebarItem key={child.href} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  const { activeComponent, activeSection } = useNavigation();
  
  // Hide version selector for these sections
  const sectionsWithoutVersion = [
    "Get Started",
    "Container Images", 
    "pgEdge Cloud (DBAAS)",
    "Package Repository"
  ];
  const showVersionSelector = !sectionsWithoutVersion.includes(activeSection.title);

  return (
    <aside className="w-64 lg:w-72 flex-shrink-0 border-r border-border bg-sidebar overflow-y-auto scrollbar-thin h-[calc(100vh-7rem)]">
      <div className="p-4">
        {showVersionSelector && <VersionSelector />}
        <h2 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {activeComponent.title}
        </h2>
        <nav className="mt-2 space-y-1">
          {activeComponent.items.map((item) => (
            <SidebarItem key={item.href} item={item} level={0} />
          ))}
        </nav>
      </div>
    </aside>
  );
}
