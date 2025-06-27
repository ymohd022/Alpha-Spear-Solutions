import { Component } from '@angular/core';

@Component({
  selector: 'app-video-library',
  templateUrl: './video-library.component.html',
  styleUrl: './video-library.component.css'
})
export class VideoLibraryComponent {
  searchTerm = ""
  selectedCategory = "all"
  activeTab = "library"

  videoCategories = [
    { id: "all", name: "All Videos", count: 40 },
    { id: "tutorials", name: "Tutorials", count: 18 },
    { id: "webinars", name: "Webinars", count: 12 },
    { id: "case-studies", name: "Case Studies", count: 6 },
    { id: "product-demos", name: "Product Demos", count: 4 },
  ]

  videos = [
    {
      id: 1,
      title: "Building Scalable Microservices Architecture",
      description:
        "Learn how to design and implement microservices that can handle enterprise-level traffic and complexity.",
      category: "tutorials",
      duration: "45:30",
      views: 12500,
      date: "2024-01-15",
      thumbnail: "/placeholder.svg?height=200&width=350",
      speaker: "David Kim",
      tags: ["Microservices", "Architecture", "Scalability"],
      featured: true,
      type: "tutorial",
    },
    {
      id: 2,
      title: "AI-Powered Customer Service Solutions",
      description:
        "Discover how artificial intelligence can transform your customer service operations and improve satisfaction.",
      category: "webinars",
      duration: "60:00",
      views: 8900,
      date: "2024-01-12",
      thumbnail: "/placeholder.svg?height=200&width=350",
      speaker: "Sarah Rodriguez",
      tags: ["AI", "Customer Service", "Automation"],
      featured: false,
      type: "webinar",
    },
    {
      id: 3,
      title: "Healthcare ERP Implementation Success Story",
      description: "Real-world case study showing how we helped a major hospital system streamline their operations.",
      category: "case-studies",
      duration: "25:15",
      views: 5600,
      date: "2024-01-10",
      thumbnail: "/placeholder.svg?height=200&width=350",
      speaker: "Michael Chen",
      tags: ["Healthcare", "ERP", "Case Study"],
      featured: true,
      type: "case-study",
    },
    {
      id: 4,
      title: "React Development Best Practices",
      description: "Master React development with advanced patterns, performance optimization, and modern tooling.",
      category: "tutorials",
      duration: "38:45",
      views: 15200,
      date: "2024-01-08",
      thumbnail: "/placeholder.svg?height=200&width=350",
      speaker: "Emily Watson",
      tags: ["React", "JavaScript", "Frontend"],
      featured: false,
      type: "tutorial",
    },
    {
      id: 5,
      title: "Cloud Security Fundamentals",
      description: "Essential security practices for protecting your cloud infrastructure and sensitive data.",
      category: "webinars",
      duration: "55:20",
      views: 7800,
      date: "2024-01-05",
      thumbnail: "/placeholder.svg?height=200&width=350",
      speaker: "James Thompson",
      tags: ["Cloud Security", "DevOps", "Best Practices"],
      featured: false,
      type: "webinar",
    },
    {
      id: 6,
      title: "Custom CRM Platform Demo",
      description: "Live demonstration of our custom CRM solution built for a manufacturing company.",
      category: "product-demos",
      duration: "20:30",
      views: 3400,
      date: "2024-01-03",
      thumbnail: "/placeholder.svg?height=200&width=350",
      speaker: "Lisa Park",
      tags: ["CRM", "Manufacturing", "Demo"],
      featured: true,
      type: "demo",
    },
  ]

  upcomingWebinars = [
    {
      id: 101,
      title: "The Future of AI in Enterprise Software",
      description:
        "Join us for an in-depth discussion about emerging AI trends and their impact on enterprise applications.",
      date: "2024-02-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Sarah Rodriguez",
      speakerTitle: "Chief Technology Officer",
      registrations: 245,
      maxCapacity: 500,
      thumbnail: "/placeholder.svg?height=200&width=350",
      tags: ["AI", "Enterprise", "Future Trends"],
    },
    {
      id: 102,
      title: "Cloud Migration Strategies for SMBs",
      description: "Learn practical approaches to migrating your business to the cloud without disrupting operations.",
      date: "2024-02-22",
      time: "1:00 PM EST",
      duration: "45 minutes",
      speaker: "David Kim",
      speakerTitle: "Head of Engineering",
      registrations: 189,
      maxCapacity: 300,
      thumbnail: "/placeholder.svg?height=200&width=350",
      tags: ["Cloud Migration", "SMB", "Strategy"],
    },
    {
      id: 103,
      title: "Custom Software ROI Calculator Workshop",
      description: "Interactive workshop to help you calculate the ROI of custom software development projects.",
      date: "2024-03-01",
      time: "3:00 PM EST",
      duration: "90 minutes",
      speaker: "Michael Chen",
      speakerTitle: "CEO & Founder",
      registrations: 156,
      maxCapacity: 200,
      thumbnail: "/placeholder.svg?height=200&width=350",
      tags: ["ROI", "Custom Software", "Workshop"],
    },
  ]

  get filteredVideos() {
    let filtered = this.videos

    if (this.selectedCategory !== "all") {
      filtered = filtered.filter((video) => video.category === this.selectedCategory)
    }

    if (this.searchTerm) {
      filtered = filtered.filter(
        (video) =>
          video.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          video.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          video.tags.some((tag) => tag.toLowerCase().includes(this.searchTerm.toLowerCase())),
      )
    }

    return filtered
  }

  get featuredVideos() {
    return this.videos.filter((video) => video.featured)
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId
  }

  setActiveTab(tab: string) {
    this.activeTab = tab
  }

  registerForWebinar(webinar: any) {
    console.log("Registering for webinar:", webinar.title)
    // In real implementation, this would open a registration form or modal
  }

  playVideo(video: any) {
    console.log("Playing video:", video.title)
    // In real implementation, this would open a video player
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      tutorials: "fas fa-graduation-cap",
      webinars: "fas fa-video",
      "case-studies": "fas fa-chart-line",
      "product-demos": "fas fa-desktop",
    }
    return icons[category] || "fas fa-play"
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      tutorials: "primary",
      webinars: "success",
      "case-studies": "warning",
      "product-demos": "info",
    }
    return colors[category] || "secondary"
  }
}

