import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {

  internships: any[] = [];

  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

  ngOnInit() {
  }

  addInternships() {
    this.internships.push({});
  }

  removeInternships(i) {
    this.internships.splice(i, 1);
  }

  continue() {
    this.buildComponent.okTick.internships = true;
    this.transferDataService.setData(this.internships);
  }

}
