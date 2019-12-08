import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { FormControl, FormGroup } from '@angular/forms';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-career-objective',
  templateUrl: './career-objective.component.html',
  styleUrls: ['./career-objective.component.css']
})
export class CareerObjectiveComponent implements OnInit {

  careerObjectiveForm = new FormGroup({
    careerObjectiveContent: new FormControl(''),
  });

  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

  ngOnInit() {
  }

  continue() {
    if (this.careerObjectiveForm.get('careerObjectiveContent').value === '' ) {
      alert('please fill in the required contents');
    } else {
      this.buildComponent.okTick.careerObjective = true;
      this.transferDataService.setData({careerObjective: this.careerObjectiveForm.value});
    }
  }
}
