import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef, Inject, Host, Optional } from '@angular/core';

import { ItemComponent } from '../item/item.component';
import { TodoService, ITodoItemData } from '../..//services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  public items: ITodoItemData[] = [];
  @ViewChild('newTodoDesc', { read: ElementRef })
  private newTaskDescription;
  @ViewChildren('todoItem')
  private itemsComponents: QueryList<ItemComponent>;

  constructor(
    private todoService: TodoService,
    // @Inject(TodoService) private todoService: TodoService,
    // @Host() @Inject(TodoService) private todoService: TodoService,
    @Optional() @Inject('sameService') private sameService: any,
    @Inject('SAME_CONSTANT') private sameConstant: string,
    @Inject('FACTORY_ITEMS') public factoryItems: any,
    @Inject('MULTI_DEPENDENCY') private multiDep: any,
  ) {
    this.items = todoService.getItems();
  }


  ngOnInit() {
    console.log(this);
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
      this.todoService.addItem(newTask);
    }
  }


  removeTask(index: number) {
    this.todoService.removeItem(index);
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
