export interface StackCategory {
  name: string
  items: string[]
}

export const techStack: StackCategory[] = [
  {
    name: 'Languages',
    items: ['C#', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'Java'],
  },
  {
    name: 'Frontend',
    items: ['Angular', 'AngularJS', 'React', 'Vue.js', 'HTML5', 'CSS3', 'TypeScript'],
  },
  {
    name: 'Backend',
    items: ['.NET 8/9', 'ASP.NET Core', '.NET Framework', 'ASP.NET MVC', 'Web API', 'REST', 'GraphQL', 'Node.js'],
  },
  {
    name: 'Cloud & Infrastructure',
    items: ['AWS', 'Lambda', 'EC2', 'EKS', 'S3', 'SQS', 'SNS', 'EventBridge', 'DynamoDB', 'OpenSearch', 'Azure DevOps'],
  },
  {
    name: 'Architecture',
    items: ['Microservices', 'Event-Driven', 'Serverless', 'Distributed Systems', 'Cloud-Native', 'CQRS', 'Clean Architecture', 'Domain-Driven Design'],
  },
  {
    name: 'DevOps & Tools',
    items: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Azure DevOps', 'CodePipeline', 'CodeCommit', 'Git'],
  },
  {
    name: 'Data & Caching',
    items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'OpenSearch', 'Entity Framework Core'],
  },
  {
    name: 'Testing',
    items: ['xUnit', 'Moq', 'FluentAssertions', 'coverlet', 'tSQLt', 'Integration Testing', 'E2E Testing'],
  },
  {
    name: 'AI & Automation',
    items: ['Python', 'LLMs', 'LangGraph', 'AI Agents', 'Tool Calling', 'ReAct', 'Code Analysis', 'Development Automation'],
  },
]

export interface Capability {
  title: string
  description: string
  technologies: string[]
}

export const capabilities: Capability[] = [
  {
    title: 'Enterprise Application Development',
    description: 'Building and modernizing large-scale business applications, multi-tenant SaaS platforms, legacy systems, and enterprise APIs.',
    technologies: ['.NET', 'ASP.NET Core', 'Angular', 'React', 'Vue.js', 'SQL Server', 'Entity Framework'],
  },
  {
    title: 'Distributed Systems & Microservices',
    description: 'Designing and implementing microservices architectures, event-driven processing, asynchronous workflows, and message-driven systems.',
    technologies: ['Microservices', 'AWS SQS/SNS', 'EventBridge', 'Step Functions', 'RabbitMQ', 'Event-Driven Architecture'],
  },
  {
    title: 'Cloud Engineering',
    description: 'AWS infrastructure design, Kubernetes orchestration, containerization, infrastructure-as-code, and production deployment.',
    technologies: ['AWS', 'Lambda', 'EC2', 'EKS', 'Docker', 'Kubernetes', 'Terraform', 'Azure DevOps'],
  },
  {
    title: 'Frontend Engineering',
    description: 'Building responsive single-page applications, modernizing legacy frontends, component architecture, and TypeScript development.',
    technologies: ['Angular', 'React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'SignalR'],
  },
  {
    title: 'Data & Performance',
    description: 'Database design, query optimization, caching strategies, distributed data models, and performance troubleshooting.',
    technologies: ['SQL Server', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'OpenSearch'],
  },
  {
    title: 'AI & Automation',
    description: 'LLM integration, AI agent development, tool calling, workflow automation, and AI-assisted development.',
    technologies: ['Python', 'LangGraph', 'LLMs', 'AI Agents', 'Chainlit', 'SQLAlchemy'],
  },
]
