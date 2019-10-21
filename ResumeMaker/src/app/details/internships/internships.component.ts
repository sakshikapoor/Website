import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {

  internships: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addInternships() {
    this.internships.push({});
  }

  removeInternships(i) {
    this.internships.splice(i, 1);
  }

}
