import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { FormControl, FormGroup } from '@angular/forms';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certifications: any[] = [];

  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

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
    this.transferDataService.setData(this.certifications);
  }

}
