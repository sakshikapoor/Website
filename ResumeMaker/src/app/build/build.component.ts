import { Component, OnInit } from '@angular/core';
import { AddContentOptionsService } from '../services/add-content-options.service';
import { ResumeOptions } from '../models/resume-options';
import { CookieService } from 'ngx-cookie-service';
import { TransferDataService } from '../services/transfer-data.service';

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
  addDetails = {
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
  okTick: ResumeOptions = {
    basicInfo : false,
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
    profilePic : true,
    projectsUndertaken : false,
    softwaresKnown : false,
    website : false,
    workExperience : false,
  };
  dataFed = true;

  constructor(addContentOptionsService: AddContentOptionsService, cookie: CookieService, transferDataService: TransferDataService) {
    console.log('constructor');
    addContentOptionsService.returnOptions().subscribe(
      resumeOptions => this.resumeOptions = resumeOptions);

    if (!this.resumeOptions) {
      this.resumeOptions = JSON.parse(cookie.get('choices'));
      console.log(this.resumeOptions);
    }
    if (this.resumeOptions.profilePic === true) {
      transferDataService.setData('profilePic', 'true');
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
