import { Injectable } from '@angular/core';
import { ResumeOptions } from '../models/resume-options';
import { Observable, Subject, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AddContentOptionsService {

  data: ResumeOptions;

  constructor(private cookie: CookieService) { }

  passOptions(data: ResumeOptions) {
    this.data = data;
    this.cookie.set('choices', JSON.stringify(data));
  }
  returnOptions(): Observable<ResumeOptions> {
    return of(this.data);
  }
}
