import { ChevronRight, Home } from "lucide-react";
import { useNavigation } from "@/contexts/NavigationContext";

export function Breadcrumb() {
  const { activeSection, activePath } = useNavigation();

  // Parse the active path into breadcrumb segments
  const segments = activePath.split("/").filter(Boolean);

  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
      <a href="/" className="hover:text-foreground transition-colors">
        <Home className="h-4 w-4" />
      </a>
      <ChevronRight className="h-3 w-3" />
      <a href={activeSection.href} className="hover:text-foreground transition-colors">
        {activeSection.title}
      </a>
      {segments.slice(1).map((segment, index) => (
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
