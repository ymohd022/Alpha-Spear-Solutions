import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-hub',
  templateUrl: './resource-hub.component.html',
  styleUrl: './resource-hub.component.css'
})
export class ResourceHubComponent {
  activeTab = "blog"

  hubStats = [
    { number: "150+", label: "Blog Articles", icon: "fas fa-blog" },
    { number: "25+", label: "Downloadable Resources", icon: "fas fa-download" },
    { number: "40+", label: "Video Tutorials", icon: "fas fa-video" },
    { number: "12+", label: "Upcoming Webinars", icon: "fas fa-calendar-alt" },
  ]

  setActiveTab(tab: string) {
    this.activeTab = tab
  }
}