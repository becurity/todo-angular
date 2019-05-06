import {Component, ViewChild} from '@angular/core';
import {TodoList} from './model/TodoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('container') container;
  todoLists: (TodoList)[] = [
    {
      title: 'Todo List1',
      background: '#CCFFCC',
      color: '',
      todos: [
        {
          id: new Date().getTime(),
          what: 'My first task',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My second very long task with multiple words. these words will go to the next line like a ldokj.',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'tasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktask',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My forth task',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My fith task',
          isDone: false
        }
      ],
      currentTodo: null,
      positionPercentX: 40,
      positionPercentY: 65
    },
    {
      title: 'Todo List2',
      background: '#FFFF99',
      color: '',
      todos: [
        {
          id: new Date().getTime(),
          what: 'My first task',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My second very long task with multiple words. these words will go to the next line like a ldokj.',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'tasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktask',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My forth task',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My fith task',
          isDone: false
        }
      ],
      currentTodo: null,
      positionPercentX: 65,
      positionPercentY: 10
    },
    {
      title: 'Todo List3',
      background: '#ffffff',
      color: '',
      todos: [
        {
          id: new Date().getTime(),
          what: 'My first task',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My second very long task with multiple words. these words will go to the next line like a ldokj.',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'tasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktask',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My forth task',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My fith task',
          isDone: false
        }
      ],
      currentTodo: null,
      positionPercentX: 1,
      positionPercentY: 50
    },
    {
      title: 'Todo List4',
      background: '#FF6699',
      color: '',
      todos: [
        {
          id: new Date().getTime(),
          what: 'My first task',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My second very long task with multiple words. these words will go to the next line like a ldokj.',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'tasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktask',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My forth task',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My fith task',
          isDone: false
        }
      ],
      currentTodo: null,
      positionPercentX: 40,
      positionPercentY: 20
    },
    {
      title: 'Todo List5',
      background: '#9999FF',
      color: '',
      todos: [
        {
          id: new Date().getTime(),
          what: 'My first task',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My second very long task with multiple words. these words will go to the next line like a ldokj.',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'tasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktasktask',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My forth task',
          isDone: false
        },
        {
          id: new Date().getTime(),
          what: 'My fith task',
          isDone: false
        }
      ],
      currentTodo: null,
      positionPercentX: 10,
      positionPercentY: 5
    }
  ];
  zIndex = 100;
  onClick(e) {
    const todoListDiv = e.target.closest('.todo-list');
    if (!todoListDiv) { return; }
    this.zIndex++;
    todoListDiv.style.zIndex = this.zIndex;
  }
}
