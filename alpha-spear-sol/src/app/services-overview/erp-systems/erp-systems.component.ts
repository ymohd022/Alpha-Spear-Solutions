import { Component } from '@angular/core';

@Component({
  selector: 'app-erp-systems',
  templateUrl: './erp-systems.component.html',
  styleUrl: './erp-systems.component.css'
})
export class ErpSystemsComponent {
  benefits = [
    {
      icon: 'fas fa-sync-alt',
      title: 'Streamlined Operations',
      description: 'Integrate all business processes into a single, unified system for maximum efficiency'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Real-time Analytics',
      description: 'Access real-time data and insights to make informed business decisions quickly'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Cost Reduction',
      description: 'Reduce operational costs by eliminating redundancies and automating processes'
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Enhanced Collaboration',
      description: 'Improve team collaboration with centralized data and communication tools'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Data Security',
      description: 'Enterprise-grade security measures to protect sensitive business information'
    },
    {
      icon: 'fas fa-expand-arrows-alt',
      title: 'Scalable Solution',
      description: 'Grow your system as your business expands without major overhauls'
    }
  ];

  processSteps = [
    {
      step: 1,
      title: 'Business Analysis',
      description: 'Comprehensive analysis of your current processes, workflows, and requirements',
      duration: '2-3 weeks',
      deliverables: ['Process Mapping', 'Requirements Analysis', 'Gap Assessment', 'ROI Projection']
    },
    {
      step: 2,
      title: 'System Design',
      description: 'Design the ERP/CRM architecture tailored to your business needs',
      duration: '3-4 weeks',
      deliverables: ['System Architecture', 'Database Design', 'Integration Plan', 'User Interface Mockups']
    },
    {
      step: 3,
      title: 'Development & Customization',
      description: 'Build and customize the system with your specific business logic and workflows',
      duration: '8-16 weeks',
      deliverables: ['Core Modules', 'Custom Features', 'Integration APIs', 'Reporting System']
    },
    {
      step: 4,
      title: 'Testing & Validation',
      description: 'Rigorous testing including user acceptance testing and performance optimization',
      duration: '3-4 weeks',
      deliverables: ['Test Results', 'Performance Reports', 'Security Audit', 'User Feedback']
    },
    {
      step: 5,
      title: 'Deployment & Training',
      description: 'Deploy the system and provide comprehensive training to your team',
      duration: '2-3 weeks',
      deliverables: ['Production Deployment', 'User Training', 'Documentation', 'Support Setup']
    }
  ];

  solutions = [
    {
      title: 'Manufacturing ERP',
      description: 'Complete manufacturing resource planning with inventory, production, and quality management',
      features: ['Production Planning', 'Inventory Management', 'Quality Control', 'Supply Chain', 'Cost Tracking', 'Compliance Management'],
      icon: 'fas fa-industry',
      color: 'primary',
      caseStudy: 'Reduced production costs by 25% and improved efficiency by 40%'
    },
    {
      title: 'Retail Management System',
      description: 'Comprehensive retail solution with POS, inventory, and customer management',
      features: ['Point of Sale', 'Inventory Tracking', 'Customer Database', 'Sales Analytics', 'Multi-location Support', 'E-commerce Integration'],
      icon: 'fas fa-store',
      color: 'success',
      caseStudy: 'Increased sales by 35% and improved customer satisfaction by 50%'
    },
    {
      title: 'Healthcare Management',
      description: 'Integrated healthcare system for patient management, scheduling, and billing',
      features: ['Patient Records', 'Appointment Scheduling', 'Billing & Insurance', 'Prescription Management', 'Lab Integration', 'Compliance Tracking'],
      icon: 'fas fa-heartbeat',
      color: 'danger',
      caseStudy: 'Improved patient care efficiency by 60% and reduced administrative costs by 30%'
    },
    {
      title: 'Financial Services CRM',
      description: 'Specialized CRM for financial institutions with compliance and risk management',
      features: ['Client Portfolio', 'Risk Assessment', 'Compliance Tracking', 'Document Management', 'Reporting Tools', 'Audit Trail'],
      icon: 'fas fa-university',
      color: 'warning',
      caseStudy: 'Enhanced client relationships and improved compliance by 45%'
    }
  ];

  modules = [
    { name: 'Financial Management', icon: 'fas fa-calculator', description: 'Accounting, budgeting, and financial reporting' },
    { name: 'Human Resources', icon: 'fas fa-users', description: 'Employee management, payroll, and performance tracking' },
    { name: 'Customer Relationship', icon: 'fas fa-handshake', description: 'Lead management, sales tracking, and customer service' },
    { name: 'Inventory Management', icon: 'fas fa-boxes', description: 'Stock control, procurement, and warehouse management' },
    { name: 'Project Management', icon: 'fas fa-tasks', description: 'Project planning, resource allocation, and progress tracking' },
    { name: 'Reporting & Analytics', icon: 'fas fa-chart-bar', description: 'Business intelligence and data visualization' }
  ];
}