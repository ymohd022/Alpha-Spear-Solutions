import { Component } from '@angular/core';

@Component({
  selector: 'app-industry-healthcare',
  templateUrl: './industry-healthcare.component.html',
  styleUrl: './industry-healthcare.component.css'
})
export class IndustryHealthcareComponent {
  industryChallenges = [
    {
      icon: "fas fa-shield-alt",
      title: "Data Security & Compliance",
      description: "HIPAA compliance, patient data protection, and secure information exchange",
      impact: "Critical for patient trust and regulatory compliance",
    },
    {
      icon: "fas fa-clock",
      title: "Operational Efficiency",
      description: "Streamlining workflows, reducing wait times, and optimizing resource allocation",
      impact: "Directly affects patient satisfaction and cost management",
    },
    {
      icon: "fas fa-users-cog",
      title: "Interoperability",
      description: "Seamless integration between different healthcare systems and providers",
      impact: "Essential for coordinated patient care",
    },
    {
      icon: "fas fa-chart-line",
      title: "Cost Management",
      description: "Reducing operational costs while maintaining quality of care",
      impact: "Critical for healthcare sustainability",
    },
  ]

  ourSolutions = [
    {
      icon: "fas fa-laptop-medical",
      title: "Electronic Health Records (EHR)",
      description: "Comprehensive patient data management with HIPAA-compliant security",
      features: ["Patient portal integration", "Clinical decision support", "Automated reporting", "Mobile access"],
      benefits: ["50% reduction in paperwork", "30% faster patient processing", "99.9% data accuracy"],
    },
    {
      icon: "fas fa-video",
      title: "Telemedicine Platforms",
      description: "Secure video consultation and remote patient monitoring solutions",
      features: ["HD video conferencing", "Prescription management", "Appointment scheduling", "Insurance integration"],
      benefits: ["200% increase in patient reach", "40% cost reduction", "95% patient satisfaction"],
    },
    {
      icon: "fas fa-brain",
      title: "AI-Powered Diagnostics",
      description: "Machine learning algorithms for medical imaging and diagnostic assistance",
      features: ["Image analysis", "Pattern recognition", "Risk assessment", "Treatment recommendations"],
      benefits: ["85% diagnostic accuracy", "60% faster results", "25% cost savings"],
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Patient Engagement Apps",
      description: "Mobile applications for patient communication and health tracking",
      features: ["Appointment booking", "Medication reminders", "Health tracking", "Secure messaging"],
      benefits: ["70% improved adherence", "50% reduced no-shows", "Enhanced patient experience"],
    },
  ]

  caseStudies = [
    {
      id: "regional-medical-center",
      title: "Regional Medical Center Digital Transformation",
      client: "Regional Medical Center",
      location: "Atlanta, GA",
      size: "500-bed hospital system",
      challenge:
        "The hospital faced challenges with paper-based records, inefficient workflows, and rising operational costs while trying to maintain quality patient care.",
      solution:
        "Implemented comprehensive EHR system with integrated patient portal, automated workflows, and real-time analytics dashboard.",
      results: [
        "30% reduction in operational costs",
        "50% faster patient processing times",
        "95% staff satisfaction with new system",
        "40% improvement in patient satisfaction scores",
      ],
      testimonial: {
        quote:
          "Alpha Spear Solutions transformed our entire operation. The new EHR system has not only improved our efficiency but also enhanced the quality of care we provide to our patients.",
        author: "Dr. Sarah Johnson",
        title: "Chief Medical Officer",
        image: "/placeholder.svg?height=80&width=80",
      },
      image: "/placeholder.svg?height=300&width=500",
      tags: ["EHR Implementation", "Digital Transformation", "Cost Reduction"],
    },
    {
      id: "pediatric-clinic-telemedicine",
      title: "Pediatric Clinic Telemedicine Implementation",
      client: "Children's Health Clinic",
      location: "Denver, CO",
      size: "Multi-location pediatric practice",
      challenge:
        "Need to provide remote consultations during COVID-19 while maintaining quality care and patient engagement.",
      solution:
        "Deployed secure telemedicine platform with integrated scheduling, billing, and patient management features.",
      results: [
        "300% increase in remote consultations",
        "25% reduction in missed appointments",
        "90% patient satisfaction with telehealth",
        "35% increase in practice revenue",
      ],
      testimonial: {
        quote:
          "The telemedicine platform allowed us to continue providing excellent care during challenging times. Our patients love the convenience and we've seen remarkable results.",
        author: "Dr. Michael Chen",
        title: "Practice Owner",
        image: "/placeholder.svg?height=80&width=80",
      },
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Telemedicine", "Patient Engagement", "Revenue Growth"],
    },
  ]

  industryStats = [
    { number: "25+", label: "Healthcare Clients", icon: "fas fa-hospital" },
    { number: "8", label: "Successful Implementations", icon: "fas fa-check-circle" },
    { number: "99.9%", label: "System Uptime", icon: "fas fa-shield-alt" },
    { number: "HIPAA", label: "Compliant Solutions", icon: "fas fa-certificate" },
  ]

  testimonials = [
    {
      quote:
        "Alpha Spear Solutions understands the unique challenges of healthcare technology. Their solutions are not just technically sound but also practical for daily clinical use.",
      author: "Dr. Emily Rodriguez",
      title: "Chief Information Officer",
      company: "Metro Health System",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The implementation was seamless and the ongoing support has been exceptional. Our staff adapted quickly and patient satisfaction has improved significantly.",
      author: "James Wilson",
      title: "IT Director",
      company: "Community Medical Center",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]
}
