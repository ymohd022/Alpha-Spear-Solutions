import { Component } from '@angular/core';

@Component({
  selector: 'app-services-overview',
  templateUrl: './services-overview.component.html',
  styleUrl: './services-overview.component.css'
})
export class ServicesOverviewComponent {
  services = [
    {
      id: 'web-development',
      title: 'Web & Cloud Development',
      icon: 'fas fa-code',
      shortDescription: 'Modern, scalable web applications and cloud solutions that drive business growth.',
      features: ['Responsive Design', 'Cloud Integration', 'Performance Optimization', 'Security First'],
      route: '/services/web-development',
      color: 'primary'
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation Solutions',
      icon: 'fas fa-robot',
      shortDescription: 'Intelligent automation and machine learning solutions to streamline operations.',
      features: ['Process Automation', 'Machine Learning', 'Data Analytics', 'Smart Integration'],
      route: '/services/ai-automation',
      color: 'success'
    },
    {
      id: 'erp-systems',
      title: 'ERP/CRM Systems',
      icon: 'fas fa-database',
      shortDescription: 'Comprehensive enterprise resource planning and customer relationship management.',
      features: ['Resource Planning', 'Customer Management', 'Data Integration', 'Workflow Optimization'],
      route: '/services/erp-systems',
      color: 'warning'
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      icon: 'fas fa-laptop-code',
      shortDescription: 'Tailored software solutions designed specifically for your business needs.',
      features: ['Custom Development', 'System Integration', 'Maintenance Support', 'Scalable Architecture'],
      route: '/services/custom-software',
      color: 'info'
    }
  ];

  stats = [
    { number: '500+', label: 'Projects Completed', icon: 'fas fa-project-diagram' },
    { number: '150+', label: 'Happy Clients', icon: 'fas fa-users' },
    { number: '50+', label: 'Team Members', icon: 'fas fa-user-tie' },
    { number: '5+', label: 'Years Experience', icon: 'fas fa-calendar-alt' }
  ];
}
