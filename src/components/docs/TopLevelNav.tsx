import { ChevronDown } from "lucide-react";
import { topLevelSections } from "@/lib/navigationData";
import { useNavigation } from "@/contexts/NavigationContext";
import { HelpDropdown } from "./HelpDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TopLevelNav() {
  const { activeSection, setActiveSection, activeComponent, setActivePath, collapseAll } = useNavigation();

  const handleSectionClick = (sectionId: string) => {
    const section = topLevelSections.find((s) => s.id === sectionId);
    if (section) {
      setActiveSection(section);
      setActivePath(section.href);
      collapseAll();
    }
  };

  const handleComponentSelect = (sectionId: string, componentId: string) => {
    const section = topLevelSections.find((s) => s.id === sectionId);
    if (section) {
      const component = section.components.find((c) => c.id === componentId);
      if (component) {
        setActiveSection(section, component);
        setActivePath(component.href);
        collapseAll();
      }
    }
  };

  return (
    <nav className="border-b border-header-border bg-header">
      <div className="flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin py-2">
          {topLevelSections.map((section) => {
            const hasMultipleComponents = section.components.length > 1;
            const isActive = activeSection.id === section.id;

            if (hasMultipleComponents) {
              return (
                <DropdownMenu key={section.id}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                        isActive
                          ? "bg-nav-active text-accent-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-nav-hover"
                      }`}
                    >
                      {section.title}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    {section.components.map((component) => (
                      <DropdownMenuItem
                        key={component.id}
                        onClick={() => handleComponentSelect(section.id, component.id)}
                        className={`cursor-pointer ${
                          activeSection.id === section.id && activeComponent.id === component.id
                            ? "bg-accent"
                            : ""
                        }`}
                      >
                        {component.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            // Single component sections - just a button
            return (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-nav-active text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-nav-hover"
                }`}
              >
                {section.title}
              </button>
            );
          })}
        </div>
        <div className="flex-shrink-0 ml-2">
          <HelpDropdown />
        </div>
      </div>
    </nav>
  );
}
