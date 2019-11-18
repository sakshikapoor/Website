import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  data: any[] = [];

  constructor(private cookie: CookieService) { }

  setData(incoming: any) {
    this.data.push(incoming);
    this.cookie.set('data', JSON.stringify(this.data));
  }

  getData() {
    return(this.data);
  }
}
