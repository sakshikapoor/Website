import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

  saveTemplate() {
    this.cookieService.set('data', 'hh');
  }

}
