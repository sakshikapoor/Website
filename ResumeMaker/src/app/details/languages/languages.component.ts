import { Component, OnInit } from '@angular/core';
import {Tagify} from '@yaireo/tagify';
import { BuildComponent } from '../../build/build.component';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  // input = document.querySelector('input[name=basic]');
  // tagify = new Tagify(this.input);

  constructor(private buildComponent: BuildComponent) { }

  ngOnInit() {
  }

  continue() {
    this.buildComponent.okTick.languages = true;
  }

}
