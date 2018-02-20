import { Injectable } from '@angular/core';

export interface ITodoItemData {
  name: string;
  desc: string;
}

@Injectable()
export class TodoService {
  public items: ITodoItemData[];
  // public otherService: OtherService;

  constructor(
    // injector: Injector
  ) {
    // this.otherService  = injector.get(OtherService);
  this.items = [
      { name: 'task1.name', desc: 'task1.description'},
      { name: 'task2.name', desc: 'task2.description'},
      { name: 'task3.name', desc: 'task3.description'}
    ];
  }

  getItems(): ITodoItemData[] {
    return this.items;
  }

  addItem(item: ITodoItemData) {
    this.items.push(item);
  }

  removeItem (id: number) {
    this.items.splice(id, 1);
  }

}
