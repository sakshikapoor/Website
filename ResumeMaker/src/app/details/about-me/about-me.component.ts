import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.aboutMe = true;
  }
}
