import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  left = 0;
  iSpeed = 20;
  timer = null;
  iNow = 0;
  constructor() { }

  ngOnInit() {
  }

    mover() {
      this.move1( event.target.offsetLeft);
    }
    mout() {
      this.move1(this.iNow * event.target.offsetWidth);
    }
    cli(index) {
      this.iNow = index;
      this.Flip(index);

    }
    // 弹性菜单
    move1(iTarget) {
      clearInterval(this.timer);
      let _this = this;
      this.timer = setInterval(function() {
        _this.iSpeed += (iTarget - _this.left) / 5;
        _this.iSpeed *= 0.8;
        _this.left += _this.iSpeed;
        document.querySelector('#block').style.left = _this.left + 'px';
        if (Math.round(_this.iSpeed) === 0 && Math.round(_this.left) === iTarget) {
          clearInterval(_this.timer);
        }
      }, 30);
    }
// 魔方翻转
    Flip(index) {
      let oBox = document.querySelector('.box');
      let oUl = document.querySelector('.Exhibition');
      let aLi = oUl.children;
      setTimeout(() => {
        this.show();
      }, 1 );
      setTimeout(() => {
        oBox.className = 'box box_' + index;
      }, 1000 );
      setTimeout(() => {
        aLi[index].style.transform = 'scale(6,3) translate(1px,47px)';
        aLi[index].style.opacity = 1;
      }, 2000 ) ;
    }
    // 模块初始化
    show() {
      let oUl = document.querySelector('.Exhibition');
      let aLi = oUl.children;
      for ( let i = 0; i < aLi.length; i++) {
        aLi[i].style.opacity = 0;
        aLi[i].style.zIndex = 0;
        aLi[i].style.transform = 'scale(1,1)';
      }
    }
}
