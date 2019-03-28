import { Component, OnInit } from '@angular/core';
import { HttpngClientService } from '../httpng-client.service';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent {
  list;
  date = new Date(); // new Date();
  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];
  isEnglish = false;
  constructor(
    private HttpngClientservice: HttpngClientService,
    private i18n: NzI18nService
    ) { }
  https() {
    this.HttpngClientservice.getHeroes().subscribe(list => this.list = list);
  }


  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : zh_CN);
    this.isEnglish = !this.isEnglish;
  }
}
