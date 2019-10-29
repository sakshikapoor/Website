import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-other-accomplishments',
  templateUrl: './other-accomplishments.component.html',
  styleUrls: ['./other-accomplishments.component.css']
})
export class OtherAccomplishmentsComponent implements OnInit {

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.otherAccomplishments = true;
  }

}
