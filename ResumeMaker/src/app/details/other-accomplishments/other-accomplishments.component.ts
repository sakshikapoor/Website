import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { TransferDataService } from '../../services/transfer-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-other-accomplishments',
  templateUrl: './other-accomplishments.component.html',
  styleUrls: ['./other-accomplishments.component.css']
})
export class OtherAccomplishmentsComponent implements OnInit {

  otherAccomplishmentForm = new FormGroup({
    otherAccomplishmentContent: new FormControl(''),
  });


  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.otherAccomplishments = true;
    this.transferDataService.setData({otherAccomplishments: this.otherAccomplishmentForm.value});
  }

}
