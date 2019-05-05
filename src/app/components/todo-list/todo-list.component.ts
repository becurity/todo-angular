import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TodoList} from '../../model/TodoList';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: TodoList;
  @ViewChild('main') main;
  @ViewChild('header') header;
  colors = [
    '#CCFFCC',
    '#FFFF99',
    '#ffffff',
    '#FF6699',
    '#9999FF',
    '#0099CC',
    '#000000'
  ];
  constructor() { }

  ngOnInit() {
    this.initDrag();
  }
  addNewTodo(todo: Todo) {
    const nextIndex = this.todoList.todos.indexOf(todo) + 1;
    const newToDo: Todo = {
      id: new Date().getTime(),
      what: '',
      isDone: false
    };
    this.todoList.todos.splice(nextIndex, 0, newToDo);
  }
  blendColors(color1, color2, percentage) {
    const color1Rgb = this.hexToRgb(color1);
    const color2Rgb = this.hexToRgb(color2);
    const resultRgb = [
      1 / 100 * (100 - percentage) * color1Rgb[0] + percentage / 100 * color2Rgb[0],
      1 / 100 * (100 - percentage) * color1Rgb[1] + percentage / 100 * color2Rgb[1],
      1 / 100 * (100 - percentage) * color1Rgb[2] + percentage / 100 * color2Rgb[2]
    ];
    return this.rgbToHex(resultRgb);
  }
  hexToRgb(color: string) {
    return [parseInt(color[1] + color[2], 16), parseInt(color[3] + color[4], 16), parseInt(color[5] + color[6], 16)];
  }
  rgbToHex(rgb) {
    return '#' + this.intToHex(rgb[0]) + this.intToHex(rgb[1]) + this.intToHex(rgb[2]);
  }
  intToHex(num: number) {
    let hex = Math.round(num).toString(16);
    if (hex.length === 1) {
      hex = '0' + hex;
    }
    return hex;
  }
  setCurrentTodo(todo: Todo) {
    this.todoList.currentTodo = todo;
  }
  getBackGround(percent: number) {
    return 'linear-gradient(to bottom, ' +
    `${this.todoList.background} 0%, ${this.blendColors(this.todoList.background, '#00000', percent)} 100%)`;
  }
  setBackground(color: string) {
    this.todoList.background = color;
  }
  initDrag() {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    const element = this.main.nativeElement;
    const header = this.header.nativeElement;
    header.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      let top = element.offsetTop - pos2;
      let left = element.offsetLeft - pos1;
      if (top < 0) { top = 0; }
      if (left < 0) { left = 0; }
      if (top > window.innerHeight - element.clientHeight) { top = window.innerHeight - element.clientHeight; }
      if (left > window.innerWidth - element.clientWidth) { left = window.innerWidth - element.clientWidth; }
      element.style.top = top + 'px';
      element.style.left = left + 'px';
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}
