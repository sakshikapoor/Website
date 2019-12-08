import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { TransferDataService } from '../../services/transfer-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  contactInfoForm = new FormGroup({
    mobilenumber: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.contactInfo = true;
    this.transferDataService.setData({contactInfo: this.contactInfoForm.value});
  }
}
