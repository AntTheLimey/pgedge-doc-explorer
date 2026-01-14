import React, { createContext, useContext, useState } from "react";
import { topLevelSections, TopLevelSection, Component } from "@/lib/navigationData";

interface NavigationContextType {
  activeSection: TopLevelSection;
  setActiveSection: (section: TopLevelSection) => void;
  activeComponent: Component;
  setActiveComponent: (component: Component) => void;
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
  const [activeComponent, setActiveComponent] = useState<Component>(topLevelSections[0].components[0]);
  const [activePath, setActivePath] = useState("/get-started");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState("v0.6.0");

  const handleSetActiveSection = (section: TopLevelSection) => {
    setActiveSection(section);
    // Auto-select the first component when section changes
    if (section.components.length > 0) {
      setActiveComponent(section.components[0]);
    }
  };

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
        setActiveSection: handleSetActiveSection,
        activeComponent,
        setActiveComponent,
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
  if (context) return context;

  // Fail-soft fallback: prevents a blank screen if a component is rendered
  // outside the provider (e.g., during isolated rendering / error states).
  // Components will still work, but state won't be shared.
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn("useNavigation called outside NavigationProvider; using fallback values.");
  }

  return {
    activeSection: topLevelSections[0],
    setActiveSection: () => undefined,
    activeComponent: topLevelSections[0].components[0],
    setActiveComponent: () => undefined,
    activePath: "/get-started",
    setActivePath: () => undefined,
    expandedItems: [],
    toggleExpanded: () => undefined,
    collapseAll: () => undefined,
    aiPanelOpen: false,
    setAiPanelOpen: () => undefined,
    selectedVersion: "v0.6.0",
    setSelectedVersion: () => undefined,
  };
}
