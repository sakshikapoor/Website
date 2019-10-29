import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  experience: any[] = [];

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  addWork() {
    this.experience.push({});
  }

  removeWork(i) {
    this.experience.splice(i, 1);
  }

  continue() {
    this.buildComponent.okTick.workExperience = true;
  }
}
