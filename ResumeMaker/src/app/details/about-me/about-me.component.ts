import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMeForm = new FormGroup({
    aboutMeContent: new FormControl('')
  });

  constructor(private buildComponent: BuildComponent, private cookie: CookieService) { }

  ngOnInit() {
  }

  continue() {
    if (this.aboutMeForm.get('aboutMeContent').value === '') {
      alert('please fill in the required contents');
    } else {
    this.cookie.set('aboutMe', JSON.stringify(this.aboutMeForm.value));
    this.buildComponent.okTick.aboutMe = true;
    }
  }
}
