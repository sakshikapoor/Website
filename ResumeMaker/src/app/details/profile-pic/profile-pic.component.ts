import { Component, OnInit } from '@angular/core';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  imagePath;
  imgURL: any;
  message: string;

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() { }

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imgURL = reader.result;
    };
  }

  continue() {
    this.buildComponent.okTick.profilePic = true;
  }

}
