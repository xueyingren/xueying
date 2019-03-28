import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from '@ant-design/icons-angular';
import { CKEditorModule } from 'ng2-ckeditor';


/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LeftTreeComponent } from './left-tree/left-tree.component';
import { RightContentComponent } from './right-content/right-content.component';
import { InteractiveCourComponent } from './right-content/interactive-cour/interactive-cour.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { OneComponent } from './one/one.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    LeftTreeComponent,
    RightContentComponent,
    InteractiveCourComponent,
    NavComponent,
    IndexComponent,
    OneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CKEditorModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    FormsModule,
    BrowserAnimationsModule,
    IconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
