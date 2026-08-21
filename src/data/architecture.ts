export interface ArchitecturePattern {
  id: string
  name: string
  description: string
  characteristics: string[]
  useCases: string[]
  diagram: string
  projects: string[]
}

export const architecturePatterns: ArchitecturePattern[] = [
  {
    id: 'clean-architecture',
    name: 'Clean Architecture',
    description: 'Layered architecture emphasizing separation of concerns and independence from frameworks.',
    characteristics: [
      'Entities (business rules)',
      'Use cases (application-specific logic)',
      'Interface adapters (controllers, gateways)',
      'Frameworks and drivers',
      'Dependency inversion',
      'Testability',
      'Framework independence',
    ],
    useCases: [
      'Enterprise applications',
      'Long-lived systems',
      'High testability requirements',
      'Complex business logic',
    ],
    diagram: `
    ┌─────────────────────────────────┐
    │    UI / Web / External Devices  │
    ├─────────────────────────────────┤
    │  Controllers / Gateways         │
    ├─────────────────────────────────┤
    │  Use Cases / Application Logic  │
    ├─────────────────────────────────┤
    │  Entities / Business Rules      │
    └─────────────────────────────────┘
    `,
    projects: ['Free CRM', 'Warehouse Inventory'],
  },
  {
    id: 'cqrs',
    name: 'CQRS',
    description: 'Command Query Responsibility Segregation separates read and write models for optimized scaling.',
    characteristics: [
      'Separate command model (writes)',
      'Separate query model (reads)',
      'Event sourcing',
      'Read model updates',
      'Optimized data stores',
      'Scalability',
      'Eventual consistency',
    ],
    useCases: [
      'High-traffic systems',
      'Complex querying needs',
      'Event audit trails',
      'Polyglot persistence',
    ],
    diagram: `
    ┌─────────────┐         ┌──────────┐
    │  Commands   │ ───────→│  Write   │
    └─────────────┘         │  Model   │
                            └──────────┘
                                  │
                                  ↓
                            ┌──────────┐
                            │  Events  │
                            └──────────┘
                                  │
                                  ↓
    ┌──────────┐           ┌──────────┐
    │  Queries │←──────────│  Read    │
    └──────────┘           │  Model   │
                            └──────────┘
    `,
    projects: ['Free CRM', 'CloudPallet', 'Warehouse Inventory'],
  },
  {
    id: 'microservices',
    name: 'Microservices',
    description: 'Architecture pattern organizing application as collection of loosely coupled services.',
    characteristics: [
      'Independent services',
      'Service-specific databases',
      'REST/gRPC communication',
      'Distributed deployment',
      'Team ownership',
      'Technology diversity',
      'Fault isolation',
    ],
    useCases: [
      'Large teams',
      'Rapid deployment needs',
      'Heterogeneous tech stacks',
      'Scalability by service',
    ],
    diagram: `
    ┌───────────┐  ┌───────────┐  ┌───────────┐
    │ Product   │  │ Inventory │  │ Order     │
    │ Service   │  │ Service   │  │ Service   │
    │ + DB      │  │ + DB      │  │ + DB      │
    └───────────┘  └───────────┘  └───────────┘
         │              │              │
         └──────────────┬──────────────┘
                        ↓
                   API Gateway
    `,
    projects: ['Drobble', 'Order Management'],
  },
  {
    id: 'event-driven',
    name: 'Event-Driven Architecture',
    description: 'Services communicate through events for loose coupling and asynchronous processing.',
    characteristics: [
      'Event producers',
      'Event consumers',
      'Event bus/streams',
      'Asynchronous processing',
      'Eventual consistency',
      'Scalability',
      'Auditability',
    ],
    useCases: [
      'Real-time systems',
      'Async workflows',
      'Complex event processing',
      'Audit trails',
    ],
    diagram: `
    ┌──────────┐
    │ Producer │
    └─────┬────┘
          │
          ↓
    ┌──────────────────┐
    │  Event Bus       │
    │ (SQS/SNS/Kafka)  │
    └────┬─────────────┘
         │
    ┌────┴────┬────────┬────────┐
    ↓         ↓        ↓        ↓
  Service  Service  Service  Service
    `,
    projects: ['Order Management', 'Symphony LMS', 'Drobble'],
  },
  {
    id: 'serverless',
    name: 'Serverless Architecture',
    description: 'Event-driven computing without managing servers, using managed services.',
    characteristics: [
      'Functions as a service',
      'Event triggers',
      'Auto-scaling',
      'Pay-per-execution',
      'Managed services',
      'Reduced operational overhead',
      'Third-party services',
    ],
    useCases: [
      'Event processing',
      'APIs and webhooks',
      'Scheduled tasks',
      'Batch processing',
    ],
    diagram: `
    ┌────────┐
    │ Events │
    └───┬────┘
        │
        ↓
    ┌─────────────────────┐
    │ AWS Lambda Function │
    │   (Auto-scaling)    │
    └─────────────────────┘
        │
        ↓
    ┌──────────────┐
    │ Managed Data │
    │   Services   │
    └──────────────┘
    `,
    projects: ['Symphony LMS', 'Order Management'],
  },
  {
    id: 'ddd',
    name: 'Domain-Driven Design',
    description: 'Design approach focusing on understanding domain complexity and modeling business logic.',
    characteristics: [
      'Ubiquitous language',
      'Bounded contexts',
      'Entities and value objects',
      'Aggregates',
      'Domain services',
      'Repositories',
      'Business-centric design',
    ],
    useCases: [
      'Complex business domains',
      'Large teams',
      'Long-lived systems',
      'Cross-team communication',
    ],
    diagram: `
    ┌──────────────────────────────┐
    │   Ubiquitous Language        │
    ├──────────────────────────────┤
    │ ┌────────┐  ┌────────┐      │
    │ │Bounded │  │Bounded │      │
    │ │Context │  │Context │      │
    │ │   A    │  │   B    │      │
    │ └────────┘  └────────┘      │
    └──────────────────────────────┘
    `,
    projects: ['CloudPallet', 'Free CRM'],
  },
  {
    id: 'ai-agents',
    name: 'AI Agent Architecture',
    description: 'Architecture for AI agents with reasoning, tool calling, and task automation.',
    characteristics: [
      'LLM integration',
      'Tool calling',
      'Reasoning loops',
      'Memory/context',
      'Execution tracing',
      'Error handling',
      'Business logic integration',
    ],
    useCases: [
      'Customer support',
      'Task automation',
      'Business logic automation',
      'Reasoning-intensive tasks',
    ],
    diagram: `
    ┌────────────────┐
    │ User Request   │
    └────────┬───────┘
             │
             ↓
    ┌────────────────────┐
    │ LLM (Reasoning)    │
    └────────┬───────────┘
             │
             ↓
    ┌────────────────────┐
    │ Tool Selection     │
    └────────┬───────────┘
             │
    ┌────────┴────────────┐
    ↓                     ↓
  Tool A               Tool B
    │                     │
    └────────┬────────────┘
             ↓
    ┌────────────────────┐
    │ Execution Result   │
    └────────────────────┘
    `,
    projects: ['AI Customer Support Agent'],
  },
]
