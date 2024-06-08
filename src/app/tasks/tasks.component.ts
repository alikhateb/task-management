import { Component, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task } from '../models/task.model';
import { type User } from '../models/user.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  user = input.required<User>();
  isAdded = signal(false);

  constructor(private tasksService: TasksService) {}

  get userTasks(): Task[] {
    return this.tasksService.getUserTasks(this.user().id);
  }

  addTask(): void {
    this.isAdded.set(true);
  }

  onCloseAddTask(): void {
    this.isAdded.set(false);
  }
}
