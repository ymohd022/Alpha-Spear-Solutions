import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-automation',
  templateUrl: './ai-automation.component.html',
  styleUrl: './ai-automation.component.css'
})
export class AiAutomationComponent {
  benefits = [
    {
      icon: 'fas fa-chart-line',
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to boost productivity by up to 80%'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and optimization'
    },
    {
      icon: 'fas fa-brain',
      title: 'Smart Decision Making',
      description: 'Leverage AI insights for data-driven business decisions'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Error Reduction',
      description: 'Minimize human errors with precise automated processes'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Assessment & Analysis',
      description: 'We analyze your current processes to identify automation opportunities',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'AI Strategy Development',
      description: 'Create a comprehensive AI implementation roadmap tailored to your needs',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Solution Development',
      description: 'Build and train AI models and automation workflows',
      duration: '4-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Rigorous testing and fine-tuning for optimal performance',
      duration: '2-3 weeks'
    },
    {
      step: 5,
      title: 'Deployment & Training',
      description: 'Deploy solutions and train your team for seamless adoption',
      duration: '1-2 weeks'
    }
  ];

  solutions = [
    {
      title: 'Healthcare Automation',
      description: 'Streamline patient data management, appointment scheduling, and diagnostic processes',
      features: ['Patient Record Automation', 'Appointment Scheduling', 'Diagnostic Assistance', 'Compliance Monitoring'],
      icon: 'fas fa-heartbeat',
      color: 'success'
    },
    {
      title: 'Financial Services AI',
      description: 'Enhance fraud detection, risk assessment, and customer service automation',
      features: ['Fraud Detection', 'Risk Assessment', 'Automated Trading', 'Customer Support Bots'],
      icon: 'fas fa-chart-line',
      color: 'primary'
    },
    {
      title: 'Manufacturing Intelligence',
      description: 'Optimize production lines, quality control, and predictive maintenance',
      features: ['Production Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain Management'],
      icon: 'fas fa-industry',
      color: 'warning'
    },
    {
      title: 'Retail Personalization',
      description: 'Deliver personalized shopping experiences and inventory optimization',
      features: ['Personalized Recommendations', 'Inventory Management', 'Price Optimization', 'Customer Analytics'],
      icon: 'fas fa-shopping-cart',
      color: 'info'
    }
  ];

  technologies = [
    { name: 'Machine Learning', icon: 'fas fa-brain' },
    { name: 'Natural Language Processing', icon: 'fas fa-comments' },
    { name: 'Computer Vision', icon: 'fas fa-eye' },
    { name: 'Robotic Process Automation', icon: 'fas fa-robot' },
    { name: 'Deep Learning', icon: 'fas fa-network-wired' },
    { name: 'Predictive Analytics', icon: 'fas fa-chart-bar' }
  ];
}
