import { Header } from "./Header";
import { TopLevelNav } from "./TopLevelNav";
import { Sidebar } from "./Sidebar";
import { ContentArea } from "./ContentArea";
import { AskAIPanel } from "./AskAIPanel";

export function DocsLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <TopLevelNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <ContentArea />
        <AskAIPanel />
      </div>
    </div>
  );
}
