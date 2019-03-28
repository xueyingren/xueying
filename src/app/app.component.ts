import { InteractiveCourComponent } from './right-content/interactive-cour/interactive-cour.component';
import { HttpngClientService } from './httpng-client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor() { }
     @ViewChild(InteractiveCourComponent)
    private interactiveCourComponent: InteractiveCourComponent;
  ngOnInit() {
  }
}
