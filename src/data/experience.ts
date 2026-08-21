export interface Experience {
  id: string
  company: string
  role: string
  period: string
  summary: string
  description: string[]
  highlights: string[]
  technologies: string[]
  domain: string[]
}

export const experience: Experience[] = [
  {
    id: 'cmu-nerds',
    company: 'CMU Nerds',
    role: 'Software Engineer / Full Stack Engineer',
    period: 'Current',
    summary: 'Enterprise Learning Management System',
    description: [
      'Developed and maintained .NET 8 microservices for assignments, entitlements, notifications, transcripts, imports, and learning workflows.',
      'Worked with AWS Lambda, SQS, SNS, DynamoDB, S3, OpenSearch, and Redis.',
      'Helped move functionality from a .NET Framework 4.8 monolith into .NET 8 microservices while keeping the existing application operational.',
      'Worked on SPA applications using Angular, React, Vue.js, TypeScript, and JavaScript.',
      'Used Hangfire and Redis for background jobs and asynchronous processing.',
      'Used Terraform, Docker, Docker Compose, and LocalStack for infrastructure and local development.',
      'Worked with Azure DevOps and CI/CD processes alongside AWS deployment tooling.',
      'Developed tests using xUnit, Moq, FluentAssertions, coverlet, and tSQLt.',
      'Used Python and AI-assisted development tools for automation, code analysis, debugging, testing, documentation, and engineering workflows.',
    ],
    highlights: [
      'Large multi-tenant Learning Management System',
      'Enterprise SaaS platform',
      '.NET Framework monolith to .NET 8 microservices migration',
      'Complex enrollment, assignments, transcripts, and compliance workflows',
      'Event-driven architecture',
      'Production support and optimization',
    ],
    technologies: [
      '.NET 8',
      '.NET Framework 4.8',
      'ASP.NET Core',
      'AWS',
      'Lambda',
      'SQS',
      'SNS',
      'DynamoDB',
      'S3',
      'OpenSearch',
      'Redis',
      'Angular',
      'React',
      'Vue.js',
      'TypeScript',
      'Hangfire',
      'Terraform',
      'Docker',
      'Azure DevOps',
      'xUnit',
      'Python',
    ],
    domain: [
      'Online training',
      'Continuing education',
      'Compliance courses',
      'Enrollment',
      'Assignments',
      'Transcripts',
      'Certificates',
      'Reporting',
      'Course search',
    ]
  },
  {
    id: 'semantic-health',
    company: 'Semantic Health',
    role: 'Senior Software Engineer / Full Stack Engineer',
    period: 'Previous',
    summary: 'Enterprise Order Management, Fulfillment & Business Applications',
    description: [
      'Built and maintained C# and .NET Core services for order processing, fulfillment, inventory, approvals, and operational workflows.',
      'Developed frontend applications using Angular, React, Vue.js, TypeScript, and JavaScript.',
      'Designed REST APIs and event-driven workflows using AWS EventBridge, SQS, SNS, Lambda, and Step Functions.',
      'Worked with SQL Server, DynamoDB, EC2, EKS, Docker, and Kubernetes.',
      'Used Azure DevOps, AWS CodePipeline, and CodeCommit for CI/CD, builds, releases, and deployments.',
      'Used Python for scripting, automation, API-related tasks, and development support.',
      'Used AI/LLM-based development tools for code analysis, debugging, refactoring, test creation, documentation, and repetitive engineering tasks.',
      'Investigated production performance problems including recurring CPU spikes.',
      'Worked on event-processing architecture changes to improve system stability.',
    ],
    highlights: [
      'Enterprise order management and fulfillment',
      'Complex inventory and approvals workflows',
      'Production performance troubleshooting',
      'Event-driven architecture redesign',
      'AngularJS 1.x to Angular modernization',
      'AWS infrastructure and Kubernetes',
    ],
    technologies: [
      'C#',
      '.NET Core',
      'ASP.NET Core',
      'Angular',
      'AngularJS',
      'React',
      'Vue.js',
      'TypeScript',
      'JavaScript',
      'SQL Server',
      'AWS',
      'EventBridge',
      'SQS',
      'SNS',
      'Lambda',
      'Step Functions',
      'EC2',
      'EKS',
      'Kubernetes',
      'Docker',
      'Azure DevOps',
      'CodePipeline',
      'Python',
    ],
    domain: [
      'Order processing',
      'Order fulfillment',
      'Inventory management',
      'Approvals workflows',
      'Customer communication',
      'Operational workflows',
    ]
  },
]
