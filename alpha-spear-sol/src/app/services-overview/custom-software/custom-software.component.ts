import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-software',
  templateUrl: './custom-software.component.html',
  styleUrl: './custom-software.component.css'
})
export class CustomSoftwareComponent {
  benefits = [
    {
      icon: 'fas fa-puzzle-piece',
      title: 'Perfect Fit',
      description: 'Software designed specifically for your unique business processes and requirements'
    },
    {
      icon: 'fas fa-expand-arrows-alt',
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, easily accommodating future expansion needs'
    },
    {
      icon: 'fas fa-link',
      title: 'Seamless Integration',
      description: 'Integrates perfectly with your existing systems and third-party applications'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Optimized Performance',
      description: 'Custom-built for maximum efficiency and performance in your specific environment'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Enhanced Security',
      description: 'Tailored security measures that address your specific industry and compliance needs'
    },
    {
      icon: 'fas fa-headset',
      title: 'Dedicated Support',
      description: 'Ongoing support and maintenance from the team that built your software'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'In-depth analysis of your business needs, current systems, and future goals',
      duration: '2-4 weeks',
      deliverables: ['Business Requirements', 'Technical Specifications', 'Project Roadmap', 'Resource Planning']
    },
    {
      step: 2,
      title: 'Architecture & Design',
      description: 'Create the software architecture, database design, and user interface mockups',
      duration: '3-5 weeks',
      deliverables: ['System Architecture', 'Database Schema', 'UI/UX Designs', 'API Documentation']
    },
    {
      step: 3,
      title: 'Development & Integration',
      description: 'Build the software using agile methodology with regular progress updates',
      duration: '8-20 weeks',
      deliverables: ['Core Application', 'Feature Modules', 'System Integrations', 'Admin Panel']
    },
    {
      step: 4,
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing including functionality, performance, and security testing',
      duration: '3-5 weeks',
      deliverables: ['Test Reports', 'Bug Fixes', 'Performance Optimization', 'Security Validation']
    },
    {
      step: 5,
      title: 'Deployment & Support',
      description: 'Deploy to production environment and provide training and ongoing support',
      duration: '2-3 weeks',
      deliverables: ['Production Deployment', 'User Training', 'Documentation', 'Support Plan']
    }
  ];

  solutions = [
    {
      title: 'Business Process Automation',
      description: 'Automate complex business workflows and processes to improve efficiency and reduce errors',
      features: ['Workflow Designer', 'Task Automation', 'Approval Processes', 'Notification System', 'Audit Trail', 'Performance Analytics'],
      icon: 'fas fa-cogs',
      color: 'primary',
      caseStudy: 'Reduced manual processing time by 75% for logistics company'
    },
    {
      title: 'Data Management Systems',
      description: 'Custom databases and data management solutions for complex data requirements',
      features: ['Custom Database Design', 'Data Import/Export', 'Advanced Search', 'Reporting Tools', 'Data Visualization', 'Backup & Recovery'],
      icon: 'fas fa-database',
      color: 'info',
      caseStudy: 'Improved data accuracy by 95% and reduced retrieval time by 80%'
    },
    {
      title: 'Integration Platforms',
      description: 'Connect disparate systems and applications for seamless data flow and operations',
      features: ['API Development', 'System Connectors', 'Data Synchronization', 'Real-time Updates', 'Error Handling', 'Monitoring Dashboard'],
      icon: 'fas fa-plug',
      color: 'success',
      caseStudy: 'Connected 12 different systems, eliminating 90% of manual data entry'
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for field operations and customer engagement',
      features: ['Cross-platform Development', 'Offline Functionality', 'Push Notifications', 'GPS Integration', 'Camera & Scanner', 'Cloud Sync'],
      icon: 'fas fa-mobile-alt',
      color: 'warning',
      caseStudy: 'Increased field productivity by 50% with custom mobile solution'
    }
  ];

  technologies = [
    { name: '.NET Core', icon: 'fas fa-code', category: 'Backend' },
    { name: 'Java Spring', icon: 'fab fa-java', category: 'Backend' },
    { name: 'Python Django', icon: 'fab fa-python', category: 'Backend' },
    { name: 'React Native', icon: 'fab fa-react', category: 'Mobile' },
    { name: 'Flutter', icon: 'fas fa-mobile-alt', category: 'Mobile' },
    { name: 'PostgreSQL', icon: 'fas fa-database', category: 'Database' },
    { name: 'MongoDB', icon: 'fas fa-leaf', category: 'Database' },
    { name: 'Docker', icon: 'fab fa-docker', category: 'DevOps' }
  ];

  industries = [
    { name: 'Healthcare', icon: 'fas fa-heartbeat', description: 'HIPAA-compliant solutions for healthcare providers' },
    { name: 'Finance', icon: 'fas fa-university', description: 'Secure financial applications with regulatory compliance' },
    { name: 'Manufacturing', icon: 'fas fa-industry', description: 'Production management and quality control systems' },
    { name: 'Education', icon: 'fas fa-graduation-cap', description: 'Learning management and student information systems' },
    { name: 'Logistics', icon: 'fas fa-truck', description: 'Supply chain and fleet management solutions' },
    { name: 'Retail', icon: 'fas fa-store', description: 'Point of sale and inventory management systems' }
  ];
}