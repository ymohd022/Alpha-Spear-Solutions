import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
    { name: 'GitHub', icon: 'fab fa-github', url: '#' }
  ];

  quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About Us', url: '#about' },
    { name: 'Services', url: '#services' },
    { name: 'Solutions', url: '#solutions' },
    { name: 'Contact', url: '#contact' }
  ];

  services = [
    { name: 'Web Development', url: '/services/web-development' },
    { name: 'AI Solutions', url: '/services/ai-automation' },
    { name: 'ERP Systems', url: '/services/erp-systems' },
    { name: 'Custom Software', url: '/services/custom-software' },
    { name: 'Cloud Services', url: '/services/web-development' }
  ];

  resources = [
    { name: 'Blog', url: '#blog' },
    { name: 'Case Studies', url: '#case-studies' },
    { name: 'Whitepapers', url: '#whitepapers' },
    { name: 'Webinars', url: '#webinars' },
    { name: 'Documentation', url: '#docs' }
  ];
}