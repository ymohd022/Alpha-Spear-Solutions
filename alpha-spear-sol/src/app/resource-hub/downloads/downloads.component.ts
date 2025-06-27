import { Component } from '@angular/core';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.css'
})
export class DownloadsComponent {
  searchTerm = ""
  selectedType = "all"

  assetTypes = [
    { id: "all", name: "All Resources", count: 25 },
    { id: "whitepaper", name: "White Papers", count: 8 },
    { id: "casestudy", name: "Case Studies", count: 6 },
    { id: "ebook", name: "E-Books", count: 5 },
    { id: "template", name: "Templates", count: 6 },
  ]

  downloadableAssets = [
    {
      id: 1,
      title: "The Complete Guide to Digital Transformation",
      description:
        "A comprehensive 50-page guide covering strategies, best practices, and real-world examples of successful digital transformation initiatives.",
      type: "ebook",
      fileType: "PDF",
      fileSize: "12.5 MB",
      pages: 50,
      downloads: 1250,
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
      tags: ["Digital Transformation", "Strategy", "Enterprise"],
    },
    {
      id: 2,
      title: "AI Implementation Roadmap Template",
      description:
        "Step-by-step template for planning and executing AI projects in your organization, including timelines and resource allocation.",
      type: "template",
      fileType: "XLSX",
      fileSize: "2.1 MB",
      pages: null,
      downloads: 890,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      tags: ["AI", "Project Management", "Template"],
    },
    {
      id: 3,
      title: "Healthcare ERP Success Story: Regional Medical Center",
      description:
        "Detailed case study showing how we helped a 500-bed hospital reduce operational costs by 30% through ERP implementation.",
      type: "casestudy",
      fileType: "PDF",
      fileSize: "8.3 MB",
      pages: 24,
      downloads: 675,
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
      tags: ["Healthcare", "ERP", "Case Study"],
    },
    {
      id: 4,
      title: "Cloud Security Best Practices White Paper",
      description:
        "In-depth analysis of cloud security threats and comprehensive strategies to protect your cloud infrastructure.",
      type: "whitepaper",
      fileType: "PDF",
      fileSize: "6.7 MB",
      pages: 32,
      downloads: 1100,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      tags: ["Cloud Security", "Best Practices", "Infrastructure"],
    },
    {
      id: 5,
      title: "Custom Software Development Checklist",
      description:
        "Complete checklist covering all phases of custom software development from requirements gathering to deployment.",
      type: "template",
      fileType: "PDF",
      fileSize: "1.8 MB",
      pages: 12,
      downloads: 520,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      tags: ["Software Development", "Checklist", "Process"],
    },
    {
      id: 6,
      title: "Machine Learning in Manufacturing",
      description:
        "Comprehensive e-book exploring ML applications in manufacturing, with practical examples and implementation strategies.",
      type: "ebook",
      fileType: "PDF",
      fileSize: "15.2 MB",
      pages: 68,
      downloads: 780,
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
      tags: ["Machine Learning", "Manufacturing", "Industry 4.0"],
    },
  ]

  get filteredAssets() {
    let filtered = this.downloadableAssets

    if (this.selectedType !== "all") {
      filtered = filtered.filter((asset) => asset.type === this.selectedType)
    }

    if (this.searchTerm) {
      filtered = filtered.filter(
        (asset) =>
          asset.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          asset.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          asset.tags.some((tag) => tag.toLowerCase().includes(this.searchTerm.toLowerCase())),
      )
    }

    return filtered
  }

  get featuredAssets() {
    return this.downloadableAssets.filter((asset) => asset.featured)
  }

  selectType(typeId: string) {
    this.selectedType = typeId
  }

  downloadAsset(asset: any) {
    // Simulate download
    console.log("Downloading:", asset.title)
    // In real implementation, this would trigger the actual download
  }

  getTypeIcon(type: string): string {
    const icons: Record<string, string> = {
      whitepaper: "fas fa-file-alt",
      casestudy: "fas fa-chart-line",
      ebook: "fas fa-book",
      template: "fas fa-file-code",
    }
    return icons[type] || "fas fa-file"
  }

  getTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      whitepaper: "primary",
      casestudy: "success",
      ebook: "warning",
      template: "info",
    }
    return colors[type] || "secondary"
  }
}
