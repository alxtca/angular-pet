import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

//https://github.com/ngx-translate/core

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nn']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang() as string;
    translate.use(browserLang.match(/en|nn/) ? browserLang : 'en');
  }


  setLang(lang: string) {
    this.translate.use(lang)
  }

  //translate service
  ddd(){
    this.translate.get('HOME.TITLE').subscribe(res => {
      console.log(res)
    })
    //for AoT projects
    let res = this.translate.instant('HOME.TITLE')
    console.log(res)
  }

}
