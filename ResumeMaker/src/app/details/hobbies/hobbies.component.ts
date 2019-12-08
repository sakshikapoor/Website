import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { TransferDataService } from '../../services/transfer-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbiesContent: any;

  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.hobbies = true;
    this.transferDataService.setData({hobbies: this.hobbiesContent});
  }
}
