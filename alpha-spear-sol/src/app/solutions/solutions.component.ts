import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  industries = [
    {
      id: "healthcare",
      name: "Healthcare",
      icon: "fas fa-heartbeat",
      color: "success",
      description: "Transforming patient care through innovative technology solutions",
      challenges: ["Patient data management", "Regulatory compliance", "Operational efficiency"],
      solutions: ["EHR Systems", "Telemedicine Platforms", "AI Diagnostics"],
      caseStudies: 8,
      clients: 25,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "retail",
      name: "Retail & E-commerce",
      icon: "fas fa-shopping-cart",
      color: "warning",
      description: "Revolutionizing retail experiences with digital transformation",
      challenges: ["Omnichannel integration", "Inventory management", "Customer experience"],
      solutions: ["E-commerce Platforms", "POS Systems", "Customer Analytics"],
      caseStudies: 12,
      clients: 35,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "fintech",
      name: "Financial Technology",
      icon: "fas fa-chart-line",
      color: "info",
      description: "Securing financial futures with cutting-edge fintech solutions",
      challenges: ["Security & compliance", "Real-time processing", "User experience"],
      solutions: ["Payment Gateways", "Trading Platforms", "Risk Management"],
      caseStudies: 6,
      clients: 18,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: "fas fa-industry",
      color: "primary",
      description: "Optimizing production with Industry 4.0 technologies",
      challenges: ["Production optimization", "Quality control", "Supply chain"],
      solutions: ["IoT Integration", "Predictive Maintenance", "ERP Systems"],
      caseStudies: 10,
      clients: 22,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  featuredCaseStudies = [
    {
      id: "regional-medical-center",
      title: "Regional Medical Center Digital Transformation",
      industry: "Healthcare",
      client: "Regional Medical Center",
      challenge: "Streamline patient care and reduce operational costs",
      result: "30% reduction in operational costs, 50% faster patient processing",
      image: "/placeholder.svg?height=200&width=350",
      tags: ["EHR", "Digital Transformation", "Cost Reduction"],
    },
    {
      id: "fashion-retailer-omnichannel",
      title: "Fashion Retailer Omnichannel Platform",
      industry: "Retail",
      client: "StyleMax Fashion",
      challenge: "Integrate online and offline shopping experiences",
      result: "200% increase in online sales, 40% improvement in customer satisfaction",
      image: "/placeholder.svg?height=200&width=350",
      tags: ["Omnichannel", "E-commerce", "Customer Experience"],
    },
    {
      id: "fintech-trading-platform",
      title: "Next-Gen Trading Platform Development",
      industry: "FinTech",
      client: "TradePro Financial",
      challenge: "Build high-frequency trading platform with real-time analytics",
      result: "99.9% uptime, 50ms average response time, $2M+ daily volume",
      image: "/placeholder.svg?height=200&width=350",
      tags: ["Trading Platform", "Real-time Analytics", "High Performance"],
    },
  ]

  companyStats = [
    { number: "500+", label: "Projects Delivered", icon: "fas fa-project-diagram" },
    { number: "150+", label: "Happy Clients", icon: "fas fa-handshake" },
    { number: "25+", label: "Industries Served", icon: "fas fa-industry" },
    { number: "99%", label: "Client Satisfaction", icon: "fas fa-star" },
  ]
}

