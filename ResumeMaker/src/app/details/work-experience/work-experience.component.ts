import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  experience: any[] = [];

  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

  ngOnInit() {
  }

  addWork() {
    this.experience.push({});
  }

  removeWork(i) {
    this.experience.splice(i, 1);
  }

  continue() {
    this.buildComponent.okTick.workExperience = true;
    this.transferDataService.setData(this.experience);
  }
}
