import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { FormControl, FormGroup } from '@angular/forms';
import { TransferDataService } from '../../services/transfer-data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMeForm = new FormGroup({
    aboutMeContent: new FormControl('')
  });

  constructor(private buildComponent: BuildComponent, private transferDataService: TransferDataService) { }

  ngOnInit() {
  }

  continue() {
    if (this.aboutMeForm.get('aboutMeContent').value === '') {
      alert('please fill in the required contents');
    } else {
    this.buildComponent.okTick.aboutMe = true;
    this.transferDataService.setData({aboutMe: this.aboutMeForm.value});
    }
  }
}
