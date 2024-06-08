import { Injectable } from '@angular/core';
import { type TaskData, type Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      userId: '1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      id: '2',
      userId: '3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31'
    },
    {
      id: '3',
      userId: '3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15'
    }
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((t) => t.userId === userId);
  }

  addTask(taskData: TaskData, userId: string): void {
    const taskId: string = (this.tasks.length + 1).toString();
    const task: Task = {
      id: taskId,
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    };
    this.tasks.push(task);
    this.saveTasksToLocalStorage();
  }

  removeTask(id: string): void {
    const objWithIdIndex = this.tasks.findIndex((obj) => obj.id === id);
    this.tasks.splice(objWithIdIndex, 1);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
