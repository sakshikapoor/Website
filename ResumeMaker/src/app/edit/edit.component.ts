import { Component, OnInit } from '@angular/core';
import { TransferDataService } from '../services/transfer-data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  data: any[] = [];

  constructor(transferDataService: TransferDataService,  cookie: CookieService) {
    this.data = transferDataService.getData();
    if (!this.data) {
      this.data = JSON.parse(cookie.get('data'));
    }
    console.log(this.data);
  }

  ngOnInit() {
  }

}
