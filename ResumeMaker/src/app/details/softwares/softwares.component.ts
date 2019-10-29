import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-softwares',
  templateUrl: './softwares.component.html',
  styleUrls: ['./softwares.component.css']
})
export class SoftwaresComponent implements OnInit {

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.projectsUndertaken = true;
  }

}
