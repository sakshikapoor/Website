import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-career-objective',
  templateUrl: './career-objective.component.html',
  styleUrls: ['./career-objective.component.css']
})
export class CareerObjectiveComponent implements OnInit {

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.careerObjective = true;
  }
}
