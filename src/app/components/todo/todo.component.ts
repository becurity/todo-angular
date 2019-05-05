import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() addTodo = new EventEmitter();
  @ViewChild('editor') editor;
  toolsIsVisible = false;
  constructor() { }

  ngOnInit() {
    this.autosize();
    const $this = this;
    if (this.todo.what.length === 0) {
      setTimeout(() => {
        $this.editor.nativeElement.focus();
      }, 0);

    }
  }
  editorKeyDown(event) {
    if (event.which !== 13) { return; }
    event.preventDefault();
    event.stopPropagation();
    this.addTodo.emit(this.todo);
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
    this.todo.isDone = isDone;
    if (!this.todo.isDone) {
      this.autosize();
    }
  }
  showTools() {
    this.toolsIsVisible = true;
  }
  hideTools() {
    this.toolsIsVisible = false;
  }
}
