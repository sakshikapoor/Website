import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-career-objective',
  templateUrl: './career-objective.component.html',
  styleUrls: ['./career-objective.component.css']
})
export class CareerObjectiveComponent implements OnInit {

  careerObjectiveForm = new FormGroup({
    careerObjectiveContent: new FormControl(''),
  });

  constructor(private buildComponent: BuildComponent, private cookie: CookieService) { }

  ngOnInit() {
  }

  continue() {
    if (this.careerObjectiveForm.get('careerObjectiveContent').value === '' ) {
      alert('please fill in the required contents');
    } else {
      this.cookie.set('careerObjective', JSON.stringify(this.careerObjectiveForm.value));
      this.buildComponent.okTick.careerObjective = true;
    }
  }
}
