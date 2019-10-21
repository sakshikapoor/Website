import { Component, OnInit } from '@angular/core';
import { AddContentOptionsService } from '../services/add-content-options.service';
import { ResumeOptions } from '../models/resume-options';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  resumeOptions: ResumeOptions = {
    basicInfo : true,
    aboutMe : false,
    careerObjective : false,
    contactInfo : false,
    internships : false,
    hobbies : false,
    education : false,
    certifications : false,
    languages : false,
    otherAccomplishments : false,
    professionalSkills : false,
    profilePic : false,
    projectsUndertaken : false,
    softwaresKnown : false,
    website : false,
    workExperience : false,
  };
  addDetails: ResumeOptions = {
    basicInfo : true,
    aboutMe : false,
    careerObjective : false,
    contactInfo : false,
    internships : false,
    hobbies : false,
    education : false,
    certifications : false,
    languages : false,
    otherAccomplishments : false,
    professionalSkills : false,
    profilePic : false,
    projectsUndertaken : false,
    softwaresKnown : false,
    website : false,
    workExperience : false,
  };

  constructor(private addContentOptionsService: AddContentOptionsService, cookie: CookieService) {
    console.log('constructor');
    addContentOptionsService.returnOptions().subscribe(
      resumeOptions => this.resumeOptions = resumeOptions);
    if (!this.resumeOptions) {
      this.resumeOptions = JSON.parse(cookie.get('choices'));
      console.log(this.resumeOptions);
    }
   }

  ngOnInit() {
  }

  show(detail: string) {
    for (const [key, value] of Object.entries(this.addDetails)) {
      this.addDetails[key] = false;
      if (key === detail) {
      this.addDetails[key] = true;
      }
    }
  }
}
