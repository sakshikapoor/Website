import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certifications: any[] = [];

  constructor() { }

  ngOnInit() {
  }


  addCertification() {
    this.certifications.push({});
  }

  removeCertification(i) {
    this.certifications.splice(i, 1);
  }

}
