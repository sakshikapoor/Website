import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { TransferDataService } from '../../services/transfer-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-softwares',
  templateUrl: './softwares.component.html',
  styleUrls: ['./softwares.component.css']
})
export class SoftwaresComponent implements OnInit {

  softwaresForm = new FormGroup({
    softwaresContent: new FormControl(''),
  });

  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.projectsUndertaken = true;
    this.transferDataService.setData({softwares: this.softwaresForm.value});
  }

}
