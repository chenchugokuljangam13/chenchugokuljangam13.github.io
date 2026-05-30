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
  resume: '/resume.pdf',
}

export const ABOUT_INTRO =
  "I'm a Backend Engineer specializing in scalable, high-performance systems. Expert in Python, Java, and cloud-native architectures, I simplify complex systems into secure, maintainable applications. By leveraging AI, automation, and serverless solutions, to deliver robust backend environments that drive measurable technical impact and business efficiency."

export const ABOUT_CARDS = [
  {
    title: 'Scalable Backend Developer',
    body: 'Architecting high-traffic microservices and event-driven systems using Python, Java, and Go.',
    accent: true,
  },
  {
    title: 'Cloud & Infrastructure Architect',
    body: 'Designing serverless and containerized environments (AWS, Docker, K8s) with automated CI/CD.',
  },
  {
    title: 'Data & AI Solutions Engineer',
    body: 'Building intelligent pipelines, RAG implementations, and large-scale processing with PySpark.',
  },
  {
    title: 'System Design Specialist',
    body: 'Optimizing performance through advanced DSA, reliability patterns, and secure database tuning.',
  },
]

export const SKILL_PILLS = [
  'Python',
  'Java',
  'Go',
  'TypeScript',
  'AWS',
  'Docker',
  'Kubernetes',
  'PySpark',
  'Spring Boot',
  'DynamoDB',
  'PostgreSQL',
  'Serverless',
  'RAG / LLMs',
  'CI/CD',
]

export const EXPERIENCE_INTRO =
  'From architecting high-traffic serverless systems at AntStack to developing AI-driven solutions, I specialize in building robust backend environments that scale with business needs.'

export const FEATURED_ROLE = {
  title: 'Backend Engineer - MTS 1',
  company: 'AntStack Technologies',
  date: 'Jul 2025 – Present',
  type: 'Full-time',
  points: [
    'Architected serverless applications on AWS using Lambda, API Gateway, and DynamoDB to handle large-scale integrations.',
    'Engineered microservices with Spring Boot and Go, deploying to ECS, RDS, and Redshift for high-performance data processing.',
    'Optimized DevOps workflows by building custom GitHub Actions and automating secret management via GitHub APIs.',
    'Implemented AI-driven automation using LLMs and agents to streamline internal development and operational efficiency.',
  ],
}

export const ROLES = [
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
  { label: 'Certifications', href: '#certifications' },
  { label: 'Works & Projects', href: '#projects' },
]
