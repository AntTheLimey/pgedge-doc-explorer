import React, { createContext, useContext, useState } from "react";
import { topLevelSections, TopLevelSection } from "@/lib/navigationData";

interface NavigationContextType {
  activeSection: TopLevelSection;
  setActiveSection: (section: TopLevelSection) => void;
  activePath: string;
  setActivePath: (path: string) => void;
  expandedItems: string[];
  toggleExpanded: (href: string) => void;
  collapseAll: () => void;
  aiPanelOpen: boolean;
  setAiPanelOpen: (open: boolean) => void;
  selectedVersion: string;
  setSelectedVersion: (version: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<TopLevelSection>(topLevelSections[0]);
  const [activePath, setActivePath] = useState("/get-started");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState("v0.6.0");

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) => {
      if (prev.includes(href)) {
        // Collapse this item and all its descendants
        return prev.filter((item) => item !== href && !item.startsWith(href + "/"));
      }
      // Keep all ancestors and other unrelated items, just add the new one
      return [...prev, href];
    });
  };

  const collapseAll = () => {
    setExpandedItems([]);
  };

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection,
        activePath,
        setActivePath,
        expandedItems,
        toggleExpanded,
        collapseAll,
        aiPanelOpen,
        setAiPanelOpen,
        selectedVersion,
        setSelectedVersion,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
