import { Component, OnInit } from '@angular/core';
import { ResumeOptions } from '../models/resume-options';
import { AddContentOptionsService } from '../services/add-content-options.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {

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
  addContentOptionsService: any;

  constructor(addContentOptionsService: AddContentOptionsService) {
    this.addContentOptionsService = addContentOptionsService;
  }

  ngOnInit() {}

  nextButton() {
    this.addContentOptionsService.passOptions(this.resumeOptions);
  }

  selectAll(cb) {
    if (cb.checked === true) {
      Object.keys(this.resumeOptions).forEach(v => this.resumeOptions[v] = true);
    } else {
      console.log(cb);
      Object.keys(this.resumeOptions).forEach(v => this.resumeOptions[v] = false);
      this.resumeOptions.basicInfo = true;
    }
  }
}
