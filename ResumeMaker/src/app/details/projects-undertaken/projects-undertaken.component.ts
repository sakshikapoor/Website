import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-undertaken',
  templateUrl: './projects-undertaken.component.html',
  styleUrls: ['./projects-undertaken.component.css']
})
export class ProjectsUndertakenComponent implements OnInit {

  projects: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addProjects() {
    this.projects.push({});
  }

  removeProject(i) {
    this.projects.splice(i, 1);
  }

}
