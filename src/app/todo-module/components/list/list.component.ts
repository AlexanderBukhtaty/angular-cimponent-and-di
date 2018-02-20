import { Component, OnInit } from '@angular/core';

import { ITodoItemData } from '../item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public items: ITodoItemData[] = [];

  constructor() {
    this.items = [
      { name: 'task1.name', desc: 'task1.description'},
      { name: 'task2.name', desc: 'task2.description'},
      { name: 'task3.name', desc: 'task3.description'},
      { name: 'task4.name', desc: 'task4.description'}
    ];
  }


  ngOnInit() {
  }


  addTask(taskName: string) {
    if (taskName) {
      let newTask = {
        name: taskName,
        desc: 'test.description'
      };
      this.items.push( newTask );
    }
  }


  removeTask(index: number) {
    this.items.splice(index, 1);
  }
}
