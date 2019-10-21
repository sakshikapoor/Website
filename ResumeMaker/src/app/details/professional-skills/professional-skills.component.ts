import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.css']
})
export class ProfessionalSkillsComponent implements OnInit {

  skills: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addSkill() {
    this.skills.push({});
  }

  removeSkill(i) {
    this.skills.splice(i, 1);
  }
}
