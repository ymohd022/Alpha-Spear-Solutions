import { Component, type OnInit } from "@angular/core"
import  { ActivatedRoute } from "@angular/router"

interface CaseStudyType {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  client: any;
  challenge: any;
  process: any;
  results: any;
  testimonial: any;
  visuals: any;
  technologies: string[];
  tags: string[];
  relatedCaseStudies: string[];
}

@Component({
  selector: 'app-case-study-detail',
  templateUrl: './case-study-detail.component.html',
  styleUrl: './case-study-detail.component.css'
})
export class CaseStudyDetailComponent implements OnInit {
  caseStudyId = ""
  caseStudy: any = null

  // Sample case studies data
 caseStudies: Record<string, CaseStudyType> = {
    "regional-medical-center": {
      id: "regional-medical-center",
      title: "Regional Medical Center Digital Transformation",
      subtitle: "Comprehensive EHR Implementation and Workflow Optimization",
      industry: "Healthcare",
      client: {
        name: "Regional Medical Center",
        location: "Atlanta, GA",
        size: "500-bed hospital system",
        employees: "2,500+ staff members",
        description:
          "A leading healthcare provider serving the Atlanta metropolitan area with multiple specialties and emergency services.",
      },
      challenge: {
        title: "Modernizing Legacy Healthcare Systems",
        description:
          "Regional Medical Center was struggling with outdated paper-based record systems, inefficient workflows, and rising operational costs. The hospital needed to modernize their entire infrastructure while maintaining uninterrupted patient care and ensuring HIPAA compliance.",
        painPoints: [
          "Paper-based patient records causing delays and errors",
          "Lack of real-time data access for clinical decision making",
          "Inefficient communication between departments",
          "Rising operational costs due to manual processes",
          "Difficulty in meeting regulatory compliance requirements",
          "Poor patient satisfaction due to long wait times",
        ],
        impact:
          "These challenges were affecting patient care quality, staff productivity, and the hospital's financial performance, with operational costs increasing by 15% annually.",
      },
      process: {
        title: "Strategic Implementation Approach",
        description:
          "Our team developed a comprehensive digital transformation strategy focusing on minimal disruption to patient care while maximizing system efficiency.",
        phases: [
          {
            phase: 1,
            title: "Discovery & Planning",
            duration: "4 weeks",
            activities: [
              "Comprehensive workflow analysis",
              "Staff interviews and requirements gathering",
              "Technical infrastructure assessment",
              "Compliance and security audit",
              "Change management strategy development",
            ],
            deliverables: ["Technical requirements document", "Implementation roadmap", "Risk mitigation plan"],
          },
          {
            phase: 2,
            title: "System Design & Development",
            duration: "8 weeks",
            activities: [
              "Custom EHR system configuration",
              "Integration with existing medical devices",
              "User interface design and testing",
              "Security implementation and testing",
              "Data migration strategy development",
            ],
            deliverables: ["Configured EHR system", "Integration modules", "Security protocols"],
          },
          {
            phase: 3,
            title: "Testing & Training",
            duration: "6 weeks",
            activities: [
              "Comprehensive system testing",
              "User acceptance testing",
              "Staff training programs",
              "Pilot deployment in select departments",
              "Performance optimization",
            ],
            deliverables: ["Tested system", "Training materials", "Go-live readiness assessment"],
          },
          {
            phase: 4,
            title: "Deployment & Support",
            duration: "4 weeks",
            activities: [
              "Phased system rollout",
              "24/7 support during transition",
              "Real-time monitoring and optimization",
              "Issue resolution and system tuning",
              "Post-implementation review",
            ],
            deliverables: ["Fully operational system", "Support documentation", "Performance reports"],
          },
        ],
        methodology:
          "We used an Agile methodology with weekly sprints and continuous stakeholder feedback to ensure the solution met all clinical and operational requirements.",
      },
      results: {
        title: "Transformational Outcomes",
        description:
          "The implementation delivered significant improvements across all key performance indicators, transforming the hospital's operations and patient care delivery.",
        metrics: [
          {
            category: "Operational Efficiency",
            improvements: [
              { metric: "Patient processing time", improvement: "50% faster", icon: "fas fa-clock" },
              { metric: "Administrative costs", improvement: "30% reduction", icon: "fas fa-dollar-sign" },
              { metric: "Staff productivity", improvement: "40% increase", icon: "fas fa-chart-line" },
              { metric: "Error rates", improvement: "75% reduction", icon: "fas fa-shield-alt" },
            ],
          },
          {
            category: "Patient Experience",
            improvements: [
              { metric: "Patient satisfaction", improvement: "40% increase", icon: "fas fa-heart" },
              { metric: "Wait times", improvement: "35% reduction", icon: "fas fa-hourglass-half" },
              { metric: "Appointment scheduling", improvement: "60% faster", icon: "fas fa-calendar" },
              { metric: "Patient portal adoption", improvement: "85% usage rate", icon: "fas fa-mobile-alt" },
            ],
          },
          {
            category: "Clinical Outcomes",
            improvements: [
              { metric: "Diagnostic accuracy", improvement: "25% improvement", icon: "fas fa-stethoscope" },
              { metric: "Treatment response time", improvement: "45% faster", icon: "fas fa-user-md" },
              { metric: "Medication errors", improvement: "80% reduction", icon: "fas fa-pills" },
              { metric: "Readmission rates", improvement: "20% decrease", icon: "fas fa-hospital" },
            ],
          },
        ],
        roi: {
          timeframe: "12 months",
          investment: "$2.5M",
          savings: "$3.8M",
          roiPercentage: "152%",
          paybackPeriod: "8 months",
        },
      },
      testimonial: {
        quote:
          "Alpha Spear Solutions didn't just implement a new system – they transformed our entire approach to patient care. The results have exceeded our expectations, and our staff and patients are both happier with the new workflows. The ROI has been remarkable, and we're already planning our next phase of digital transformation with them.",
        author: "Dr. Sarah Johnson",
        title: "Chief Medical Officer",
        company: "Regional Medical Center",
        image: "/placeholder.svg?height=100&width=100",
        additionalQuotes: [
          {
            quote:
              "The implementation was seamless, and the training provided was exceptional. Our staff adapted quickly to the new system.",
            author: "Michael Rodriguez",
            title: "IT Director",
          },
          {
            quote:
              "Patient satisfaction scores have improved dramatically since the new system went live. The efficiency gains are remarkable.",
            author: "Jennifer Chen",
            title: "Director of Patient Services",
          },
        ],
      },
      visuals: {
        beforeAfter: [
          {
            title: "Before: Paper-Based Workflow",
            description: "Manual processes, paper records, disconnected systems",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "After: Digital Workflow",
            description: "Integrated EHR, automated processes, real-time data access",
            image: "/placeholder.svg?height=300&width=500",
          },
        ],
        architecture: {
          title: "System Architecture Overview",
          description: "Comprehensive integration of EHR, patient portal, and clinical systems",
          image: "/placeholder.svg?height=400&width=600",
        },
        dashboard: {
          title: "Real-Time Analytics Dashboard",
          description: "Live monitoring of key performance indicators and patient flow",
          image: "/placeholder.svg?height=350&width=600",
        },
      },
      technologies: [
        "Electronic Health Records (EHR)",
        "Patient Portal",
        "Clinical Decision Support",
        "Real-time Analytics",
        "Mobile Applications",
        "HIPAA Compliance",
        "Cloud Infrastructure",
        "API Integration",
      ],
      tags: ["Healthcare", "EHR Implementation", "Digital Transformation", "Cost Reduction", "Patient Experience"],
      relatedCaseStudies: ["pediatric-clinic-telemedicine", "fashion-retailer-omnichannel"],
    },
    "fashion-retailer-omnichannel": {
      id: "fashion-retailer-omnichannel",
      title: "Fashion Retailer Omnichannel Platform",
      subtitle: "Unified Shopping Experience Across All Channels",
      industry: "Retail",
      client: {
        name: "StyleMax Fashion",
        location: "Los Angeles, CA",
        size: "50+ retail locations nationwide",
        employees: "1,200+ staff members",
        description:
          "A premium fashion retailer specializing in contemporary clothing and accessories for young professionals.",
      },
      challenge: {
        title: "Disconnected Shopping Experience",
        description:
          "StyleMax Fashion was struggling with siloed online and offline channels, leading to inconsistent customer experiences and lost sales opportunities. Customers couldn't seamlessly transition between channels, and inventory management was fragmented.",
        painPoints: [
          "Separate inventory systems for online and retail stores",
          "Inconsistent pricing and promotions across channels",
          "No unified customer profile or purchase history",
          "Limited buy-online-pickup-in-store capabilities",
          "Poor mobile shopping experience",
          "Inefficient inventory allocation and forecasting",
        ],
        impact:
          "These issues resulted in 25% cart abandonment rate online, frequent stockouts in popular items, and declining customer satisfaction scores.",
      },
      process: {
        title: "Omnichannel Integration Strategy",
        description:
          "We developed a comprehensive omnichannel platform that unified all customer touchpoints and created a seamless shopping experience.",
        phases: [
          {
            phase: 1,
            title: "Customer Journey Analysis",
            duration: "3 weeks",
            activities: [
              "Customer behavior analysis across channels",
              "Competitive benchmarking",
              "Technology stack assessment",
              "Integration requirements gathering",
              "User experience research",
            ],
            deliverables: ["Customer journey maps", "Technical architecture plan", "UX/UI wireframes"],
          },
          {
            phase: 2,
            title: "Platform Development",
            duration: "12 weeks",
            activities: [
              "Unified e-commerce platform development",
              "Mobile app creation",
              "POS system integration",
              "Inventory management system",
              "Customer data platform implementation",
            ],
            deliverables: ["Omnichannel platform", "Mobile application", "Integrated POS system"],
          },
          {
            phase: 3,
            title: "Testing & Optimization",
            duration: "4 weeks",
            activities: [
              "Cross-channel functionality testing",
              "Performance optimization",
              "User acceptance testing",
              "Staff training programs",
              "Pilot store deployment",
            ],
            deliverables: ["Tested platform", "Training materials", "Performance benchmarks"],
          },
          {
            phase: 4,
            title: "Rollout & Support",
            duration: "6 weeks",
            activities: [
              "Phased rollout to all locations",
              "Real-time monitoring and support",
              "Performance tracking and optimization",
              "Customer feedback integration",
              "Continuous improvement implementation",
            ],
            deliverables: ["Fully deployed system", "Support processes", "Performance analytics"],
          },
        ],
        methodology:
          "We used a customer-centric design approach with continuous testing and feedback loops to ensure the platform met both business and customer needs.",
      },
      results: {
        title: "Exceptional Business Growth",
        description:
          "The omnichannel platform delivered outstanding results, significantly improving customer experience and driving substantial revenue growth.",
        metrics: [
          {
            category: "Sales Performance",
            improvements: [
              { metric: "Online sales", improvement: "200% increase", icon: "fas fa-shopping-cart" },
              { metric: "Overall revenue", improvement: "45% growth", icon: "fas fa-chart-line" },
              { metric: "Average order value", improvement: "35% increase", icon: "fas fa-dollar-sign" },
              { metric: "Cross-channel sales", improvement: "150% boost", icon: "fas fa-exchange-alt" },
            ],
          },
          {
            category: "Customer Experience",
            improvements: [
              { metric: "Customer satisfaction", improvement: "40% increase", icon: "fas fa-smile" },
              { metric: "Cart abandonment", improvement: "60% reduction", icon: "fas fa-shopping-basket" },
              { metric: "Mobile conversion", improvement: "180% improvement", icon: "fas fa-mobile-alt" },
              { metric: "Customer retention", improvement: "50% increase", icon: "fas fa-heart" },
            ],
          },
          {
            category: "Operational Efficiency",
            improvements: [
              { metric: "Inventory turnover", improvement: "30% faster", icon: "fas fa-boxes" },
              { metric: "Stockout incidents", improvement: "70% reduction", icon: "fas fa-warehouse" },
              { metric: "Order fulfillment", improvement: "50% faster", icon: "fas fa-shipping-fast" },
              { metric: "Staff productivity", improvement: "25% increase", icon: "fas fa-users" },
            ],
          },
        ],
        roi: {
          timeframe: "18 months",
          investment: "$1.8M",
          savings: "$4.2M",
          roiPercentage: "233%",
          paybackPeriod: "6 months",
        },
      },
      testimonial: {
        quote:
          "The omnichannel platform has completely transformed our business. Our customers now have a seamless experience whether they're shopping online, on mobile, or in our stores. The results speak for themselves – we've seen unprecedented growth in both online and offline sales.",
        author: "Amanda Thompson",
        title: "Chief Executive Officer",
        company: "StyleMax Fashion",
        image: "/placeholder.svg?height=100&width=100",
        additionalQuotes: [
          {
            quote:
              "The unified inventory system has eliminated our stockout problems and improved our forecasting accuracy significantly.",
            author: "David Park",
            title: "Operations Director",
          },
          {
            quote:
              "Customer feedback has been overwhelmingly positive. They love being able to start shopping on their phone and complete the purchase in-store.",
            author: "Lisa Martinez",
            title: "Customer Experience Manager",
          },
        ],
      },
      visuals: {
        beforeAfter: [
          {
            title: "Before: Siloed Channels",
            description: "Disconnected online and offline experiences, separate inventory systems",
            image: "/placeholder.svg?height=300&width=500",
          },
          {
            title: "After: Unified Omnichannel",
            description: "Seamless cross-channel experience, unified inventory and customer data",
            image: "/placeholder.svg?height=300&width=500",
          },
        ],
        architecture: {
          title: "Omnichannel Platform Architecture",
          description: "Integrated e-commerce, mobile, and POS systems with unified data layer",
          image: "/placeholder.svg?height=400&width=600",
        },
        dashboard: {
          title: "Real-Time Sales Dashboard",
          description: "Comprehensive view of sales performance across all channels",
          image: "/placeholder.svg?height=350&width=600",
        },
      },
      technologies: [
        "E-commerce Platform",
        "Mobile Application",
        "POS Integration",
        "Inventory Management",
        "Customer Data Platform",
        "Analytics & Reporting",
        "Cloud Infrastructure",
        "API Gateway",
      ],
      tags: ["Retail", "Omnichannel", "E-commerce", "Mobile App", "Customer Experience", "Revenue Growth"],
      relatedCaseStudies: ["regional-medical-center", "fintech-trading-platform"],
    },
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.caseStudyId = params["id"]
      this.caseStudy = this.caseStudies[this.caseStudyId]
    })
  }

  getRelatedCaseStudies() {
    if (!this.caseStudy?.relatedCaseStudies) return []
    return this.caseStudy.relatedCaseStudies.map((id: string) => this.caseStudies[id]).filter(Boolean)
  }
}
