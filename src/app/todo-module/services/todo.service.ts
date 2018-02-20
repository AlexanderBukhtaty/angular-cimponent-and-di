import { Injectable } from '@angular/core';

export interface ITodoItemData {
  name: string;
  desc: string;
}

@Injectable()
export class TodoService {
  // public otherService: OtherService;
  constructor(
  // injector: Injector
  ) {
  // this.otherService  = injector.get(OtherService);
  }

  getItems(): ITodoItemData[] {
    return [
      { name: 'task1.name', desc: 'task1.description'},
      { name: 'task2.name', desc: 'task2.description'},
      { name: 'task3.name', desc: 'task3.description'},
      { name: 'task4.name', desc: 'task4.description'}
    ];
  }
}
