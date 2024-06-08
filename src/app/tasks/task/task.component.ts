import { Component, input } from '@angular/core';
import { type Task } from '../../models/task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  task = input.required<Task>();

  constructor(private tasksService: TasksService) {}

  completeTask(): void {
    this.tasksService.removeTask(this.task().id);
  }
}
