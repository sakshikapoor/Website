import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certifications: any[] = [];

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }


  addCertification() {
    this.certifications.push({});
  }

  removeCertification(i) {
    this.certifications.splice(i, 1);
  }

  continue() {
    this.buildComponent.okTick.certifications = true;
  }

}
