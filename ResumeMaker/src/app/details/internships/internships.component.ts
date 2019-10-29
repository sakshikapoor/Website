import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {

  internships: any[] = [];

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  addInternships() {
    this.internships.push({});
  }

  removeInternships(i) {
    this.internships.splice(i, 1);
  }

  continue() {
    this.buildComponent.okTick.internships = true;
  }

}
