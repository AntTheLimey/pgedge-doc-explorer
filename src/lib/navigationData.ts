export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface Component {
  id: string;
  title: string;
  href: string;
  items: NavItem[];
}

export interface TopLevelSection {
  id: string;
  title: string;
  href: string;
  components: Component[];
}

export const topLevelSections: TopLevelSection[] = [
  {
    id: "get-started",
    title: "Get Started",
    href: "/get-started",
    components: [
      {
        id: "get-started-overview",
        title: "Overview",
        href: "/get-started",
        items: [
          { title: "Overview & Getting Started", href: "/get-started" },
          { title: "What is pgEdge Enterprise Postgres?", href: "/get-started/what-is-pgedge" },
          { title: "Architecture: Single Node → HA → Multi-Master", href: "/get-started/architecture" },
          { title: "Choosing Your Deployment Method", href: "/get-started/deployment-method" },
          { title: "Migration from Standard PostgreSQL", href: "/get-started/migration" },
        ],
      },
    ],
  },
  {
    id: "vm-bare-metal",
    title: "VM / Bare Metal",
    href: "/vm-bare-metal",
    components: [
      {
        id: "vm-overview",
        title: "Overview",
        href: "/vm-bare-metal",
        items: [
          { title: "Overview", href: "/vm-bare-metal" },
        ],
      },
      {
        id: "control-plane",
        title: "Control Plane",
        href: "/vm-bare-metal/control-plane",
        items: [
          { title: "Control Plane", href: "/vm-bare-metal/control-plane" },
          { title: "Control Plane Version Support", href: "/vm-bare-metal/control-plane/version-support" },
          {
            title: "Prerequisites - Preparing your System",
            href: "/vm-bare-metal/control-plane/prerequisites",
            children: [
              { title: "Control Plane Concepts", href: "/vm-bare-metal/control-plane/prerequisites/concepts" },
              { title: "Preparing your System", href: "/vm-bare-metal/control-plane/prerequisites/preparing" },
            ],
          },
          {
            title: "Installing Control Plane",
            href: "/vm-bare-metal/control-plane/installing",
            children: [
              { title: "Deployment Options", href: "/vm-bare-metal/control-plane/installing/deployment-options" },
              { title: "Quickstart - Deploying on Docker Hosts", href: "/vm-bare-metal/control-plane/installing/quickstart-docker" },
              { title: "Installing Control Plane on Your Host", href: "/vm-bare-metal/control-plane/installing/on-host" },
              { title: "Configuration Options", href: "/vm-bare-metal/control-plane/installing/configuration" },
              { title: "Upgrading a Control Plane Installation", href: "/vm-bare-metal/control-plane/installing/upgrading" },
            ],
          },
          {
            title: "Managing a High-Availability Environment",
            href: "/vm-bare-metal/control-plane/high-availability",
            children: [
              { title: "Best Practices for Deploying a HA Cluster", href: "/vm-bare-metal/control-plane/high-availability/best-practices" },
              { title: "Connecting to a HA Cluster", href: "/vm-bare-metal/control-plane/high-availability/connecting" },
            ],
          },
          {
            title: "Using Control Plane",
            href: "/vm-bare-metal/control-plane/using",
            children: [
              { title: "Using Control Plane API Calls", href: "/vm-bare-metal/control-plane/using/api-calls" },
              { title: "Creating a Database", href: "/vm-bare-metal/control-plane/using/creating-database" },
              { title: "Connecting to a Database", href: "/vm-bare-metal/control-plane/using/connecting-database" },
              { title: "Updating a Database", href: "/vm-bare-metal/control-plane/using/updating-database" },
              { title: "Upgrading a Database", href: "/vm-bare-metal/control-plane/using/upgrading-database" },
              { title: "Backup & Restore", href: "/vm-bare-metal/control-plane/using/backup-restore" },
              { title: "Tasks & Logs", href: "/vm-bare-metal/control-plane/using/tasks-logs" },
              { title: "Read Replicas", href: "/vm-bare-metal/control-plane/using/read-replicas" },
              { title: "Deleting a Database", href: "/vm-bare-metal/control-plane/using/deleting-database" },
              { title: "Migrating a Database", href: "/vm-bare-metal/control-plane/using/migrating-database" },
            ],
          },
          {
            title: "API",
            href: "/vm-bare-metal/control-plane/api",
            children: [
              { title: "OpenAPI", href: "/vm-bare-metal/control-plane/api/openapi" },
              { title: "API Reference", href: "/vm-bare-metal/control-plane/api/reference" },
            ],
          },
          {
            title: "Development",
            href: "/vm-bare-metal/control-plane/development",
            children: [
              { title: "Development Process", href: "/vm-bare-metal/control-plane/development/process" },
              { title: "Automated End-to-End tests", href: "/vm-bare-metal/control-plane/development/e2e-tests" },
              { title: "Running Locally", href: "/vm-bare-metal/control-plane/development/running-locally" },
            ],
          },
          { title: "Control Plane Release Notes", href: "/vm-bare-metal/control-plane/release-notes" },
        ],
      },
      {
        id: "ansible",
        title: "Ansible",
        href: "/vm-bare-metal/ansible",
        items: [
          { title: "Ansible", href: "/vm-bare-metal/ansible" },
        ],
      },
      {
        id: "distributed-database-cli",
        title: "Distributed Database CLI",
        href: "/vm-bare-metal/cli",
        items: [
          { title: "Distributed Database CLI", href: "/vm-bare-metal/cli" },
        ],
      },
      {
        id: "package-repository",
        title: "Package Repository",
        href: "/vm-bare-metal/package-repository",
        items: [
          { title: "Package Repository (yum/apt)", href: "/vm-bare-metal/package-repository" },
          {
            title: "Enterprise Linux 9 & 10",
            href: "/vm-bare-metal/package-repository/enterprise-linux",
            children: [
              { title: "Enterprise Linux Version Support", href: "/vm-bare-metal/package-repository/enterprise-linux/version-support" },
              { title: "Getting Started - Configuring the Repository", href: "/vm-bare-metal/package-repository/enterprise-linux/getting-started" },
              { title: "Installing Postgres", href: "/vm-bare-metal/package-repository/enterprise-linux/installing-postgres" },
              { title: "Installing Supporting Components", href: "/vm-bare-metal/package-repository/enterprise-linux/supporting-components" },
              { title: "Migrating to pgEdge Enterprise Postgres", href: "/vm-bare-metal/package-repository/enterprise-linux/migrating" },
              { title: "Upgrading Spock", href: "/vm-bare-metal/package-repository/enterprise-linux/upgrading-spock" },
              { title: "Creating an Offline Repo", href: "/vm-bare-metal/package-repository/enterprise-linux/offline-repo" },
            ],
          },
          {
            title: "Debian & Ubuntu",
            href: "/vm-bare-metal/package-repository/debian-ubuntu",
            children: [
              { title: "Debian & Ubuntu Version Support", href: "/vm-bare-metal/package-repository/debian-ubuntu/version-support" },
              { title: "Getting Started - Configuring the Repository", href: "/vm-bare-metal/package-repository/debian-ubuntu/getting-started" },
              { title: "Installing Postgres", href: "/vm-bare-metal/package-repository/debian-ubuntu/installing-postgres" },
              { title: "Installing Supporting Components", href: "/vm-bare-metal/package-repository/debian-ubuntu/supporting-components" },
              { title: "Migrating to pgEdge Enterprise Postgres", href: "/vm-bare-metal/package-repository/debian-ubuntu/migrating" },
              { title: "Upgrading Spock", href: "/vm-bare-metal/package-repository/debian-ubuntu/upgrading-spock" },
              { title: "Creating an Offline Repo", href: "/vm-bare-metal/package-repository/debian-ubuntu/offline-repo" },
            ],
          },
          { title: "Troubleshooting", href: "/vm-bare-metal/package-repository/troubleshooting" },
          { title: "Enterprise Postgres Release Notes", href: "/vm-bare-metal/package-repository/release-notes" },
        ],
      },
      {
        id: "ace",
        title: "ACE (Active Consistency Engine)",
        href: "/vm-bare-metal/ace",
        items: [
          { title: "ACE Overview", href: "/vm-bare-metal/ace" },
          { title: "ACE Overview", href: "/vm-bare-metal/ace/overview" },
          { title: "Installing ACE", href: "/vm-bare-metal/ace/installing" },
          { title: "Best Practices for Using ACE", href: "/vm-bare-metal/ace/best-practices" },
          { title: "ACE Configuration", href: "/vm-bare-metal/ace/configuration" },
          { title: "Running ACE with Docker", href: "/vm-bare-metal/ace/docker" },
          {
            title: "ACE Commands",
            href: "/vm-bare-metal/ace/commands",
            children: [
              { title: "Command reference", href: "/vm-bare-metal/ace/commands/reference" },
              { title: "Diff Commands", href: "/vm-bare-metal/ace/commands/diff" },
              { title: "Repair Commands", href: "/vm-bare-metal/ace/commands/repair" },
              { title: "Merkle Tree Commands", href: "/vm-bare-metal/ace/commands/merkle-tree" },
            ],
          },
          { title: "Scheduling ACE Runs", href: "/vm-bare-metal/ace/scheduling" },
          { title: "The ACE API", href: "/vm-bare-metal/ace/api" },
          { title: "Improving ACE Performance", href: "/vm-bare-metal/ace/performance" },
          { title: "Using ACE for Failure Recovery", href: "/vm-bare-metal/ace/failure-recovery" },
          {
            title: "Architecture and Design",
            href: "/vm-bare-metal/ace/architecture",
            children: [
              { title: "ACE table-diff Architecture", href: "/vm-bare-metal/ace/architecture/table-diff" },
              { title: "Merkle Tree Architecture", href: "/vm-bare-metal/ace/architecture/merkle-tree" },
            ],
          },
          { title: "Release Notes", href: "/vm-bare-metal/ace/release-notes" },
        ],
      },
    ],
  },
  {
    id: "containers-kubernetes",
    title: "Containers / Kubernetes",
    href: "/containers-kubernetes",
    components: [
      {
        id: "containers-overview",
        title: "Overview",
        href: "/containers-kubernetes",
        items: [
          { title: "Overview", href: "/containers-kubernetes" },
        ],
      },
      {
        id: "helm-chart",
        title: "Helm Chart",
        href: "/containers-kubernetes/helm-chart",
        items: [
          { title: "Helm Chart", href: "/containers-kubernetes/helm-chart" },
          { title: "Introduction", href: "/containers-kubernetes/helm-chart/introduction" },
          { title: "Quickstart", href: "/containers-kubernetes/helm-chart/quickstart" },
          { title: "Installation", href: "/containers-kubernetes/helm-chart/installation" },
          { title: "Configuration", href: "/containers-kubernetes/helm-chart/configuration" },
          {
            title: "Usage Guides",
            href: "/containers-kubernetes/helm-chart/usage-guides",
            children: [
              { title: "Connecting To Postgres", href: "/containers-kubernetes/helm-chart/usage-guides/connecting" },
              { title: "Monitoring", href: "/containers-kubernetes/helm-chart/usage-guides/monitoring" },
              { title: "Adding Nodes", href: "/containers-kubernetes/helm-chart/usage-guides/adding-nodes" },
              { title: "Removing Nodes", href: "/containers-kubernetes/helm-chart/usage-guides/removing-nodes" },
              { title: "Configuring Backups", href: "/containers-kubernetes/helm-chart/usage-guides/backups" },
              { title: "Upgrading Postgres", href: "/containers-kubernetes/helm-chart/usage-guides/upgrading" },
              { title: "Configuring Standby Instances", href: "/containers-kubernetes/helm-chart/usage-guides/standby" },
            ],
          },
          { title: "Certificate Management", href: "/containers-kubernetes/helm-chart/certificates" },
          { title: "Multi-cluster Deployments", href: "/containers-kubernetes/helm-chart/multi-cluster" },
          { title: "Testing Locally", href: "/containers-kubernetes/helm-chart/testing-locally" },
          { title: "Limitations", href: "/containers-kubernetes/helm-chart/limitations" },
        ],
      },
      {
        id: "container-images",
        title: "Container Images",
        href: "/containers-kubernetes/container-images",
        items: [
          { title: "Container Images", href: "/containers-kubernetes/container-images" },
        ],
      },
    ],
  },
  {
    id: "pgedge-cloud",
    title: "pgEdge Cloud (DBaaS)",
    href: "/pgedge-cloud",
    components: [
      {
        id: "cloud-overview",
        title: "Overview",
        href: "/pgedge-cloud",
        items: [
          { title: "Overview", href: "/pgedge-cloud" },
          { title: "Getting Started", href: "/pgedge-cloud/getting-started" },
          {
            title: "Prerequisites",
            href: "/pgedge-cloud/prerequisites",
            children: [
              { title: "Adding an SSH Key", href: "/pgedge-cloud/prerequisites/ssh-key" },
              { title: "Linking Cloud Provider Accounts", href: "/pgedge-cloud/prerequisites/cloud-providers" },
            ],
          },
          {
            title: "Cluster Management",
            href: "/pgedge-cloud/cluster-management",
            children: [
              { title: "Reviewing your Cloud Clusters", href: "/pgedge-cloud/cluster-management/reviewing" },
              { title: "Creating a Cluster", href: "/pgedge-cloud/cluster-management/creating" },
              { title: "Managing a Cluster", href: "/pgedge-cloud/cluster-management/managing" },
              { title: "Defining a Cluster's Backup Store", href: "/pgedge-cloud/cluster-management/backup-store" },
              { title: "Managing Firewall Rules", href: "/pgedge-cloud/cluster-management/firewall-rules" },
              { title: "Using Resource Tags", href: "/pgedge-cloud/cluster-management/resource-tags" },
              { title: "Managing VPC Associations", href: "/pgedge-cloud/cluster-management/vpc-associations" },
            ],
          },
          {
            title: "Database Management",
            href: "/pgedge-cloud/database-management",
            children: [
              { title: "Reviewing your Databases", href: "/pgedge-cloud/database-management/reviewing" },
              { title: "Creating a Database", href: "/pgedge-cloud/database-management/creating" },
              { title: "Managing a Database", href: "/pgedge-cloud/database-management/managing" },
            ],
          },
          {
            title: "Modifying a Database or Cluster",
            href: "/pgedge-cloud/modifying",
            children: [
              { title: "Using the Actions Menu", href: "/pgedge-cloud/modifying/actions-menu" },
              { title: "Adding a Database or Cluster Node", href: "/pgedge-cloud/modifying/adding-node" },
              { title: "Dropping a Database, Node, or Cluster", href: "/pgedge-cloud/modifying/dropping" },
              { title: "Modifying a Database, Node, or Cluster", href: "/pgedge-cloud/modifying/modifying" },
            ],
          },
          {
            title: "Database Administration",
            href: "/pgedge-cloud/administration",
            children: [
              { title: "Creating and Managing Tables", href: "/pgedge-cloud/administration/tables" },
              { title: "Using Integrations", href: "/pgedge-cloud/administration/integrations" },
              { title: "Reviewing Database Metrics", href: "/pgedge-cloud/administration/metrics" },
              { title: "Viewing Log Files", href: "/pgedge-cloud/administration/logs" },
              { title: "Reviewing Backup Details", href: "/pgedge-cloud/administration/backup-details" },
              { title: "Using Postgres Extensions", href: "/pgedge-cloud/administration/extensions" },
            ],
          },
          {
            title: "Connecting to a Database",
            href: "/pgedge-cloud/connecting",
            children: [
              { title: "Connecting to your Database or Cluster", href: "/pgedge-cloud/connecting/overview" },
              { title: "Connecting with SSH", href: "/pgedge-cloud/connecting/ssh" },
              { title: "Connecting with psql", href: "/pgedge-cloud/connecting/psql" },
              { title: "Connecting with pgAdmin", href: "/pgedge-cloud/connecting/pgadmin" },
              { title: "Connecting a Custom Client", href: "/pgedge-cloud/connecting/custom-client" },
              { title: "Connecting over HTTPS", href: "/pgedge-cloud/connecting/https" },
              { title: "Best Practices for Managing Connections", href: "/pgedge-cloud/connecting/best-practices" },
            ],
          },
          {
            title: "Managing Database Backups",
            href: "/pgedge-cloud/backups",
            children: [
              { title: "Reviewing Backup Details", href: "/pgedge-cloud/backups/reviewing" },
              { title: "Backing up your Database", href: "/pgedge-cloud/backups/backing-up" },
              { title: "Restoring from Backup", href: "/pgedge-cloud/backups/restoring" },
            ],
          },
          { title: "Reviewing Console Tasks", href: "/pgedge-cloud/console-tasks" },
          {
            title: "Migrating to pgEdge Distributed Postgres",
            href: "/pgedge-cloud/migrating",
            children: [
              { title: "Overview - Using a Backup to Migrate", href: "/pgedge-cloud/migrating/overview" },
              { title: "Taking a Backup", href: "/pgedge-cloud/migrating/taking-backup" },
              { title: "Restoring from Backup", href: "/pgedge-cloud/migrating/restoring" },
            ],
          },
          { title: "Settings", href: "/pgedge-cloud/settings" },
          { title: "Team Resources", href: "/pgedge-cloud/team-resources" },
          { title: "Troubleshooting", href: "/pgedge-cloud/troubleshooting" },
          { title: "Release Notes", href: "/pgedge-cloud/release-notes" },
        ],
      },
    ],
  },
  {
    id: "ai-toolkit",
    title: "AI Toolkit",
    href: "/ai-toolkit",
    components: [
      {
        id: "ai-overview",
        title: "Overview",
        href: "/ai-toolkit",
        items: [
          { title: "Overview", href: "/ai-toolkit" },
        ],
      },
      {
        id: "mcp-server",
        title: "MCP Server & Natural Language Agent",
        href: "/ai-toolkit/mcp-server",
        items: [
          { title: "MCP Server", href: "/ai-toolkit/mcp-server" },
          {
            title: "About the pgEdge Postgres MCP Server",
            href: "/ai-toolkit/mcp-server/about",
            children: [
              { title: "pgEdge Postgres MCP Server", href: "/ai-toolkit/mcp-server/about/overview" },
              { title: "Choosing the Right Solution", href: "/ai-toolkit/mcp-server/about/choosing" },
            ],
          },
          {
            title: "Installing the MCP Server",
            href: "/ai-toolkit/mcp-server/installing",
            children: [
              { title: "Deploying on Docker", href: "/ai-toolkit/mcp-server/installing/docker" },
              { title: "Deploying from Source", href: "/ai-toolkit/mcp-server/installing/source" },
              { title: "Quickstart", href: "/ai-toolkit/mcp-server/installing/quickstart" },
              { title: "Accessing Online Help", href: "/ai-toolkit/mcp-server/installing/help" },
            ],
          },
          {
            title: "Configuring the MCP Server",
            href: "/ai-toolkit/mcp-server/configuring",
            children: [
              { title: "Specifying Configuration Preferences", href: "/ai-toolkit/mcp-server/configuring/preferences" },
              { title: "Using Environment Variables", href: "/ai-toolkit/mcp-server/configuring/environment-variables" },
              { title: "Including Provider Embeddings", href: "/ai-toolkit/mcp-server/configuring/embeddings" },
              { title: "Configuring for Multiple Databases", href: "/ai-toolkit/mcp-server/configuring/multiple-databases" },
              { title: "Configuring Supporting Services", href: "/ai-toolkit/mcp-server/configuring/services" },
              { title: "Using an Encryption Secret File", href: "/ai-toolkit/mcp-server/configuring/encryption" },
              { title: "Enabling or Disabling Features", href: "/ai-toolkit/mcp-server/configuring/features" },
            ],
          },
          {
            title: "Configuring and Using a Client Application",
            href: "/ai-toolkit/mcp-server/client",
            children: [
              { title: "Connecting with the Web Client", href: "/ai-toolkit/mcp-server/client/web" },
              { title: "Using the Go Chat Client", href: "/ai-toolkit/mcp-server/client/go" },
              { title: "Configuring for Claude Desktop", href: "/ai-toolkit/mcp-server/client/claude-desktop" },
            ],
          },
          {
            title: "Authentication and Security",
            href: "/ai-toolkit/mcp-server/security",
            children: [
              { title: "Authentication - Overview", href: "/ai-toolkit/mcp-server/security/auth-overview" },
              { title: "Authentication - User Management", href: "/ai-toolkit/mcp-server/security/user-management" },
              { title: "Authentication - Token Management", href: "/ai-toolkit/mcp-server/security/token-management" },
              { title: "Security Checklist", href: "/ai-toolkit/mcp-server/security/checklist" },
              { title: "Security Management", href: "/ai-toolkit/mcp-server/security/management" },
            ],
          },
          {
            title: "Reference",
            href: "/ai-toolkit/mcp-server/reference",
            children: [
              { title: "Tools", href: "/ai-toolkit/mcp-server/reference/tools" },
              { title: "Resources", href: "/ai-toolkit/mcp-server/reference/resources" },
              { title: "Prompts", href: "/ai-toolkit/mcp-server/reference/prompts" },
              { title: "Examples", href: "/ai-toolkit/mcp-server/reference/examples" },
              { title: "Configuration Examples", href: "/ai-toolkit/mcp-server/reference/config-examples" },
            ],
          },
          {
            title: "Advanced Topics",
            href: "/ai-toolkit/mcp-server/advanced",
            children: [
              { title: "Custom Definitions", href: "/ai-toolkit/mcp-server/advanced/custom-definitions" },
              { title: "Knowledgebase", href: "/ai-toolkit/mcp-server/advanced/knowledgebase" },
              { title: "LLM Proxy", href: "/ai-toolkit/mcp-server/advanced/llm-proxy" },
            ],
          },
          {
            title: "For Developers",
            href: "/ai-toolkit/mcp-server/developers",
            children: [
              { title: "Overview", href: "/ai-toolkit/mcp-server/developers/overview" },
              { title: "MCP Protocol", href: "/ai-toolkit/mcp-server/developers/protocol" },
              { title: "API Reference", href: "/ai-toolkit/mcp-server/developers/api-reference" },
              { title: "Building Chat Clients", href: "/ai-toolkit/mcp-server/developers/chat-clients" },
            ],
          },
          {
            title: "Contributing",
            href: "/ai-toolkit/mcp-server/contributing",
            children: [
              { title: "Development Setup", href: "/ai-toolkit/mcp-server/contributing/setup" },
              { title: "Architecture", href: "/ai-toolkit/mcp-server/contributing/architecture" },
              { title: "Internal Architecture", href: "/ai-toolkit/mcp-server/contributing/internal" },
              { title: "KB Builder", href: "/ai-toolkit/mcp-server/contributing/kb-builder" },
              { title: "Testing", href: "/ai-toolkit/mcp-server/contributing/testing" },
              { title: "CI/CD", href: "/ai-toolkit/mcp-server/contributing/cicd" },
            ],
          },
          { title: "Troubleshooting", href: "/ai-toolkit/mcp-server/troubleshooting" },
          { title: "Release Notes", href: "/ai-toolkit/mcp-server/release-notes" },
          { title: "Licence", href: "/ai-toolkit/mcp-server/licence" },
        ],
      },
      {
        id: "rag-server",
        title: "RAG Server",
        href: "/ai-toolkit/rag-server",
        items: [
          { title: "RAG Server", href: "/ai-toolkit/rag-server" },
          {
            title: "pgEdge RAG Server",
            href: "/ai-toolkit/rag-server/overview",
            children: [
              { title: "Introduction", href: "/ai-toolkit/rag-server/overview/introduction" },
              { title: "Architecture", href: "/ai-toolkit/rag-server/overview/architecture" },
            ],
          },
          {
            title: "Installing pgEdge RAG Server",
            href: "/ai-toolkit/rag-server/installing",
            children: [
              { title: "Installation Guide", href: "/ai-toolkit/rag-server/installing/guide" },
              { title: "Quickstart", href: "/ai-toolkit/rag-server/installing/quickstart" },
              { title: "Docker Deployment", href: "/ai-toolkit/rag-server/installing/docker" },
            ],
          },
          {
            title: "Configuring the RAG Server",
            href: "/ai-toolkit/rag-server/configuring",
            children: [
              { title: "Creating a Configuration File", href: "/ai-toolkit/rag-server/configuring/config-file" },
              { title: "Sample Configuration Files", href: "/ai-toolkit/rag-server/configuring/samples" },
              { title: "Managing API Keys", href: "/ai-toolkit/rag-server/configuring/api-keys" },
            ],
          },
          { title: "Invoking the pgEdge RAG Server", href: "/ai-toolkit/rag-server/invoking" },
          {
            title: "Using the RAG Server API",
            href: "/ai-toolkit/rag-server/api",
            children: [
              { title: "API Reference", href: "/ai-toolkit/rag-server/api/reference" },
              { title: "Using the API in a Browser Interface", href: "/ai-toolkit/rag-server/api/browser" },
            ],
          },
          { title: "Release Notes", href: "/ai-toolkit/rag-server/release-notes" },
          { title: "Developer Notes", href: "/ai-toolkit/rag-server/developer-notes" },
          { title: "Licence", href: "/ai-toolkit/rag-server/licence" },
        ],
      },
      {
        id: "docloader",
        title: "pgEdge Docloader",
        href: "/ai-toolkit/docloader",
        items: [
          { title: "Document Loader", href: "/ai-toolkit/docloader" },
          {
            title: "pgEdge Document Loader",
            href: "/ai-toolkit/docloader/overview",
            children: [
              { title: "Introduction", href: "/ai-toolkit/docloader/overview/introduction" },
              { title: "Best Practices", href: "/ai-toolkit/docloader/overview/best-practices" },
            ],
          },
          {
            title: "Installing pgEdge Document Loader",
            href: "/ai-toolkit/docloader/installing",
            children: [
              { title: "Configuring the Postgres Database", href: "/ai-toolkit/docloader/installing/postgres" },
              { title: "Installing Document Loader", href: "/ai-toolkit/docloader/installing/installation" },
              { title: "Document Loader Configuration", href: "/ai-toolkit/docloader/installing/configuration" },
              { title: "Quickstart", href: "/ai-toolkit/docloader/installing/quickstart" },
            ],
          },
          {
            title: "Using pgEdge Document Loader",
            href: "/ai-toolkit/docloader/using",
            children: [
              { title: "Using Document Loader", href: "/ai-toolkit/docloader/using/guide" },
              { title: "Using Custom Metadata Columns", href: "/ai-toolkit/docloader/using/metadata" },
              { title: "Updating a Document", href: "/ai-toolkit/docloader/using/updating" },
              { title: "Managing Authentication", href: "/ai-toolkit/docloader/using/authentication" },
            ],
          },
          {
            title: "Supported Formats",
            href: "/ai-toolkit/docloader/formats",
            children: [
              { title: "Supported vs. Unsupported Formats", href: "/ai-toolkit/docloader/formats/overview" },
              { title: "HTML or HTM", href: "/ai-toolkit/docloader/formats/html" },
              { title: "Markdown", href: "/ai-toolkit/docloader/formats/markdown" },
              { title: "RST", href: "/ai-toolkit/docloader/formats/rst" },
              { title: "SGML", href: "/ai-toolkit/docloader/formats/sgml" },
            ],
          },
          { title: "Troubleshooting", href: "/ai-toolkit/docloader/troubleshooting" },
          { title: "Release Notes", href: "/ai-toolkit/docloader/release-notes" },
          { title: "Licence", href: "/ai-toolkit/docloader/licence" },
        ],
      },
      {
        id: "vectorizer",
        title: "pgEdge Vectorizer",
        href: "/ai-toolkit/vectorizer",
        items: [
          { title: "Vectorizer", href: "/ai-toolkit/vectorizer" },
          { title: "Home", href: "/ai-toolkit/vectorizer/home" },
          { title: "Changelog", href: "/ai-toolkit/vectorizer/changelog" },
        ],
      },
      {
        id: "anonymizer",
        title: "pgEdge Anonymizer",
        href: "/ai-toolkit/anonymizer",
        items: [
          { title: "Anonymizer", href: "/ai-toolkit/anonymizer" },
          {
            title: "pgEdge Anonymizer",
            href: "/ai-toolkit/anonymizer/overview",
            children: [
              { title: "Introduction", href: "/ai-toolkit/anonymizer/overview/introduction" },
              { title: "Best Practices", href: "/ai-toolkit/anonymizer/overview/best-practices" },
            ],
          },
          {
            title: "Installing pgEdge Anonymizer",
            href: "/ai-toolkit/anonymizer/installing",
            children: [
              { title: "Installing Anonymizer", href: "/ai-toolkit/anonymizer/installing/guide" },
              { title: "Creating a Configuration File", href: "/ai-toolkit/anonymizer/installing/config" },
              { title: "Quickstart", href: "/ai-toolkit/anonymizer/installing/quickstart" },
            ],
          },
          { title: "Using pgEdge Anonymizer", href: "/ai-toolkit/anonymizer/using" },
          {
            title: "Creating and Using Patterns",
            href: "/ai-toolkit/anonymizer/patterns",
            children: [
              { title: "Creating a User-Defined Pattern", href: "/ai-toolkit/anonymizer/patterns/user-defined" },
              { title: "Using Pre-defined Patterns", href: "/ai-toolkit/anonymizer/patterns/pre-defined" },
              { title: "Example - Configuration File", href: "/ai-toolkit/anonymizer/patterns/example" },
            ],
          },
          { title: "Troubleshooting", href: "/ai-toolkit/anonymizer/troubleshooting" },
          { title: "Release Notes", href: "/ai-toolkit/anonymizer/release-notes" },
          { title: "Licence", href: "/ai-toolkit/anonymizer/licence" },
        ],
      },
    ],
  },
  {
    id: "pgedge-extensions",
    title: "Postgres Extensions",
    href: "/pgedge-extensions",
    components: [
      {
        id: "extensions-overview",
        title: "Overview",
        href: "/pgedge-extensions",
        items: [
          { title: "Overview", href: "/pgedge-extensions" },
        ],
      },
      {
        id: "spock",
        title: "Spock (Multi-Master Replication)",
        href: "/pgedge-extensions/spock",
        items: [
          { title: "Spock", href: "/pgedge-extensions/spock" },
          { title: "Introduction", href: "/pgedge-extensions/spock/introduction" },
          { title: "Installing and Configuring Spock", href: "/pgedge-extensions/spock/installing" },
          { title: "Creating a Two-Node Cluster", href: "/pgedge-extensions/spock/two-node-cluster" },
          { title: "Upgrading a Spock Installation", href: "/pgedge-extensions/spock/upgrading" },
          { title: "Spock's Conflict Avoidance Options", href: "/pgedge-extensions/spock/conflict-avoidance" },
          {
            title: "Spock's Management Features",
            href: "/pgedge-extensions/spock/management",
            children: [
              { title: "Managing a Spock Installation", href: "/pgedge-extensions/spock/management/overview" },
              { title: "Replicating Partitioned Tables", href: "/pgedge-extensions/spock/management/partitioned-tables" },
              { title: "Using Batch Inserts", href: "/pgedge-extensions/spock/management/batch-inserts" },
              { title: "Filtering Data", href: "/pgedge-extensions/spock/management/filtering" },
              { title: "Using Spock in Read-Only Mode", href: "/pgedge-extensions/spock/management/read-only" },
              { title: "Using a Trigger to Manage Replication", href: "/pgedge-extensions/spock/management/triggers" },
              { title: "Using Snowflake Sequences", href: "/pgedge-extensions/spock/management/snowflake" },
              { title: "Using Lolor to Manage Large Objects", href: "/pgedge-extensions/spock/management/lolor" },
              { title: "Using Automatic DDL Replication", href: "/pgedge-extensions/spock/management/ddl-replication" },
            ],
          },
          {
            title: "Adding or Removing Nodes",
            href: "/pgedge-extensions/spock/nodes",
            children: [
              { title: "Modifying a Cluster", href: "/pgedge-extensions/spock/nodes/modifying" },
              { title: "Using Z0DAN", href: "/pgedge-extensions/spock/nodes/zodan" },
              { title: "Adding a Node with pgBackRest", href: "/pgedge-extensions/spock/nodes/pgbackrest" },
              { title: "Using Spockctrl", href: "/pgedge-extensions/spock/nodes/spockctrl" },
            ],
          },
          {
            title: "Monitoring a Cluster",
            href: "/pgedge-extensions/spock/monitoring",
            children: [
              { title: "Monitoring Configuration and Health", href: "/pgedge-extensions/spock/monitoring/health" },
              { title: "Finding Cluster Information", href: "/pgedge-extensions/spock/monitoring/info" },
              { title: "Using Lag Tracking", href: "/pgedge-extensions/spock/monitoring/lag-tracking" },
              { title: "Using a Sync Event", href: "/pgedge-extensions/spock/monitoring/sync-event" },
            ],
          },
          {
            title: "Using Spock Functions",
            href: "/pgedge-extensions/spock/functions",
            children: [
              { title: "Function List", href: "/pgedge-extensions/spock/functions/list" },
              { title: "Node Mgmt Functions", href: "/pgedge-extensions/spock/functions/node-mgmt" },
              { title: "Replication Set Mgmt Functions", href: "/pgedge-extensions/spock/functions/repset-mgmt" },
              { title: "Subscription Mgmt Functions", href: "/pgedge-extensions/spock/functions/sub-mgmt" },
              { title: "Cluster Mgmt Functions", href: "/pgedge-extensions/spock/functions/cluster-mgmt" },
              { title: "Function Reference", href: "/pgedge-extensions/spock/functions/reference" },
            ],
          },
          { title: "Limitations", href: "/pgedge-extensions/spock/limitations" },
          { title: "FAQ", href: "/pgedge-extensions/spock/faq" },
          { title: "Release Notes", href: "/pgedge-extensions/spock/release-notes" },
          {
            title: "Internals",
            href: "/pgedge-extensions/spock/internals",
            children: [
              { title: "Design", href: "/pgedge-extensions/spock/internals/design" },
              { title: "Output Plugin", href: "/pgedge-extensions/spock/internals/output-plugin" },
              { title: "Protocol", href: "/pgedge-extensions/spock/internals/protocol" },
            ],
          },
        ],
      },
      {
        id: "lolor",
        title: "LOLOR (Large Object Replication)",
        href: "/pgedge-extensions/lolor",
        items: [
          { title: "LOLOR", href: "/pgedge-extensions/lolor" },
          { title: "lolor Overview", href: "/pgedge-extensions/lolor/overview" },
          { title: "Building and Installing lolor", href: "/pgedge-extensions/lolor/installing" },
          { title: "Using lolor", href: "/pgedge-extensions/lolor/using" },
          { title: "Using pg_upgrade with lolor", href: "/pgedge-extensions/lolor/pg-upgrade" },
          { title: "lolor Release Notes", href: "/pgedge-extensions/lolor/release-notes" },
        ],
      },
      {
        id: "snowflake",
        title: "Snowflake (Distributed Sequences)",
        href: "/pgedge-extensions/snowflake",
        items: [
          { title: "Snowflake", href: "/pgedge-extensions/snowflake" },
          { title: "Snowflake Overview", href: "/pgedge-extensions/snowflake/overview" },
          { title: "Creating a Snowflake Sequence", href: "/pgedge-extensions/snowflake/creating" },
          { title: "Converting an Existing Postgres Sequence", href: "/pgedge-extensions/snowflake/converting" },
          { title: "Using Snowflake Functions", href: "/pgedge-extensions/snowflake/functions" },
          { title: "Reviewing Snowflake Meta-Data", href: "/pgedge-extensions/snowflake/metadata" },
        ],
      },
      {
        id: "vectorizer-ext",
        title: "pgEdge Vectorizer",
        href: "/pgedge-extensions/vectorizer",
        items: [
          { title: "Vectorizer", href: "/pgedge-extensions/vectorizer" },
          { title: "Home", href: "/pgedge-extensions/vectorizer/home" },
          { title: "Changelog", href: "/pgedge-extensions/vectorizer/changelog" },
        ],
      },
    ],
  },
];

export const sampleSearchResults = [
  { title: "Installing Postgres", href: "/vm-bare-metal/package-repository/enterprise-linux/installing-postgres", section: "VM / Bare Metal" },
  { title: "Spock Multi-Master Replication", href: "/pgedge-extensions/spock", section: "Postgres Extensions" },
  { title: "Creating a Two-Node Cluster", href: "/pgedge-extensions/spock/two-node-cluster", section: "Postgres Extensions" },
  { title: "Helm Chart Installation", href: "/containers-kubernetes/helm-chart/installation", section: "Containers / Kubernetes" },
  { title: "MCP Server Quickstart", href: "/ai-toolkit/mcp-server/installing/quickstart", section: "AI Toolkit" },
  { title: "ACE Configuration", href: "/vm-bare-metal/ace/configuration", section: "VM / Bare Metal" },
  { title: "pgEdge Cloud Getting Started", href: "/pgedge-cloud/getting-started", section: "pgEdge Cloud" },
];
