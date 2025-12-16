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
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<TopLevelSection>(topLevelSections[0]);
  const [activePath, setActivePath] = useState("/get-started");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) => {
      if (prev.includes(href)) {
        return prev.filter((item) => item !== href);
      }
      // Collapse siblings at the same level and expand the new one
      return [...prev.filter((item) => !item.startsWith(href.split("/").slice(0, -1).join("/"))), href];
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
