import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: "Mohd Yousuf",
      position: "Chief Executive Officer & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in enterprise software development, Michael founded Alpha Spear Solutions with a vision to democratize cutting-edge technology for businesses of all sizes. He holds an MS in Computer Science from Stanford and has led digital transformation initiatives for Fortune 500 companies.",
      expertise: ["Strategic Leadership", "Enterprise Architecture", "Digital Transformation"],
      linkedin: "#",
      email: "mohd.yousuf@alphaspear.com",
    },
    {
      name: "Mohammed Faraz",
      position: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Faraz brings 12+ years of experience in AI and machine learning to Alpha Spear Solutions. He previously led AI research teams at Google and Microsoft, specializing in natural language processing and computer vision. He holds a PhD in Artificial Intelligence from MIT.",
      expertise: ["Artificial Intelligence", "Machine Learning", "Cloud Architecture"],
      linkedin: "#",
      email: "mohammed.faraz@alphaspear.com",
    },
    {
      name: "Mirza Ahtesham Baig",
      position: "Head of Engineering",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Mirza is a full-stack development expert with extensive experience in scalable web applications and microservices architecture. He has successfully delivered 200+ projects and leads our engineering team in building robust, high-performance solutions.",
      expertise: ["Full-Stack Development", "DevOps", "System Architecture"],
      linkedin: "#",
      email: "Mirza.Ahtesham@alphaspear.com",
    },
    // {
    //   name: "Emily Watson",
    //   position: "Head of Design & User Experience",
    //   image: "/placeholder.svg?height=300&width=300",
    //   bio: "Emily is a creative visionary with 10+ years of experience in UX/UI design and human-computer interaction. She ensures that every solution we build is not only functional but also intuitive and delightful to use.",
    //   expertise: ["UX/UI Design", "Design Systems", "User Research"],
    //   linkedin: "#",
    //   email: "emily.watson@alphaspear.com",
    // },
    // {
    //   name: "James Thompson",
    //   position: "Head of Business Development",
    //   image: "/placeholder.svg?height=300&width=300",
    //   bio: "James drives our growth strategy and client relationships with his deep understanding of business processes and technology solutions. He has helped over 150 companies optimize their operations through strategic technology implementations.",
    //   expertise: ["Business Strategy", "Client Relations", "Process Optimization"],
    //   linkedin: "#",
    //   email: "james.thompson@alphaspear.com",
    // },
    // {
    //   name: "Lisa Park",
    //   position: "Head of Quality Assurance",
    //   image: "/placeholder.svg?height=300&width=300",
    //   bio: "Lisa ensures the highest quality standards across all our deliverables. With expertise in automated testing and quality management systems, she has established robust QA processes that guarantee exceptional results.",
    //   expertise: ["Quality Assurance", "Test Automation", "Process Management"],
    //   linkedin: "#",
    //   email: "lisa.park@alphaspear.com",
    // },
  ]

  coreValues = [
    {
      icon: "fas fa-lightbulb",
      title: "Innovation First",
      description:
        "We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.",
      color: "primary",
    },
    {
      icon: "fas fa-handshake",
      title: "Client Partnership",
      description:
        "We build long-term partnerships with our clients, understanding their unique challenges and growing alongside their success.",
      color: "success",
    },
    {
      icon: "fas fa-award",
      title: "Excellence & Quality",
      description:
        "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results.",
      color: "warning",
    },
    {
      icon: "fas fa-users",
      title: "Collaborative Spirit",
      description:
        "We believe in the power of teamwork, both within our organization and in partnership with our clients and communities.",
      color: "info",
    },
    {
      icon: "fas fa-leaf",
      title: "Sustainable Growth",
      description:
        "We are committed to building solutions that not only drive business growth but also contribute to a sustainable future.",
      color: "success",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Trust & Integrity",
      description:
        "We operate with complete transparency and integrity, building trust through honest communication and reliable delivery.",
      color: "primary",
    },
  ]

  companyStats = [
    { number: "500+", label: "Projects Completed", icon: "fas fa-project-diagram" },
    { number: "150+", label: "Happy Clients", icon: "fas fa-users" },
    { number: "50+", label: "Team Members", icon: "fas fa-user-tie" },
    { number: "5+", label: "Years of Excellence", icon: "fas fa-calendar-alt" },
    { number: "25+", label: "Industries Served", icon: "fas fa-industry" },
    { number: "99%", label: "Client Satisfaction", icon: "fas fa-heart" },
  ]

  milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "Alpha Spear Solutions was established with a mission to democratize enterprise-grade technology solutions.",
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Successfully delivered our first enterprise ERP system, establishing our reputation in the market.",
    },
    {
      year: "2021",
      title: "AI Division Launch",
      description:
        "Expanded our services to include AI and automation solutions, helping clients leverage machine learning.",
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew our team to 30+ professionals and opened our second development center.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple industry awards for innovation and client satisfaction.",
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Expanded internationally and reached the milestone of 500+ successful project deliveries.",
    },
  ]
}

