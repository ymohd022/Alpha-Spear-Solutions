import { Component } from "@angular/core"
import  { HttpClient } from "@angular/common/http"

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  industry: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  preferredContact: string;
  newsletter: boolean;
}

interface QuoteForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  projectDescription: string;
  requirements: string;
  budget: string;
  timeline: string;
  additionalInfo: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  activeTab = "contact"
  isSubmitting = false

  contactForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    preferredContact: "email",
    newsletter: false,
  }

  quoteForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    projectDescription: "",
    requirements: "",
    budget: "",
    timeline: "",
    additionalInfo: "",
  }

  industries = [
    "Healthcare",
    "Retail & E-commerce",
    "Financial Services",
    "Manufacturing",
    "Education",
    "Government",
    "Non-profit",
    "Technology",
    "Other",
  ]

  projectTypes = [
    "Web Development",
    "Mobile App Development",
    "ERP/CRM System",
    "AI & Automation",
    "Cloud Migration",
    "Custom Software",
    "Digital Transformation",
    "Consulting",
    "Other",
  ]

  budgetRanges = [
    "Under $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000+",
    "To be discussed",
  ]

  timelines = ["ASAP", "1-3 months", "3-6 months", "6-12 months", "12+ months", "Flexible"]

  offices = [
    {
      id: "headquarters",
      name: "Headquarters",
      address: "123 Innovation Drive, Suite 500",
      city: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "info@alphaspear.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM PST",
      image: "/placeholder.svg?height=200&width=300",
      coordinates: { lat: 37.7749, lng: -122.4194 },
    },
    {
      id: "east-coast",
      name: "East Coast Office",
      address: "456 Business Plaza, Floor 12",
      city: "New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@alphaspear.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      image: "/placeholder.svg?height=200&width=300",
      coordinates: { lat: 40.7128, lng: -74.006 },
    },
    {
      id: "development-center",
      name: "Development Center",
      address: "789 Tech Park, Building C",
      city: "Austin, TX 78701",
      phone: "+1 (555) 456-7890",
      email: "austin@alphaspear.com",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM CST",
      image: "/placeholder.svg?height=200&width=300",
      coordinates: { lat: 30.2672, lng: -97.7431 },
    },
  ]

  contactMethods = [
    {
      icon: "fas fa-phone",
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9 AM - 6 PM PST",
    },
    {
      icon: "fas fa-envelope",
      title: "Email Support",
      description: "Get detailed responses to your inquiries",
      contact: "info@alphaspear.com",
      availability: "24/7 - Response within 4 hours",
    },
    {
      icon: "fas fa-comments",
      title: "Live Chat",
      description: "Instant support for quick questions",
      contact: "Available on website",
      availability: "Mon-Fri, 9 AM - 6 PM PST",
    },
    {
      icon: "fas fa-calendar",
      title: "Schedule Meeting",
      description: "Book a consultation with our team",
      contact: "Online booking available",
      availability: "Flexible scheduling",
    },
  ]

  faqs = [
    {
      question: "What types of projects do you work on?",
      answer:
        "We specialize in web development, mobile applications, ERP/CRM systems, AI automation, cloud solutions, and custom software development across various industries.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites may take 4-8 weeks, while enterprise solutions can take 6-12 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an Agile methodology with regular client communication, iterative development, and continuous testing to ensure quality and alignment with your requirements.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "We can integrate with your existing team, provide staff augmentation, or work as an independent development partner based on your needs.",
    },
    {
      question: "Do you sign NDAs and ensure data security?",
      answer:
        "Yes, we prioritize data security and confidentiality. We're happy to sign NDAs and follow strict security protocols to protect your sensitive information.",
    },
  ]

  constructor(private http: HttpClient) {}

  setActiveTab(tab: string) {
    this.activeTab = tab
  }

  async submitContactForm() {
    if (!this.validateContactForm()) return

    this.isSubmitting = true
    try {
      const response = await this.http.post("http://localhost:3000/api/contact", this.contactForm).toPromise()

      alert("Thank you for your message! We'll get back to you within 24 hours.")
      this.resetContactForm()
    } catch (error) {
      console.error("Error submitting contact form:", error)
      alert("There was an error submitting your message. Please try again.")
    } finally {
      this.isSubmitting = false
    }
  }

  async submitQuoteForm() {
    if (!this.validateQuoteForm()) return

    this.isSubmitting = true
    try {
      const response = await this.http.post("http://localhost:3000/api/quote", this.quoteForm).toPromise()

      alert(
        "Thank you for your quote request! Our team will review your requirements and get back to you within 24 hours.",
      )
      this.resetQuoteForm()
    } catch (error) {
      console.error("Error submitting quote form:", error)
      alert("There was an error submitting your quote request. Please try again.")
    } finally {
      this.isSubmitting = false
    }
  }

  validateContactForm(): boolean {
    const required: (keyof ContactForm)[] = ["firstName", "lastName", "email", "message"];
    for (const field of required) {
      if (!this.contactForm[field]) {
        alert(`Please fill in the ${field.replace(/([A-Z])/g, " $1").toLowerCase()} field.`);
        return false;
      }
    }

    if (!this.isValidEmail(this.contactForm.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  }

 validateQuoteForm(): boolean {
    const required: (keyof QuoteForm)[] = [
      "firstName",
      "lastName",
      "email",
      "company",
      "projectType",
      "projectDescription",
    ];
    for (const field of required) {
      if (!this.quoteForm[field]) {
        alert(`Please fill in the ${field.replace(/([A-Z])/g, " $1").toLowerCase()} field.`);
        return false;
      }
    }

    if (!this.isValidEmail(this.quoteForm.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  resetContactForm() {
    this.contactForm = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      industry: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
      preferredContact: "email",
      newsletter: false,
    }
  }

  resetQuoteForm() {
    this.quoteForm = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      projectDescription: "",
      requirements: "",
      budget: "",
      timeline: "",
      additionalInfo: "",
    }
  }

  openMap(office: any) {
    const url = `https://www.google.com/maps/search/?api=1&query=${office.coordinates.lat},${office.coordinates.lng}`
    window.open(url, "_blank")
  }
}

