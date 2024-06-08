import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskData } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;
  title = signal('');
  summary = signal('');
  date = signal('');
  private tasksService: TasksService = inject(TasksService);

  cancelNewTask() {
    this.close.emit();
  }

  submit() {
    const taskData: TaskData = {
      title: this.title(),
      summary: this.summary(),
      dueDate: this.date()
    };
    this.tasksService.addTask(taskData, this.userId);
    this.cancelNewTask();
  }
}
