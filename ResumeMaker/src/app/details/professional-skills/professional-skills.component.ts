import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.css']
})
export class ProfessionalSkillsComponent implements OnInit {

  skills: any[] = [];

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  addSkill() {
    this.skills.push({});
  }

  removeSkill(i) {
    this.skills.splice(i, 1);
  }

  continue() {
    this.buildComponent.okTick.professionalSkills = true;
  }
}
