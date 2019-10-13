import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addEducation() {
    this.education.push({});
  }

  removeEducation(i) {
    this.education.splice(i, 1);
  }

}
