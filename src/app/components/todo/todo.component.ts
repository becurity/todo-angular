import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() toto: Todo;
  @Output() addTodo = new EventEmitter();
  @ViewChild('editor') editor;
  constructor() { }

  ngOnInit() {
    this.autosize();
  }
  editorKeyDown(event) {
    if (event.which !== 13) { return; }
    event.preventDefault();
    event.stopPropagation();
    this.addTodo.emit();
    this.editor.nativeElement.blur();
  }
  editorKeyUp() {
    this.autosize();
  }
  autosize() {
    const $this = this;
    setTimeout(() => {
      $this.editor.nativeElement.style.cssText = 'height:auto; padding:0';
      $this.editor.nativeElement.style.cssText = 'height:' + $this.editor.nativeElement.scrollHeight + 'px';
    }, 0);
  }
  changeStatus(isDone: boolean) {
    this.toto.isDone = isDone;
    if (!this.toto.isDone) {
      this.autosize();
    }
  }
}
