import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoService } from './services/todo.service';

import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';

export const todosFactory = (todoService: TodoService) => {
  return [...todoService.getItems(), { name: 'todosFactory task', desc: 'todosFactory desc'}];
};

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ItemComponent],
  exports: [ListComponent, ItemComponent],
  providers: [
    // TodoService,
    { provide: TodoService, useClass: TodoService },
    { provide: 'SAME_CONSTANT', useValue: 'Constant-value' },
    // { provide: TodoService, useExisting: OldTodoService },
    { provide: 'FACTORY_ITEMS', useFactory: todosFactory, deps: [ TodoService ] },
    { provide: 'MULTI_DEPENDENCY', useValue: 'dep1', multi: true },
    { provide: 'MULTI_DEPENDENCY', useValue: 'dep2', multi: true },
    { provide: 'MULTI_DEPENDENCY', useValue: 'dep3', multi: true },
  ]
})
export class TodoModule { }
