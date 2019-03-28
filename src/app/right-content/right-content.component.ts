import { Component, OnInit } from '@angular/core';
import { InteractiveCourComponent } from './interactive-cour/interactive-cour.component';
@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.less']
})
export class RightContentComponent implements OnInit {

  constructor(private Interactive: InteractiveCourComponent) { }
  ckeditorContent = '<p>Some html</p>';

  protected  config: any = {
    uiColor: '#F8F8F8',   // 编辑框背景色
    language: 'zh-cn',  // 显示语言
    toolbarCanCollapse: true,  // 是否可收缩功能栏
     // 文件上传路径
     filebrowserUploadUrl : `https://192.168.25.125:8443/steam/teacher/course/resource/upload`,
     // 图片上传后端url
     filebrowserImageUploadUrl: `https://192.168.25.125:8443/steam/teacher/course/resource/upload`,
     // flash上传后端url
     filebrowserFlashUploadUrl: `https://192.168.25.125:8443/steam/teacher/course/resource/upload`,
     // audio上传url
     filebrowserAudioUploadUrl: `https://192.168.25.125:8443/steam/teacher/course/resource/upload`,
     toolbar: [ ['Maximize'], ['Undo', 'Redo', '-', 'Cut', ' Copy', 'Paste', 'PasteText', 'PasteFromWord', '-',
     'Link', 'Unlink', 'Anchor', '-', 'Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', '-', 'Source'],
     ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript', '-', 'NumberedList', 'BulletedList',
     '-', 'Outdent', 'Indent', 'Blockquote'], ['Styles', 'Format', 'Font', 'FontSize'] ]
    };
  ngOnInit() {
  }
  clck() {
    console.log(this.ckeditorContent);
    this.Interactive.https();
  }
}
