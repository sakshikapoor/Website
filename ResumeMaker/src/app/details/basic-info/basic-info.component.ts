import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { FormControl, FormGroup } from '@angular/forms';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  basicInfoform = new FormGroup({
    firstNameContent: new FormControl(''),
    lastNameContent: new FormControl(''),
    emailIdContent: new FormControl(''),
  });

  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

  ngOnInit() {
  }

  continue() {
    if (this.basicInfoform.get('firstNameContent').value === '' || this.basicInfoform.get('lastNameContent').value === '' ||
    this.basicInfoform.get('emailIdContent').value === '') {
      alert('please fill in the required contents');
    } else {
      this.buildComponent.okTick.basicInfo = true;
      this.transferDataService.setData(this.basicInfoform.value);
    }
  }

}
