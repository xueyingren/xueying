import { Component, OnInit, Pipe, Injectable } from '@angular/core';
import { HttpngClientService } from '../../httpng-client.service';
import {DomSanitizer} from '@angular/platform-browser';
import * as $ from 'jquery';
@Component({
  selector: 'app-interactive-cour',
  templateUrl: './interactive-cour.component.html',
  styleUrls: ['./interactive-cour.component.less'
            ]
})
@Injectable({ providedIn: 'root' })
export class InteractiveCourComponent  {
  list;
  data = {
    body: 'dfsfs'
  };
  constructor(private HttpngClientservice: HttpngClientService,
              private sanitizer: DomSanitizer
    ) { }
  // ngOnInit() {
  //   // $('#divs').html(this.data.body);
  //   this.HttpngClientservice.getData().subscribe(list => {
  //     this.list = list;
  //     this.https();
  //   });
  // }
  https() {
    console.log(this);
    // this.data = listData[0];
    // $('#divs').html(this.list[0].body.replace(/↵/g, ' '));
    this.data = {
      body: '1234'
    };
    this.httpsData();
  }
  httpsData() {
    console.log(this);
  }
}
