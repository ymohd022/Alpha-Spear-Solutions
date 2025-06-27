import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import { ServicesOverviewComponent } from './services-overview/services-overview.component';
import { AiAutomationComponent } from './services-overview/ai-automation/ai-automation.component';
import { WebDevelopmentComponent } from './services-overview/web-development/web-development.component';
import { ErpSystemsComponent } from './services-overview/erp-systems/erp-systems.component';
import { CustomSoftwareComponent } from './services-overview/custom-software/custom-software.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ResourceHubComponent } from './resource-hub/resource-hub.component';
import { BlogComponent } from './resource-hub/blog/blog.component';
import { DownloadsComponent } from './resource-hub/downloads/downloads.component';
import { VideoLibraryComponent } from './resource-hub/video-library/video-library.component';
import { CareersComponent } from './careers/careers.component';
import { ApplicationFormComponent } from './careers/application-form/application-form.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { IndustryHealthcareComponent } from './solutions/industry-healthcare/industry-healthcare.component';
import { CaseStudyDetailComponent } from './solutions/case-study-detail/case-study-detail.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServicesOverviewComponent,
    AiAutomationComponent,
    WebDevelopmentComponent,
    ErpSystemsComponent,
    CustomSoftwareComponent,
    AboutUsComponent,
    ResourceHubComponent,
    BlogComponent,
    DownloadsComponent,
    VideoLibraryComponent,
    CareersComponent,
    ApplicationFormComponent,
    SolutionsComponent,
    IndustryHealthcareComponent,
    CaseStudyDetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
