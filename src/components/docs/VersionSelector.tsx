import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigation } from "@/contexts/NavigationContext";

interface Version {
  value: string;
  label: string;
  badge?: "LATEST" | "UNSTABLE";
}

const versions: Version[] = [
  { value: "v0.6.0", label: "v0.6.0", badge: "LATEST" },
  { value: "v0.5.0", label: "v0.5.0" },
  { value: "development", label: "Development", badge: "UNSTABLE" },
];

export function VersionSelector() {
  const { selectedVersion, setSelectedVersion } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentVersion = versions.find((v) => v.value === selectedVersion) || versions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (version: Version) => {
    setSelectedVersion(version.value);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        Version:
      </span>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          {currentVersion.label}
          {currentVersion.badge === "LATEST" && " (Latest)"}
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-1 min-w-[180px] bg-popover border border-border rounded-lg shadow-lg z-50 py-1 animate-in fade-in-0 zoom-in-95">
            {versions.map((version) => (
              <button
                key={version.value}
                onClick={() => handleSelect(version)}
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-accent transition-colors ${
                  version.value === selectedVersion ? "bg-accent/50" : ""
                }`}
              >
                <span className={version.value === selectedVersion ? "text-primary font-medium" : "text-foreground"}>
                  {version.label}
                </span>
                {version.badge && (
                  <span
                    className={`px-1.5 py-0.5 text-xs font-medium rounded ${
                      version.badge === "LATEST"
                        ? "bg-primary text-primary-foreground"
                        : "bg-warning text-warning-foreground"
                    }`}
                  >
                    {version.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
