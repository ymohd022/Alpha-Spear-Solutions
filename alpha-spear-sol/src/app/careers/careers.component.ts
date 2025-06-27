import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  activeTab = "positions"
  selectedDepartment = "all"
  selectedLocation = "all"
  showApplicationForm = false
  selectedPosition: any = null

  departments = [
    { id: "all", name: "All Departments", count: 12 },
    { id: "engineering", name: "Engineering", count: 5 },
    { id: "design", name: "Design & UX", count: 2 },
    { id: "sales", name: "Sales & Marketing", count: 3 },
    { id: "operations", name: "Operations", count: 2 },
  ]

  locations = [
    { id: "all", name: "All Locations", count: 12 },
    { id: "remote", name: "Remote", count: 8 },
    { id: "new-york", name: "New York, NY", count: 2 },
    { id: "san-francisco", name: "San Francisco, CA", count: 2 },
  ]

  openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "engineering",
      location: "remote",
      type: "Full-time",
      experience: "5+ years",
      summary:
        "Join our engineering team to build scalable web applications using modern technologies. Lead development of enterprise-grade solutions.",
      responsibilities: [
        "Design and develop scalable web applications",
        "Collaborate with cross-functional teams",
        "Mentor junior developers",
        "Participate in code reviews and architecture decisions",
      ],
      qualifications: [
        "5+ years of full-stack development experience",
        "Proficiency in React, Node.js, and cloud platforms",
        "Experience with microservices architecture",
        "Strong problem-solving and communication skills",
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"],
      posted: "2024-01-15",
      featured: true,
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "design",
      location: "new-york",
      type: "Full-time",
      experience: "3+ years",
      summary:
        "Create intuitive and beautiful user experiences for our enterprise software solutions. Work closely with product and engineering teams.",
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design systems",
        "Collaborate with developers on implementation",
      ],
      qualifications: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, and Adobe Creative Suite",
        "Strong portfolio demonstrating design thinking",
        "Experience with design systems and accessibility",
      ],
      benefits: ["Competitive salary", "Health insurance", "Design tools budget", "Flexible hours"],
      posted: "2024-01-12",
      featured: false,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "engineering",
      location: "remote",
      type: "Full-time",
      experience: "4+ years",
      summary:
        "Build and maintain our cloud infrastructure. Implement CI/CD pipelines and ensure system reliability and security.",
      responsibilities: [
        "Design and maintain cloud infrastructure",
        "Implement CI/CD pipelines",
        "Monitor system performance and reliability",
        "Ensure security best practices",
      ],
      qualifications: [
        "4+ years of DevOps/Infrastructure experience",
        "Experience with AWS, Docker, and Kubernetes",
        "Knowledge of Infrastructure as Code (Terraform)",
        "Strong scripting and automation skills",
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"],
      posted: "2024-01-10",
      featured: true,
    },
    {
      id: 4,
      title: "Sales Development Representative",
      department: "sales",
      location: "san-francisco",
      type: "Full-time",
      experience: "1+ years",
      summary:
        "Drive new business growth by identifying and qualifying potential clients. Work with enterprise customers to understand their technology needs.",
      responsibilities: [
        "Generate and qualify leads through various channels",
        "Conduct initial client discovery calls",
        "Collaborate with account executives on deals",
        "Maintain accurate CRM records",
      ],
      qualifications: [
        "1+ years of sales or business development experience",
        "Excellent communication and presentation skills",
        "Experience with CRM systems (Salesforce preferred)",
        "Bachelor's degree in Business or related field",
      ],
      benefits: ["Base salary + commission", "Health insurance", "Sales training", "Career growth"],
      posted: "2024-01-08",
      featured: false,
    },
  ]

  internshipPositions = [
    {
      id: 101,
      title: "Software Engineering Intern",
      department: "engineering",
      location: "remote",
      duration: "12 weeks",
      startDate: "2024-06-01",
      applicationDeadline: "2024-03-15",
      summary:
        "Work alongside our engineering team to develop features for our enterprise applications. Gain hands-on experience with modern web technologies.",
      responsibilities: [
        "Develop features for web applications",
        "Participate in code reviews and team meetings",
        "Write unit tests and documentation",
        "Collaborate on real client projects",
      ],
      qualifications: [
        "Currently pursuing Computer Science or related degree",
        "Knowledge of JavaScript, React, or similar frameworks",
        "Strong problem-solving skills",
        "Excellent communication abilities",
      ],
      benefits: ["Competitive stipend", "Mentorship program", "Remote work flexibility", "Full-time offer potential"],
      projects: ["Customer dashboard development", "API integration", "Performance optimization"],
    },
    {
      id: 102,
      title: "UX Design Intern",
      department: "design",
      location: "new-york",
      duration: "10 weeks",
      startDate: "2024-06-15",
      applicationDeadline: "2024-03-30",
      summary:
        "Support our design team in creating user-centered designs for enterprise software. Learn design thinking and user research methodologies.",
      responsibilities: [
        "Assist in user research and usability testing",
        "Create wireframes and prototypes",
        "Support design system development",
        "Participate in design critiques",
      ],
      qualifications: [
        "Currently pursuing Design, HCI, or related degree",
        "Portfolio demonstrating design skills",
        "Familiarity with design tools (Figma, Sketch)",
        "Interest in enterprise software design",
      ],
      benefits: ["Competitive stipend", "Design mentorship", "Portfolio development", "Industry networking"],
      projects: ["Mobile app redesign", "Design system components", "User research studies"],
    },
    {
      id: 103,
      title: "Data Science Intern",
      department: "engineering",
      location: "remote",
      duration: "12 weeks",
      startDate: "2024-07-01",
      applicationDeadline: "2024-04-01",
      summary:
        "Apply machine learning and data analysis techniques to solve real business problems. Work with our AI team on cutting-edge projects.",
      responsibilities: [
        "Analyze large datasets to extract insights",
        "Build and train machine learning models",
        "Create data visualizations and reports",
        "Collaborate on AI product features",
      ],
      qualifications: [
        "Currently pursuing Data Science, Statistics, or related degree",
        "Experience with Python, R, or similar languages",
        "Knowledge of machine learning concepts",
        "Strong analytical and mathematical skills",
      ],
      benefits: [
        "Competitive stipend",
        "AI/ML mentorship",
        "Conference attendance",
        "Research publication opportunities",
      ],
      projects: ["Predictive analytics dashboard", "NLP text analysis", "Computer vision applications"],
    },
  ]

  onboardingSteps = [
    {
      step: 1,
      title: "Application Submission",
      description:
        "Submit your application through our online portal with resume, cover letter, and portfolio (if applicable).",
      duration: "1 day",
      requirements: [
        "Complete application form",
        "Upload resume",
        "Submit cover letter",
        "Portfolio (for design roles)",
      ],
    },
    {
      step: 2,
      title: "Application Review",
      description: "Our hiring team reviews your application and qualifications against the role requirements.",
      duration: "3-5 business days",
      requirements: ["Application meets basic qualifications", "Resume review", "Portfolio assessment"],
    },
    {
      step: 3,
      title: "Initial Screening",
      description: "Phone or video call with HR to discuss your background, interests, and the role details.",
      duration: "30 minutes",
      requirements: ["Confirm interest and availability", "Discuss role expectations", "Answer initial questions"],
    },
    {
      step: 4,
      title: "Technical/Skills Assessment",
      description: "Complete a technical challenge or skills assessment relevant to your role (coding, design, etc.).",
      duration: "1-2 hours",
      requirements: ["Complete technical challenge", "Demonstrate relevant skills", "Submit within deadline"],
    },
    {
      step: 5,
      title: "Team Interviews",
      description: "Meet with team members and hiring manager to discuss experience, projects, and cultural fit.",
      duration: "2-3 hours",
      requirements: ["Prepare project examples", "Research company culture", "Ask thoughtful questions"],
    },
    {
      step: 6,
      title: "Final Decision",
      description: "We'll make our final decision and extend an offer to successful candidates.",
      duration: "2-3 business days",
      requirements: ["Reference checks", "Final team consensus", "Offer preparation"],
    },
    {
      step: 7,
      title: "Offer & Acceptance",
      description: "Receive and review your offer letter, negotiate terms if needed, and accept the position.",
      duration: "3-5 business days",
      requirements: ["Review offer terms", "Negotiate if necessary", "Sign offer letter"],
    },
    {
      step: 8,
      title: "Pre-boarding",
      description: "Complete necessary paperwork, background checks, and prepare for your first day.",
      duration: "1-2 weeks",
      requirements: ["Complete I-9 verification", "Submit tax forms", "Set up equipment", "Complete background check"],
    },
    {
      step: 9,
      title: "Orientation & Training",
      description: "Attend orientation sessions, meet your team, and begin role-specific training programs.",
      duration: "1-2 weeks",
      requirements: [
        "Attend orientation sessions",
        "Complete compliance training",
        "Meet team members",
        "Set up workspace",
      ],
    },
    {
      step: 10,
      title: "Initial Projects",
      description: "Begin working on initial projects with close mentorship and regular check-ins.",
      duration: "2-4 weeks",
      requirements: ["Complete first assignments", "Regular mentor meetings", "Participate in team activities"],
    },
  ]

  companyBenefits = [
    {
      icon: "fas fa-dollar-sign",
      title: "Competitive Compensation",
      description: "Market-competitive salaries with performance bonuses and equity options for full-time roles.",
    },
    {
      icon: "fas fa-heart",
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance with wellness programs and mental health support.",
    },
    {
      icon: "fas fa-laptop",
      title: "Remote-First Culture",
      description: "Flexible work arrangements with remote work options and modern equipment provided.",
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Learning & Development",
      description: "Professional development budget, conference attendance, and internal training programs.",
    },
    {
      icon: "fas fa-clock",
      title: "Work-Life Balance",
      description: "Flexible hours, unlimited PTO policy, and respect for personal time and boundaries.",
    },
    {
      icon: "fas fa-users",
      title: "Inclusive Culture",
      description: "Diverse and inclusive workplace with employee resource groups and mentorship programs.",
    },
  ]

  get filteredPositions() {
    let filtered = this.openPositions

    if (this.selectedDepartment !== "all") {
      filtered = filtered.filter((position) => position.department === this.selectedDepartment)
    }

    if (this.selectedLocation !== "all") {
      filtered = filtered.filter((position) => position.location === this.selectedLocation)
    }

    return filtered
  }

  get filteredInternships() {
    let filtered = this.internshipPositions

    if (this.selectedDepartment !== "all") {
      filtered = filtered.filter((internship) => internship.department === this.selectedDepartment)
    }

    if (this.selectedLocation !== "all") {
      filtered = filtered.filter((internship) => internship.location === this.selectedLocation)
    }

    return filtered
  }

  setActiveTab(tab: string) {
    this.activeTab = tab
  }

  selectDepartment(departmentId: string) {
    this.selectedDepartment = departmentId
  }

  selectLocation(locationId: string) {
    this.selectedLocation = locationId
  }

  applyForPosition(position: any) {
    this.selectedPosition = position
    this.showApplicationForm = true
  }

  closeApplicationForm() {
    this.showApplicationForm = false
    this.selectedPosition = null
  }

  getDepartmentIcon(department: string): string {
    const icons: Record<string, string> = {
      engineering: "fas fa-code",
      design: "fas fa-paint-brush",
      sales: "fas fa-chart-line",
      operations: "fas fa-cogs",
    }
    return icons[department] || "fas fa-briefcase"
  }

  getDepartmentColor(department: string): string {
    const colors: Record<string, string> = {
      engineering: "primary",
      design: "success",
      sales: "warning",
      operations: "info",
    }
    return colors[department] || "secondary"
  }
}
