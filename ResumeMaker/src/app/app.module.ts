import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { BuildComponent } from './build/build.component';
import { AddContentComponent } from './add-content/add-content.component';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicInfoComponent } from './details/basic-info/basic-info.component';
import { AboutMeComponent } from './details/about-me/about-me.component';
import { ProfilePicComponent } from './details/profile-pic/profile-pic.component';
import { EducationComponent } from './details/education/education.component';
import { ContactInfoComponent } from './details/contact-info/contact-info.component';
import { ProjectsUndertakenComponent } from './details/projects-undertaken/projects-undertaken.component';
import { HobbiesComponent } from './details/hobbies/hobbies.component';
import { WorkExperienceComponent } from './details/work-experience/work-experience.component';
import { InternshipsComponent } from './details/internships/internships.component';
import { LanguagesComponent } from './details/languages/languages.component';
import { ProfessionalSkillsComponent } from './details/professional-skills/professional-skills.component';
import { SoftwaresComponent } from './details/softwares/softwares.component';
import { CareerObjectiveComponent } from './details/career-objective/career-objective.component';
import { WebsiteComponent } from './details/website/website.component';
import { OtherAccomplishmentsComponent } from './details/other-accomplishments/other-accomplishments.component';
import { CertificationsComponent } from './details/certifications/certifications.component';
import { CookieService } from 'ngx-cookie-service';
import { EditComponent } from './edit/edit.component';
import { LayoutComponent } from './layout/layout.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    AboutComponent,
    BuildComponent,
    AddContentComponent,
    BasicInfoComponent,
    AboutMeComponent,
    ProfilePicComponent,
    EducationComponent,
    ContactInfoComponent,
    ProjectsUndertakenComponent,
    HobbiesComponent,
    WorkExperienceComponent,
    InternshipsComponent,
    LanguagesComponent,
    ProfessionalSkillsComponent,
    SoftwaresComponent,
    CareerObjectiveComponent,
    WebsiteComponent,
    OtherAccomplishmentsComponent,
    CertificationsComponent,
    EditComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    DragDropModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
