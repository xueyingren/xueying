import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
import * as $ from 'jquery';
@Component({
  selector: 'app-left-tree',
  templateUrl: './left-tree.component.html',
  styleUrls: ['./left-tree.component.less']
})
export class LeftTreeComponent implements OnInit {

  nodes = [ {
    title   : '0-0',
    key     : '00',
    expanded: true,
    children: [ {
      title   : '0-0-0',
      key     : '000',
      expanded: true,
      children: [
        { title: '0-0-0-0', key: '0000', isLeaf: true },
        { title: '0-0-0-1', key: '0001', isLeaf: true },
        { title: '0-0-0-2', key: '0002', isLeaf: true }
      ]
    }, {
      title   : '0-0-1',
      key     : '001',
      children: [
        { title: '0-0-1-0', key: '0010', isLeaf: true },
        { title: '0-0-1-1', key: '0011', isLeaf: true },
        { title: '0-0-1-2', key: '0012', isLeaf: true }
      ]
    }, {
      title: '0-0-2',
      key  : '002'
    } ]
  }, {
    title   : '0-1',
    key     : '01',
    children: [ {
      title   : '0-1-0',
      key     : '010',
      children: [
        { title: '0-1-0-0', key: '0100', isLeaf: true },
        { title: '0-1-0-1', key: '0101', isLeaf: true },
        { title: '0-1-0-2', key: '0102', isLeaf: true }
      ]
    }, {
      title   : '0-1-1',
      key     : '011',
      children: [
        { title: '0-1-1-0', key: '0110', isLeaf: true },
        { title: '0-1-1-1', key: '0111', isLeaf: true },
        { title: '0-1-1-2', key: '0112', isLeaf: true }
      ]
    } ]
  }, {
    title : '0-2',
    key   : '02',
    isLeaf: true
  } ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
    console.log(this.nodes);
  }
  click(event: NzFormatEmitEvent): void {
    console.log(event.selectedKeys[0].parentNode);
    console.log($('.ant-tree-treenode-selected'));

  }
  ngOnInit() {
  }

}
