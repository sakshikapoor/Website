import { Component, OnInit } from '@angular/core';
import { TransferDataService } from '../services/transfer-data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  data: any = {};
  header: any[] = [];


  constructor(transferDataService: TransferDataService,  cookie: CookieService) {
      this.data = transferDataService.getData();
      if (Object.keys(this.data).length === 0) {
      // this.data = JSON.parse(cookie.get('data'));
      this.data = JSON.parse(localStorage.getItem('data'));
    }
  }

  ngOnInit() {
  }

}
