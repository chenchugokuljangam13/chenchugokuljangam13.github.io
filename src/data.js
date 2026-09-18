// Centralized portfolio content — pulled from the Figma design + existing résumé copy.

import projectAts from './assets/projects/project-ats.png'
import projectHealthcare from './assets/projects/project-healthcare.png'
import projectDemand from './assets/projects/project-demand.png'
import projectCrime from './assets/projects/project-crime.png'

export const LINKS = {
  github: 'https://github.com/chenchugokuljangam13',
  linkedin: 'https://www.linkedin.com/in/chenchugokuljangam13/',
  leetcode: 'https://leetcode.com/u/ChenchuGokulJangam13/',
  email: 'jangamchenchugokul@gmail.com',
  phone: '+918096452188',
  resume: '/Jangam_Chenchu_Gokul_Resume.pdf',
}

export const ABOUT_INTRO =
  "I’m an AI/ML and Generative AI Engineer specializing in building scalable, high-performance AI and backend systems. Experienced in Python, Java, AWS, LLM integrations, RAG, AI agents, MCP, and data engineering, I simplify complex AI and distributed-system requirements into secure, maintainable applications. By combining Generative AI, agentic workflows, automation, and cloud-native architectures, I deliver production-ready solutions that drive measurable technical impact and business efficiency."

export const ABOUT_CARDS = [
  {
    title: 'Generative AI Engineer',
    body: 'Building production-ready LLM applications, RAG systems, AI agents, and intelligent workflows using Python and modern AI technologies.',
    accent: true,
  },
  {
    title: 'Agentic AI & LLM Systems',
    body: 'Designing agentic workflows with MCP, tool calling, prompt engineering, context engineering, and AI orchestration.',
  },
  {
    title: 'Cloud & AI Architect',
    body: 'Engineering scalable AI and backend systems on AWS using serverless, microservices, containers, and automated CI/CD.',
  },
  {
    title: 'Backend & Data Engineer',
    body: 'Building secure, high-performance APIs, data pipelines, and large-scale processing systems using Java, Python, SQL, and PySpark.',
  },
];

export const SKILL_PILLS = [
  'Generative AI',
  'LLMs & RAG',
  'AI Agents',
  'MCP',
  'Prompt Engineering',
  'Context Engineering',
  'Tool Calling',
  'LLM Evaluation',
  'AI Guardrails',
  'Python',
  'Java',
  'TypeScript',
  'AWS',
  'Amazon Bedrock',
  'Serverless',
  'Spring Boot',
  'Microservices',
  'PySpark',
  'SQL / PostgreSQL',
  'Docker',
  'Kubernetes',
  'System Design',
  'CI/CD',
  'AI Security',
];

export const EXPERIENCE_INTRO =
  'From building scalable cloud-native backend systems at AntStack to developing production-oriented AI/ML and Generative AI solutions at HashedIn, I specialize in turning complex engineering and AI challenges into secure, scalable applications.';
export const FEATURED_ROLE = {
  title: 'SDE-I — AI/ML & Data Engineer',
  company: 'HashedIn by Deloitte USI',
  date: 'May 2026 – Present',
  type: 'Full-time',
  points: [
    'Developing AI/ML and Generative AI solutions using Python, LLMs, RAG, and agentic workflows for production-oriented applications.',
    'Building AI-powered applications and integrations, including healthcare-focused workflows, chatbots, and human-in-the-loop clinical assistance systems.',
    'Engineering scalable data and AI pipelines using Python, PySpark, AWS, and cloud-native services to support reliable data processing and intelligent applications.',
    'Designing secure and maintainable AI integrations with prompt engineering, LLM evaluation, guardrails, and controlled data access.',
    'Developing backend services and APIs using Java, Spring Boot, and AWS, integrating AI capabilities into scalable microservice architectures.',
    'Leveraging agentic AI, MCP, tool calling, and automation to streamline development workflows and improve application capabilities.'
  ],
}
export const ROLES = [
  {
    title: 'Backend Engineer - MTS 1',
    company: 'AntStack Technologies',
    date: 'Jul 2025 – May 2026',
    type: 'Full-time',
    points: [
      'Integrated LLMs and AI agents into backend workflows to automate development and operational processes.',
      'Designed and deployed scalable Java/Spring Boot services on AWS using Lambda, API Gateway, DynamoDB, ECS, and RDS.',
    ],
  },
  {
    title: 'Backend Developer Intern',
    type: 'Internship',
    company: 'AntStack Technologies, Bangalore',
    date: 'Apr 2025 – Jun 2025',
    points: [
      'Developed serverless logic using Python and JavaScript to ensure seamless data flow between cloud-native services.',
      'Refined backend performance by optimizing AWS Lambda execution and improving overall system scalability.',
    ],
  },
  {
    title: 'AI/ML Engineer',
    type: 'Internship',
    company: 'Sithafal Technologies, Tirupati',
    date: 'Feb 2025 – Apr 2025',
    points: [
      'Deployed ML pipelines via Azure DevOps, integrating backend components with frontend interfaces for end-to-end delivery.',
      'Managed cloud infrastructure for document processing and version control, ensuring 100% CI/CD reliability.',
    ],
  },
  {
    title: 'Engineer Trainee',
    type: 'Traineeship',
    company: 'Cognizant Technology Solutions, Chennai',
    date: 'Dec 2024 – Jan 2025',
    points: [
      'Completed structured training in software engineering fundamentals, data structures, and full-stack development.',
      'Built hands-on projects and collaborated in agile teams, applying core programming and problem-solving skills.',
    ],
  },
  {
    title: 'AI & ML Virtual Intern',
    type: 'Internship',
    company: 'Google (AICTE) Program',
    date: 'Jan 2024 - Mar 2024',
    points: [
      'Built predictive models using Python and TensorFlow, achieving an average accuracy of 85% across data-driven projects.',
      'Integrated ML models into software systems, focusing on maintaining performance during model deployment and scaling.',
    ],
  },
  {
    title: 'Application Developer Intern',
    type: 'Internship',
    company: 'Young Minds Technology Solutions',
    date: 'April 2023 - June 2023',
    points: [
      'Reduced runtime errors by 30% by debugging and optimizing Core Java codebases following strict OOP principles.',
      'Designed RESTful APIs to facilitate robust client-server communication for enterprise-level applications.',
    ],
  },
]

export const PROJECTS = [
  {
    title: 'Internal Hiring Platform (ATS)',
    image: projectAts,
    tags: ['TypeScript', 'AWS SAM', 'Lambda', 'DynamoDB', 'CI/CD'],
    href: null,
  },
  {
    title: 'AI/ML-Based Demand & Warehouse Stock Prediction System',
    image: projectDemand,
    tags: ['PySpark', 'Databricks', 'XGBoost', 'AWS S3', 'ML'],
    href: null,
  },
  {
    title: 'Healthcare Management & Data Processing Platform',
    image: projectHealthcare,
    tags: ['Java', 'Go', 'Lambda', 'Redshift', 'ECS'],
    href: null,
  },
  {
    title: 'Crime Prediction System Through Machine Learning',
    image: projectCrime,
    tags: ['Python', 'Django', 'SQLite', 'Pandas', 'ML'],
    href: 'https://github.com/chenchugokuljangam13/Crime-Prediction-through-Machine-Learning-Algorithms',
  },
]

export const CERTIFICATIONS = [
  { title: 'NPTEL Certified: Cloud Computing', date: 'Oct 2023', href: 'https://drive.google.com/file/d/1ulDzUGxsPxA3_WwPpquWUarjAP4AxVhq/view?usp=sharing' },
  { title: 'NPTEL Certified: Data Analytics with Python', date: 'Apr 2023', href: 'https://drive.google.com/file/d/1iT_-1dxn_o72Zj6vasGj-KzxjmDfNQ23/view?usp=sharing' },
  { title: 'NPTEL Certified: Programming in Java', date: 'Apr 2024', href: 'https://drive.google.com/file/d/1gjyLN88Vrpnn03XU6tiVrSRaLWoa8am5/view?usp=sharing' },
  { title: 'KodeKloud: GoLang Certification', date: '2023', href: 'https://skillsoft.digitalbadges.skillsoft.com/258fcffc-b629-47f2-a9de-11d64ade317b#gs.4f35wq' },
  { title: 'HackerRank: Software Engineer Certification', date: '2023', href: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3741e816-5c7d-4c46-84c9-65599641cc37.pdf' },
]

export const NAV_LINKS = [
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Works & Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
]
