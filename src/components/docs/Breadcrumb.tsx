import { ChevronRight, Home } from "lucide-react";
import { useNavigation } from "@/contexts/NavigationContext";
import { topLevelSections } from "@/lib/navigationData";

export function Breadcrumb() {
  const { activeSection, activeComponent, activePath, setActiveSection, setActivePath, collapseAll } = useNavigation();

  // Parse the active path into breadcrumb segments
  const segments = activePath.split("/").filter(Boolean);

  const handleHomeClick = () => {
    const firstSection = topLevelSections[0];
    if (firstSection) {
      setActiveSection(firstSection);
      setActivePath(firstSection.href);
      collapseAll();
    }
  };

  const handleSectionClick = () => {
    setActiveSection(activeSection);
    setActivePath(activeSection.href);
    collapseAll();
  };

  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
      <button onClick={handleHomeClick} className="hover:text-foreground transition-colors">
        <Home className="h-4 w-4" />
      </button>
      <ChevronRight className="h-3 w-3" />
      <button onClick={handleSectionClick} className="hover:text-foreground transition-colors">
        {activeSection.title}
      </button>
      {activeComponent && activeComponent.title !== activeSection.title && (
        <span className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground font-medium">
            {activeComponent.title}
          </span>
        </span>
      )}
      {segments.length > 1 && activeComponent.title === activeSection.title && segments.slice(1).map((segment, index) => (
        <span key={index} className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3" />
          <span className={index === segments.length - 2 ? "text-foreground font-medium" : ""}>
            {segment
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </span>
        </span>
      ))}
    </nav>
  );
}
