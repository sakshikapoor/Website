import { Component, OnInit } from '@angular/core';
import { TransferDataService } from '../services/transfer-data.service';
import { CookieService } from 'ngx-cookie-service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-left-layout',
  templateUrl: './left-layout.component.html',
  styleUrls: ['./left-layout.component.scss']
})
export class LeftLayoutComponent implements OnInit {

  data: any = {};
  header: any[] = [];
  keys: any[] = [];
  imagePath;
  imgURL: any;
  message: string;

  constructor(transferDataService: TransferDataService,  cookie: CookieService) {
      this.data = transferDataService.getData();
      if (Object.keys(this.data).length === 0) {
      this.data = JSON.parse(cookie.get('data'));
    }
      this.keys = Object.keys(this.data);
  }

  ngOnInit() {
  }

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

  drop(event: CdkDragDrop<string[]>) {
   moveItemInArray(this.keys, event.previousIndex, event.currentIndex);
 }

   print() {
      window.print();
 }
}
