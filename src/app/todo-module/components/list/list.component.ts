import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { ItemComponent, ITodoItemData } from '../item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {
  public items: ITodoItemData[] = [];
  @ViewChild('newTodoDesc', { read: ElementRef })
  private newTaskDescription;
  @ViewChildren('todoItem')
  private itemsComponents: QueryList<ItemComponent>;

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

  ngAfterViewInit() {
    this.itemsComponents.changes.subscribe((val) => {
      console.log(val);
    });
  }

  addTask(taskName: string) {
    if (taskName) {
      let newTask = {
        name: taskName,
        desc: this.newTaskDescription.nativeElement.value
      };
      this.items.push( newTask );
    }
  }


  removeTask(index: number) {
    this.items.splice(index, 1);
  }

  collapseAll() {
    this.itemsComponents.forEach((item) => {
      item.isOpen = false;
    });
  }
  
  openAll() {
    this.itemsComponents.forEach((item) => {
      item.isOpen = true;
    });
  }  
}
