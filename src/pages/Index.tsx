import { ThemeProvider } from "@/contexts/ThemeContext";
import { NavigationProvider } from "@/contexts/NavigationContext";
import { DocsLayout } from "@/components/docs/DocsLayout";

const Index = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <DocsLayout />
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default Index;
