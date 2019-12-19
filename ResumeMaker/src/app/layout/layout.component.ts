import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  layout = 'left';

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

  changeLayout(layout: string) {
    this.layout = layout;
  }

  saveTemplate() {
    switch (this.layout) {
      case 'left':
        return;

      case 'center':
        window.location.href = '/edit';
        return;

      case 'right':
        return;

      default:
        return;
    }
    }

}
