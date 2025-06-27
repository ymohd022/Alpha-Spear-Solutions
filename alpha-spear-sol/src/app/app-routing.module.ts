import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { AiAutomationComponent } from './services-overview/ai-automation/ai-automation.component';
import { WebDevelopmentComponent } from './services-overview/web-development/web-development.component';
import { ErpSystemsComponent } from './services-overview/erp-systems/erp-systems.component';
import { CustomSoftwareComponent } from './services-overview/custom-software/custom-software.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ResourceHubComponent } from './resource-hub/resource-hub.component';
import { CareersComponent } from './careers/careers.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { IndustryHealthcareComponent } from './solutions/industry-healthcare/industry-healthcare.component';
import { CaseStudyDetailComponent } from './solutions/case-study-detail/case-study-detail.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesOverviewComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'resources', component: ResourceHubComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'solutions/healthcare', component: IndustryHealthcareComponent },
  { path: 'solutions/case-studies', component: CaseStudyDetailComponent },
  { path: 'services/web-development', component: WebDevelopmentComponent },
  { path: 'services/ai-automation', component: AiAutomationComponent },
  { path: 'services/erp-systems', component: ErpSystemsComponent },
  { path: 'services/custom-software', component: CustomSoftwareComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top' // This ensures scrolling to the top on navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }