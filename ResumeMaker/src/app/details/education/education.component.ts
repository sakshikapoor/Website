import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: any[] = [];

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  addEducation() {
    this.education.push({});
  }

  removeEducation(i) {
    this.education.splice(i, 1);
  }

  continue() {
    this.buildComponent.okTick.education = true;
  }
}
