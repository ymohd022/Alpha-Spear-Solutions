import { Component } from '@angular/core';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrl: './web-development.component.css'
})
export class WebDevelopmentComponent {
  benefits = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring optimal experience across all devices and screen sizes'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'High Performance',
      description: 'Optimized code and architecture for lightning-fast loading times and smooth user experience'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Integration',
      description: 'Seamless cloud deployment with scalability, reliability, and cost-effectiveness'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your data and user information'
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to improve your search engine rankings and visibility'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Easy Maintenance',
      description: 'Clean, well-documented code that is easy to maintain and update over time'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Requirements Analysis',
      description: 'Deep dive into your business needs, target audience, and technical requirements',
      duration: '1-2 weeks',
      deliverables: ['Requirements Document', 'Technical Specifications', 'Project Timeline']
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes for user validation',
      duration: '2-3 weeks',
      deliverables: ['UI/UX Designs', 'Interactive Prototypes', 'Design System']
    },
    {
      step: 3,
      title: 'Development & Integration',
      description: 'Build the application using modern technologies and integrate with required systems',
      duration: '6-12 weeks',
      deliverables: ['Frontend Development', 'Backend APIs', 'Database Design', 'Third-party Integrations']
    },
    {
      step: 4,
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing including functionality, performance, and security testing',
      duration: '2-3 weeks',
      deliverables: ['Test Reports', 'Performance Analysis', 'Security Audit']
    },
    {
      step: 5,
      title: 'Deployment & Launch',
      description: 'Deploy to production environment with monitoring and support setup',
      duration: '1-2 weeks',
      deliverables: ['Production Deployment', 'Monitoring Setup', 'Documentation', 'Training']
    }
  ];

  solutions = [
    {
      title: 'E-Commerce Platforms',
      description: 'Comprehensive online stores with payment integration, inventory management, and analytics',
      features: ['Shopping Cart & Checkout', 'Payment Gateway Integration', 'Inventory Management', 'Order Tracking', 'Customer Analytics', 'Mobile Commerce'],
      icon: 'fas fa-shopping-cart',
      color: 'primary',
      caseStudy: 'Increased online sales by 300% for retail client'
    },
    {
      title: 'Corporate Websites',
      description: 'Professional business websites that establish credibility and drive conversions',
      features: ['Professional Design', 'Content Management', 'Contact Forms', 'SEO Optimization', 'Analytics Integration', 'Multi-language Support'],
      icon: 'fas fa-building',
      color: 'success',
      caseStudy: 'Improved lead generation by 250% for B2B company'
    },
    {
      title: 'Web Applications',
      description: 'Custom web applications tailored to your specific business processes and workflows',
      features: ['Custom Functionality', 'User Management', 'Real-time Updates', 'API Integration', 'Data Visualization', 'Workflow Automation'],
      icon: 'fas fa-laptop-code',
      color: 'info',
      caseStudy: 'Streamlined operations reducing processing time by 60%'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud-based applications with high availability and performance',
      features: ['Auto-scaling', 'Load Balancing', 'Backup & Recovery', 'Global CDN', 'Monitoring & Alerts', 'Cost Optimization'],
      icon: 'fas fa-cloud',
      color: 'warning',
      caseStudy: 'Reduced infrastructure costs by 40% while improving performance'
    }
  ];

  technologies = [
    { name: 'React.js', icon: 'fab fa-react', category: 'Frontend' },
    { name: 'Angular', icon: 'fab fa-angular', category: 'Frontend' },
    { name: 'Vue.js', icon: 'fab fa-vuejs', category: 'Frontend' },
    { name: 'Node.js', icon: 'fab fa-node-js', category: 'Backend' },
    { name: 'Python', icon: 'fab fa-python', category: 'Backend' },
    { name: 'AWS', icon: 'fab fa-aws', category: 'Cloud' },
    { name: 'Docker', icon: 'fab fa-docker', category: 'DevOps' },
    { name: 'MongoDB', icon: 'fas fa-database', category: 'Database' }
  ];
}
