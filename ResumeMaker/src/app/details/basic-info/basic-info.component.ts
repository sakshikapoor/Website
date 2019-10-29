import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.basicInfo = true;
  }

}
