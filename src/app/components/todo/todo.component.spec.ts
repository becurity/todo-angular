import {
  async, ComponentFixture, TestBed,
} from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import {FormsModule} from '@angular/forms';
import {until} from 'selenium-webdriver';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TodoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todo = {
      what: 'this is a task',
      isDone: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display todo\'s what in textarea when todo is not done', () => {
    setTimeout(() => {
      expect(component.editor.nativeElement.value).toContain(component.todo.what);
    }, 200);
  });
  it('should show done div when todo is done', () => {
    const componentNative = fixture.debugElement.nativeElement;
    component.todo.isDone = true;
    fixture.detectChanges();
    expect(componentNative.querySelector('#done')).toBeTruthy();
  });
  it('should hide not done div when todo is done', () => {
    const componentNative = fixture.debugElement.nativeElement;
    component.todo.isDone = true;
    fixture.detectChanges();
    expect(componentNative.querySelector('#not-done')).toBe(null);
  });
  it('should show not done div when todo is not done', () => {
    const componentNative = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(componentNative.querySelector('#not-done')).toBeTruthy();
  });
  it('should hide done div when todo is not done', () => {
    const componentNative = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(componentNative.querySelector('#done')).toBe(null);
  });

});
