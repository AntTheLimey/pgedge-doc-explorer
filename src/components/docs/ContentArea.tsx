import { Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { TableOfContents } from "./TableOfContents";
import { useNavigation } from "@/contexts/NavigationContext";

export function ContentArea() {
  const { activeSection, activePath } = useNavigation();

  // Get the current page title from the path
  const getPageTitle = () => {
    if (activePath === activeSection.href) {
      return activeSection.title + " Overview";
    }
    const pathSegments = activePath.split("/").filter(Boolean);
    return pathSegments[pathSegments.length - 1]
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ") || "Overview";
  };

  return (
    <div className="flex-1 flex gap-8 p-6 lg:p-10 overflow-y-auto h-[calc(100vh-7rem)]">
      <article className="flex-1 max-w-3xl">
        <Breadcrumb />
        
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          {getPageTitle()}
        </h1>

        {/* Info callout */}
        <div className="mb-8 p-4 rounded-lg bg-info border border-info-border">
          <div className="flex gap-3">
            <Info className="h-5 w-5 text-info-icon flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-accent-foreground">Info</p>
              <p className="text-sm text-muted-foreground mt-1">
                This is a prototype demonstration of the pgEdge documentation site redesign. 
                Click on different sections in the navigation to see how the interface responds.
              </p>
            </div>
          </div>
        </div>

        {/* Sample content */}
        <section className="prose prose-slate dark:prose-invert max-w-none">
          <h2 id="overview" className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-6">
            pgEdge Distributed Postgres is a multi-master PostgreSQL solution designed for 
            high availability and global distribution. It enables you to run PostgreSQL 
            clusters across multiple data centers with automatic conflict resolution.
          </p>

          <h2 id="prerequisites" className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
            <li>PostgreSQL 14, 15, or 16</li>
            <li>Enterprise Linux 9/10 or Ubuntu 22.04/24.04</li>
            <li>Minimum 4GB RAM and 2 CPU cores</li>
            <li>Network connectivity between nodes</li>
          </ul>

          <h2 id="quick-start" className="text-2xl font-semibold mb-4">Quick Start</h2>
          
          <h3 id="installation" className="text-xl font-medium mb-3">Installation</h3>
          <div className="bg-code rounded-lg p-4 mb-4 overflow-x-auto">
            <pre className="text-sm font-mono">
              <code>{`# Add pgEdge repository
curl -1sLf 'https://dl.pgedge.com/setup.sh' | sudo bash

# Install pgEdge
sudo yum install pgedge-pg16`}</code>
            </pre>
          </div>

          <h3 id="configuration" className="text-xl font-medium mb-3">Configuration</h3>
          <p className="text-muted-foreground mb-6">
            After installation, configure your cluster by editing the configuration files 
            and setting up replication between nodes.
          </p>

          <h2 id="next-steps" className="text-2xl font-semibold mb-4">Next Steps</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="#"
              className="block p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-colors"
            >
              <h4 className="font-medium mb-1">Architecture Guide</h4>
              <p className="text-sm text-muted-foreground">
                Learn about single node, HA, and multi-master architectures.
              </p>
            </a>
            <a
              href="#"
              className="block p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-colors"
            >
              <h4 className="font-medium mb-1">Deployment Options</h4>
              <p className="text-sm text-muted-foreground">
                Choose between VM, containers, or cloud deployment.
              </p>
            </a>
          </div>
        </section>
      </article>

      <TableOfContents />
    </div>
  );
}
