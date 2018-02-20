import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public items = ['task1', 'task2', 'task3', 'task4'];
  constructor() { }


  ngOnInit() {
  }


  addTask(taskName: string) {
    if (taskName) {
      this.items.push(taskName);
    }
  }


  removeTask(index: number) {
    this.items.splice(index, 1);
  }
}
