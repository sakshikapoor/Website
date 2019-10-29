import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-projects-undertaken',
  templateUrl: './projects-undertaken.component.html',
  styleUrls: ['./projects-undertaken.component.css']
})
export class ProjectsUndertakenComponent implements OnInit {

  projects: any[] = [];

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  addProjects() {
    this.projects.push({});
  }

  removeProject(i) {
    this.projects.splice(i, 1);
  }

  continue() {
    this.buildComponent.okTick.projectsUndertaken = true;
  }
}
