import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  data: any = {};

  constructor(private cookie: CookieService) { }

  setData(key: any, value: any) {
    this.data[key] = value;
    this.cookie.set('data', JSON.stringify(this.data));
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  getData() {
    return(this.data);
  }
}
