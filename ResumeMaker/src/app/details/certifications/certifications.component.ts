import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certifications: any[] = [];
  certificationsForm = new FormGroup({
    certificationContent: new FormControl(''),
    companyContent: new FormControl(''),
    yearContent: new FormControl(''),
  });

  constructor(private buildComponent: BuildComponent, private cookie: CookieService) { }

  ngOnInit() {
  }


  addCertification() {
    this.certifications.push({});
  }

  removeCertification(i) {
    this.certifications.splice(i, 1);
  }

  continue() {
    this.cookie.set('certifications', JSON.stringify(this.certificationsForm.value));
    this.buildComponent.okTick.certifications = true;
  }

}
