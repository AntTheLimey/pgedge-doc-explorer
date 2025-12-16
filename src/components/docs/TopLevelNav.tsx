import { ChevronDown } from "lucide-react";
import { topLevelSections } from "@/lib/navigationData";
import { useNavigation } from "@/contexts/NavigationContext";
import { HelpDropdown } from "./HelpDropdown";

export function TopLevelNav() {
  const { activeSection, setActiveSection, setActivePath, collapseAll } = useNavigation();

  const handleSectionClick = (sectionId: string) => {
    const section = topLevelSections.find((s) => s.id === sectionId);
    if (section) {
      setActiveSection(section);
      setActivePath(section.href);
      collapseAll();
    }
  };

  return (
    <nav className="border-b border-header-border bg-header">
      <div className="flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin py-2">
          {topLevelSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                activeSection.id === section.id
                  ? "bg-nav-active text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-nav-hover"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className="flex-shrink-0 ml-2">
          <HelpDropdown />
        </div>
      </div>
    </nav>
  );
}
