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
    Flip(index) {
      if ( index === 0) {
        document.querySelector('.box').style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
      } else if ( index === 1) {
        document.querySelector('.box').style.transform = 'perspective(800px) rotateY(180deg) rotateX(0deg)';
      } else if ( index === 2) {
        document.querySelector('.box').style.transform = 'perspective(800px) rotateY(90deg) rotateX(0deg)';
      } else if ( index === 3) {
        document.querySelector('.box').style.transform = 'perspective(800px) rotateY(-90deg) rotateX(0deg)';
      } else if ( index === 4) {
        document.querySelector('.box').style.transform = 'perspective(800px) rotateY(0deg) rotateX(-90deg)';
      } else if ( index === 5) {
        document.querySelector('.box').style.transform = 'perspective(800px) rotateY(0deg) rotateX(90deg)';
      }
    }
}
