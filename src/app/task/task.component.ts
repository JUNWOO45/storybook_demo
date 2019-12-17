import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-item',
  template: `
    <div class="list-item">
      <input type="text" [value]="task.title" readonly="true" />
      <button>hi</button>

    </div>
  
  `
})
export class TaskComponent implements OnInit {
  title: string;
  @Input() task: Task;
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onPin(id) {
    this.onPinTask.emit(id);
  }

  onArchive(id) {
    this.onArchiveTask.emit(id);
  }
}
