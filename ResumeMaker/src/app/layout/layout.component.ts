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
        window.location.href = '/left-align';
        return;

      case 'center':
        window.location.href = '/edit';
        return;

      case 'right':
        window.location.href = '/right-align';
        return;

      default:
        return;
    }
    }

}
