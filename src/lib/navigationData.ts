export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface TopLevelSection {
  id: string;
  title: string;
  href: string;
  items: NavItem[];
}

export const topLevelSections: TopLevelSection[] = [
  {
    id: "get-started",
    title: "Get Started",
    href: "/get-started",
    items: [
      { title: "Overview", href: "/get-started" },
      { title: "What is pgEdge Enterprise Postgres?", href: "/get-started/what-is-pgedge" },
      { title: "Architecture: Single Node → HA → Multi-Master", href: "/get-started/architecture" },
      { title: "Choosing Your Deployment Method", href: "/get-started/deployment-method" },
      { title: "Migration from Standard PostgreSQL", href: "/get-started/migration" },
    ],
  },
  {
    id: "vm-bare-metal",
    title: "VM / Bare Metal",
    href: "/vm-bare-metal",
    items: [
      { title: "Overview", href: "/vm-bare-metal" },
      {
        title: "Package Repository (yum/apt)",
        href: "/vm-bare-metal/package-repo",
        children: [
          {
            title: "Enterprise Linux 9 & 10",
            href: "/vm-bare-metal/enterprise-linux",
            children: [
              { title: "Version Support", href: "/vm-bare-metal/enterprise-linux/version-support" },
              { title: "Getting Started - Configuring the Repository", href: "/vm-bare-metal/enterprise-linux/configure-repo" },
              { title: "Installing Postgres", href: "/vm-bare-metal/enterprise-linux/installing-postgres" },
              { title: "Installing Supporting Components", href: "/vm-bare-metal/enterprise-linux/supporting-components" },
              { title: "Migrating to pgEdge Enterprise Postgres", href: "/vm-bare-metal/enterprise-linux/migration" },
              { title: "Upgrading Spock", href: "/vm-bare-metal/enterprise-linux/upgrading-spock" },
              { title: "Creating an Offline Repo", href: "/vm-bare-metal/enterprise-linux/offline-repo" },
            ],
          },
          {
            title: "Debian & Ubuntu",
            href: "/vm-bare-metal/debian-ubuntu",
            children: [
              { title: "Version Support", href: "/vm-bare-metal/debian-ubuntu/version-support" },
              { title: "Getting Started - Configuring the Repository", href: "/vm-bare-metal/debian-ubuntu/configure-repo" },
              { title: "Installing Postgres", href: "/vm-bare-metal/debian-ubuntu/installing-postgres" },
              { title: "Installing Supporting Components", href: "/vm-bare-metal/debian-ubuntu/supporting-components" },
              { title: "Migrating to pgEdge Enterprise Postgres", href: "/vm-bare-metal/debian-ubuntu/migration" },
              { title: "Upgrading Spock", href: "/vm-bare-metal/debian-ubuntu/upgrading-spock" },
              { title: "Creating an Offline Repo", href: "/vm-bare-metal/debian-ubuntu/offline-repo" },
            ],
          },
          { title: "Troubleshooting", href: "/vm-bare-metal/troubleshooting" },
          { title: "Enterprise Postgres Release Notes", href: "/vm-bare-metal/release-notes" },
        ],
      },
      {
        title: "Control Plane",
        href: "/vm-bare-metal/control-plane",
        children: [
          { title: "Version Support", href: "/vm-bare-metal/control-plane/version-support" },
          { title: "Prerequisites", href: "/vm-bare-metal/control-plane/prerequisites" },
          { title: "Control Plane Concepts", href: "/vm-bare-metal/control-plane/concepts" },
          { title: "Installing Control Plane", href: "/vm-bare-metal/control-plane/installation" },
          {
            title: "Deployment Options",
            href: "/vm-bare-metal/control-plane/deployment",
            children: [
              { title: "Quickstart - Docker Hosts", href: "/vm-bare-metal/control-plane/deployment/docker-quickstart" },
              { title: "Installing on Your Host", href: "/vm-bare-metal/control-plane/deployment/host-install" },
              { title: "Configuration Options", href: "/vm-bare-metal/control-plane/deployment/configuration" },
              { title: "Upgrading", href: "/vm-bare-metal/control-plane/deployment/upgrading" },
            ],
          },
          {
            title: "Managing High-Availability",
            href: "/vm-bare-metal/control-plane/ha",
            children: [
              { title: "Best Practices", href: "/vm-bare-metal/control-plane/ha/best-practices" },
              { title: "Connecting to a HA Cluster", href: "/vm-bare-metal/control-plane/ha/connecting" },
            ],
          },
          {
            title: "Using Control Plane",
            href: "/vm-bare-metal/control-plane/usage",
            children: [
              { title: "API Calls", href: "/vm-bare-metal/control-plane/usage/api-calls" },
              { title: "Creating a Database", href: "/vm-bare-metal/control-plane/usage/create-database" },
              { title: "Connecting to a Database", href: "/vm-bare-metal/control-plane/usage/connect-database" },
              { title: "Updating a Database", href: "/vm-bare-metal/control-plane/usage/update-database" },
              { title: "Upgrading a Database", href: "/vm-bare-metal/control-plane/usage/upgrade-database" },
              { title: "Backup & Restore", href: "/vm-bare-metal/control-plane/usage/backup-restore" },
              { title: "Tasks & Logs", href: "/vm-bare-metal/control-plane/usage/tasks-logs" },
              { title: "Read Replicas", href: "/vm-bare-metal/control-plane/usage/read-replicas" },
              { title: "Deleting a Database", href: "/vm-bare-metal/control-plane/usage/delete-database" },
              { title: "Migrating a Database", href: "/vm-bare-metal/control-plane/usage/migrate-database" },
            ],
          },
          { title: "API Reference", href: "/vm-bare-metal/control-plane/api" },
          { title: "Development", href: "/vm-bare-metal/control-plane/development" },
          { title: "Release Notes", href: "/vm-bare-metal/control-plane/release-notes" },
        ],
      },
      { title: "Ansible", href: "/vm-bare-metal/ansible" },
    ],
  },
  {
    id: "containers-kubernetes",
    title: "Containers / Kubernetes",
    href: "/containers-kubernetes",
    items: [
      { title: "Overview", href: "/containers-kubernetes" },
      {
        title: "Helm Chart",
        href: "/containers-kubernetes/helm",
        children: [
          { title: "Introduction", href: "/containers-kubernetes/helm/introduction" },
          { title: "Quickstart", href: "/containers-kubernetes/helm/quickstart" },
          { title: "Installation", href: "/containers-kubernetes/helm/installation" },
          { title: "Configuration", href: "/containers-kubernetes/helm/configuration" },
          {
            title: "Usage Guides",
            href: "/containers-kubernetes/helm/guides",
            children: [
              { title: "Connecting To Postgres", href: "/containers-kubernetes/helm/guides/connecting" },
              { title: "Monitoring", href: "/containers-kubernetes/helm/guides/monitoring" },
              { title: "Adding Nodes", href: "/containers-kubernetes/helm/guides/adding-nodes" },
              { title: "Removing Nodes", href: "/containers-kubernetes/helm/guides/removing-nodes" },
              { title: "Configuring Backups", href: "/containers-kubernetes/helm/guides/backups" },
              { title: "Upgrading Postgres", href: "/containers-kubernetes/helm/guides/upgrading" },
              { title: "Configuring Standby Instances", href: "/containers-kubernetes/helm/guides/standby" },
              { title: "Certificate Management", href: "/containers-kubernetes/helm/guides/certificates" },
              { title: "Multi-cluster Deployments", href: "/containers-kubernetes/helm/guides/multi-cluster" },
            ],
          },
          { title: "Testing Locally", href: "/containers-kubernetes/helm/testing" },
          { title: "Limitations", href: "/containers-kubernetes/helm/limitations" },
        ],
      },
      { title: "Container Images", href: "/containers-kubernetes/images" },
    ],
  },
  {
    id: "pgedge-cloud",
    title: "pgEdge Cloud (DBaaS)",
    href: "/pgedge-cloud",
    items: [
      { title: "Overview", href: "/pgedge-cloud" },
      {
        title: "Getting Started",
        href: "/pgedge-cloud/getting-started",
        children: [
          { title: "Prerequisites", href: "/pgedge-cloud/getting-started/prerequisites" },
          { title: "Adding an SSH Key", href: "/pgedge-cloud/getting-started/ssh-key" },
          { title: "Linking Cloud Provider Accounts", href: "/pgedge-cloud/getting-started/cloud-providers" },
        ],
      },
      { title: "Cluster Management", href: "/pgedge-cloud/cluster-management" },
      { title: "Database Management", href: "/pgedge-cloud/database-management" },
      { title: "Modifying a Database or Cluster", href: "/pgedge-cloud/modifying" },
      {
        title: "Database Administration",
        href: "/pgedge-cloud/administration",
        children: [
          { title: "Connecting to a Database", href: "/pgedge-cloud/administration/connecting" },
          { title: "Managing Database Backups", href: "/pgedge-cloud/administration/backups" },
          { title: "Reviewing Console Tasks", href: "/pgedge-cloud/administration/tasks" },
        ],
      },
      { title: "Migrating to pgEdge Cloud", href: "/pgedge-cloud/migration" },
      { title: "Settings", href: "/pgedge-cloud/settings" },
      { title: "Team Resources", href: "/pgedge-cloud/team-resources" },
      { title: "Troubleshooting", href: "/pgedge-cloud/troubleshooting" },
      { title: "Release Notes", href: "/pgedge-cloud/release-notes" },
    ],
  },
  {
    id: "ai-toolkit",
    title: "AI Toolkit",
    href: "/ai-toolkit",
    items: [
      { title: "Overview", href: "/ai-toolkit" },
      { title: "MCP Server & Web UI", href: "/ai-toolkit/mcp-server" },
      { title: "RAG Server", href: "/ai-toolkit/rag-server" },
      { title: "pgEdge Docloader", href: "/ai-toolkit/docloader" },
      { title: "pgEdge Vectorizer", href: "/ai-toolkit/vectorizer" },
      { title: "Building Agentic AI Applications", href: "/ai-toolkit/agentic-ai" },
      { title: "Tutorials & Examples", href: "/ai-toolkit/tutorials" },
      { title: "Integration with AI Frameworks", href: "/ai-toolkit/integration" },
    ],
  },
  {
    id: "extensions",
    title: "pgEdge Extensions",
    href: "/extensions",
    items: [
      { title: "Overview", href: "/extensions" },
      { title: "Spock (Multi-Master Replication)", href: "/extensions/spock" },
      { title: "LOLOR (Large Object Replication)", href: "/extensions/lolor" },
      { title: "Snowflake (Distributed Sequences)", href: "/extensions/snowflake" },
      { title: "pgedge_vectorizer (Embeddings Extension)", href: "/extensions/vectorizer" },
    ],
  },
  {
    id: "additional-tools",
    title: "Additional Tools",
    href: "/additional-tools",
    items: [
      { title: "Overview", href: "/additional-tools" },
      { title: "ACE (Active Consistency Engine)", href: "/additional-tools/ace" },
      { title: "Anonymizer (PII Masking - Preview)", href: "/additional-tools/anonymizer" },
      { title: "Docloader (Document Loading CLI)", href: "/additional-tools/docloader" },
      { title: "Monitoring & Observability", href: "/additional-tools/monitoring" },
    ],
  },
];

export const sampleSearchResults = [
  { title: "Installing Postgres on Enterprise Linux", href: "/vm-bare-metal/enterprise-linux/installing-postgres" },
  { title: "Spock Multi-Master Replication", href: "/extensions/spock" },
  { title: "Creating a Database in Control Plane", href: "/vm-bare-metal/control-plane/usage/create-database" },
  { title: "pgEdge Cloud Prerequisites", href: "/pgedge-cloud/getting-started/prerequisites" },
  { title: "Helm Chart Quickstart", href: "/containers-kubernetes/helm/quickstart" },
];
