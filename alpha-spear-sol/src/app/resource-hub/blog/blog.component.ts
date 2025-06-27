import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  searchTerm = ""
  selectedCategory = "all"
  currentPage = 1
  itemsPerPage = 6

  categories = [
    { id: "all", name: "All Categories", count: 24 },
    { id: "tech", name: "Technology", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 8 },
    { id: "tutorials", name: "Tutorials", count: 4 },
  ]

  blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Software Development",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing the way we build and deploy enterprise applications.",
      author: "Sarah Rodriguez",
      date: "2024-01-15",
      category: "ai",
      tags: ["AI", "Machine Learning", "Enterprise"],
      image: "/placeholder.svg?height=200&width=400",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Microservices",
      excerpt:
        "A comprehensive guide to designing and implementing microservices architecture for modern web applications.",
      author: "David Kim",
      date: "2024-01-12",
      category: "tech",
      tags: ["Microservices", "Architecture", "Scalability"],
      image: "/placeholder.svg?height=200&width=400",
      readTime: "12 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Step-by-Step Guide to React Development",
      excerpt: "Learn React from scratch with practical examples and best practices for modern web development.",
      author: "Emily Watson",
      date: "2024-01-10",
      category: "tutorials",
      tags: ["React", "JavaScript", "Frontend"],
      image: "/placeholder.svg?height=200&width=400",
      readTime: "15 min read",
      featured: false,
    },
    {
      id: 4,
      title: "Cloud Security Best Practices for 2024",
      excerpt: "Essential security measures and strategies to protect your cloud infrastructure and data.",
      author: "Michael Chen",
      date: "2024-01-08",
      category: "tech",
      tags: ["Cloud Security", "DevOps", "Best Practices"],
      image: "/placeholder.svg?height=200&width=400",
      readTime: "10 min read",
      featured: true,
    },
    {
      id: 5,
      title: "Machine Learning Models in Production",
      excerpt: "How to deploy, monitor, and maintain machine learning models in production environments.",
      author: "Sarah Rodriguez",
      date: "2024-01-05",
      category: "ai",
      tags: ["ML Ops", "Production", "Monitoring"],
      image: "/placeholder.svg?height=200&width=400",
      readTime: "14 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Database Optimization Techniques",
      excerpt: "Advanced strategies for optimizing database performance and query efficiency.",
      author: "James Thompson",
      date: "2024-01-03",
      category: "tutorials",
      tags: ["Database", "Performance", "SQL"],
      image: "/placeholder.svg?height=200&width=400",
      readTime: "11 min read",
      featured: false,
    },
  ]

  get filteredPosts() {
    let filtered = this.blogPosts

    if (this.selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === this.selectedCategory)
    }

    if (this.searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(this.searchTerm.toLowerCase())),
      )
    }

    return filtered
  }

  get paginatedPosts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    return this.filteredPosts.slice(startIndex, startIndex + this.itemsPerPage)
  }

  get totalPages() {
    return Math.ceil(this.filteredPosts.length / this.itemsPerPage)
  }

  get featuredPosts() {
    return this.blogPosts.filter((post) => post.featured).slice(0, 2)
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId
    this.currentPage = 1
  }

  onSearch() {
    this.currentPage = 1
  }

  goToPage(page: number) {
    this.currentPage = page
  }

  getPaginationArray() {
    const pages = []
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i)
    }
    return pages
  }
}
