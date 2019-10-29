import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.contactInfo = true;
  }
}
